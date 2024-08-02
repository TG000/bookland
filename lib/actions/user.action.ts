"use server";

import { SignInProps, SignUpProps } from "@/types/auth";
import { lucia, prisma } from "@/lib/auth";
import { verify, hash } from "@node-rs/argon2";
import { Session, generateIdFromEntropySize, User } from "lucia";
import { cookies } from "next/headers";
import { isValidEmail, isValidUsername } from "../utils";
import { cache } from "react";

export async function signIn(params: SignInProps) {
    try {
        const { email, password } = params;

        if (
            typeof email !== "string" ||
            !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
        ) {
            return {
                error: "email",
                message: "Invalid email address.",
            };
        }

        if (
            typeof password !== "string" ||
            password.length < 6 ||
            password.length > 255
        ) {
            return {
                error: "password",
                message: "Invalid password.",
            };
        }

        const existingUser = await prisma.user.findFirst({
            where: {
                email,
            },
        });

        if (existingUser === null) {
            return {
                data: "failed",
                message: "Incorrect email or password.",
            };
        }

        const validPassword = await verify(
            existingUser.password_hash,
            password
        );

        if (!validPassword) {
            return {
                data: "failed",
                message: "Incorrect email or password.",
            };
        }

        const session = await lucia.createSession(existingUser.id, {});
        const sessionCookie = lucia.createSessionCookie(session.id);
        cookies().set(
            sessionCookie.name,
            sessionCookie.value,
            sessionCookie.attributes
        );

        return { data: "success", message: "Sign in successfully." };
    } catch (error) {
        console.error(error);
    }
}

export async function signUp(params: SignUpProps) {
    try {
        const { username, email, phone, password } = params;

        if (
            typeof username !== "string" ||
            username.length < 3 ||
            username.length > 20 ||
            !isValidUsername(username)
        ) {
            return {
                error: "username",
                message: "Invalid username.",
            };
        }

        if (typeof email !== "string" || !isValidEmail(email)) {
            return {
                error: "email",
                message: "Invalid email address.",
            };
        }

        if (typeof phone !== "string" || phone.length !== 10) {
            return {
                error: "phone",
                message: "Invalid phone number.",
            };
        }

        if (
            typeof password !== "string" ||
            password.length < 6 ||
            password.length > 255
        ) {
            return {
                error: "password",
                message: "Invalid password.",
            };
        }

        const existingUser = await prisma.user.findFirst({
            where: {
                email,
            },
        });

        if (existingUser !== null) {
            return {
                data: "failed",
                message: "User already exists.",
            };
        }

        const passwordHash = await hash(password, {
            memoryCost: 19456,
            timeCost: 2,
            parallelism: 1,
        });

        const userId = generateIdFromEntropySize(10);

        await prisma.user.create({
            data: {
                id: userId,
                username,
                email,
                phone,
                password_hash: passwordHash,
            },
        });

        const session = await lucia.createSession(userId, {});
        const sessionCookie = lucia.createSessionCookie(session.id);
        cookies().set(
            sessionCookie.name,
            sessionCookie.value,
            sessionCookie.attributes
        );

        return { data: "success", message: "Sign up successfully." };
    } catch (error) {
        console.error(error);
        return { data: "failed", message: "An error occurred." };
    }
}

export async function signOut() {
    const { session } = await validateRequest();

    if (!session) {
        return {
            data: "failed",
            message: "Unauthorized.",
        };
    }

    await lucia.invalidateSession(session.id);

    const sessionCookie = lucia.createBlankSessionCookie();
    cookies().set(
        sessionCookie.name,
        sessionCookie.value,
        sessionCookie.attributes
    );

    return { data: "success", message: "Sign out successfully." };
}

export const validateRequest = cache(
    async (): Promise<
        { user: User; session: Session } | { user: null; session: null }
    > => {
        const sessionId = cookies().get(lucia.sessionCookieName)?.value ?? null;

        if (!sessionId) {
            return { user: null, session: null };
        }

        const result = await lucia.validateSession(sessionId);

        try {
            if (result.session && result.session.fresh) {
                const sessionCookie = lucia.createSessionCookie(
                    result.session.id
                );
                cookies().set(
                    sessionCookie.name,
                    sessionCookie.value,
                    sessionCookie.attributes
                );
            }

            if (!result.session) {
                const sessionCookie = lucia.createBlankSessionCookie();
                cookies().set(
                    sessionCookie.name,
                    sessionCookie.value,
                    sessionCookie.attributes
                );
            }
        } catch {}

        return result;
    }
);
