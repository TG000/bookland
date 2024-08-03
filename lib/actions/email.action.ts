"use server";

import { SendEmailProps } from "@/types/email";
import { createTransport } from "nodemailer";
import { lucia, prisma } from "../auth";
import { alphabet, generateRandomString } from "oslo/crypto";
import { TimeSpan, createDate, isWithinExpirationDate } from "oslo";
import { User } from "lucia";
import { cookies } from "next/headers";

export async function sendEmail(params: SendEmailProps) {
    try {
        const { senderName, to, subject, text, html } = params;

        const transporter = createTransport({
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT),
            secure: process.env.SMTP_PORT === 465,
            auth: {
                user: process.env.SMTP_USERNAME,
                pass: process.env.SMTP_PASSWORD,
            },
        });

        const info = await transporter.sendMail({
            from: {
                name: senderName !== undefined ? senderName : "Bookland",
                address: process.env.SMTP_USERNAME,
            },
            to,
            subject,
            text,
            html,
        });

        return {
            success: "success",
            message: `Email sent: ${info.messageId}`,
        };
    } catch (error) {
        console.error(error);
    }
}

export async function generateEmailVerificationCode(
    userId: string,
    email: string
) {
    await prisma.emailVerificationCode.deleteMany({
        where: {
            userId,
        },
    });

    const code = generateRandomString(6, alphabet("0-9", "A-Z"));

    await prisma.emailVerificationCode.create({
        data: {
            userId,
            email,
            code,
            expiresAt: createDate(new TimeSpan(15, "m")),
        },
    });

    return code;
}

export async function sendVerificationCode(
    email: string,
    verificationCode: string
) {
    await sendEmail({
        to: email,
        subject: "Email Verification Code",
        text: `Your email verification code is ${verificationCode}.`,
        html: `<p>Your email verification code is <strong>${verificationCode}</strong>.</p>`,
    });
}

export async function verifyVerificationCode(user: User, code: string) {
    const validCode = await prisma.$transaction(async (prisma) => {
        const databaseCode = await prisma.emailVerificationCode.findFirst({
            where: {
                userId: user.id,
            },
        });

        if (!databaseCode || databaseCode.code !== code) {
            return false;
        }

        await prisma.emailVerificationCode.delete({
            where: {
                id: databaseCode.id,
            },
        });

        if (!isWithinExpirationDate(databaseCode.expiresAt)) {
            return false;
        }

        if (databaseCode.email !== user.email) {
            return false;
        }

        return true;
    });

    if (!validCode) {
        return {
            failed: true,
            message: "Invalid verification code.",
        };
    }

    await lucia.invalidateUserSessions(user.id);
    await prisma.user.update({
        data: {
            emailVerified: true,
        },
        where: {
            id: user.id,
        },
    });

    const session = await lucia.createSession(user.id, {});
    const sessionCookie = lucia.createSessionCookie(session.id);
    cookies().set(
        sessionCookie.name,
        sessionCookie.value,
        sessionCookie.attributes
    );
}
