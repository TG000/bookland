"use server";

import { SignInProps, SignUpProps } from "@/types/auth";
import { google, lucia, prisma } from "@/lib/auth";
import { verify, hash } from "@node-rs/argon2";
import { Session, generateIdFromEntropySize, User } from "lucia";
import { cookies } from "next/headers";
import { isValidEmail, isValidUsername } from "../utils";
import { cache } from "react";
import { generateCodeVerifier, generateState } from "arctic";

export async function signIn(params: SignInProps) {
    try {
        const { email, password } = params;

        if (
            typeof email !== "string" ||
            !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
        ) {
            return {
                error: true,
                data: "email",
                message: "Invalid email address.",
            };
        }

        if (
            typeof password !== "string" ||
            password.length < 6 ||
            password.length > 255
        ) {
            return {
                error: true,
                data: "password",
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
                failed: true,
                message: "Incorrect email or password.",
            };
        }

        const validPassword = await verify(
            existingUser.passwordHash!,
            password
        );

        if (!validPassword) {
            return {
                failed: true,
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

        return {
            success: true,
            data: existingUser,
            message: "Sign in successfully.",
        };
    } catch (error) {
        console.error(error);
        return { failed: true, message: "An error occurred." };
    }
}

export async function signInWithOAuth(providerId: string) {
    switch (providerId) {
        case "google":
            return createGoogleAuthorizationURL();
        default:
            return { failed: true, message: "Invalid OAuth provider." };
    }
}

export async function createGoogleAuthorizationURL() {
    try {
        const state = generateState();
        const codeVerifier = generateCodeVerifier();

        cookies().set("codeVerifier", codeVerifier, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            maxAge: 60 * 10,
            path: "/",
        });

        cookies().set("state", state, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            maxAge: 60 * 10,
            path: "/",
        });

        const authorizationURL = await google.createAuthorizationURL(
            state,
            codeVerifier,
            {
                scopes: ["openid", "email", "profile"],
            }
        );

        return {
            success: true,
            data: JSON.parse(JSON.stringify(authorizationURL)),
            message: "Redirecting to OAuth provider.",
        };
    } catch (error) {
        console.error(error);
        return { failed: true, message: "An error occurred." };
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
                error: true,
                data: "username",
                message: "Invalid username.",
            };
        }

        if (typeof email !== "string" || !isValidEmail(email)) {
            return {
                error: true,
                data: "email",
                message: "Invalid email address.",
            };
        }

        if (typeof phone !== "string" || phone.length !== 10) {
            return {
                error: true,
                data: "phone",
                message: "Invalid phone number.",
            };
        }

        if (
            typeof password !== "string" ||
            password.length < 6 ||
            password.length > 255
        ) {
            return {
                error: true,
                data: "password",
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
                failed: true,
                message: "User already exists.",
            };
        }

        const passwordHash = await hash(password, {
            memoryCost: 19456,
            timeCost: 2,
            parallelism: 1,
        });

        const userId = generateIdFromEntropySize(10);
        const profilePictureURL = process.env.RANDOM_AVATAR_API + username;

        const newUser = await prisma.user.create({
            data: {
                id: userId,
                username,
                displayName: username,
                email,
                phone,
                passwordHash,
                profilePictureURL,
            },
        });

        const session = await lucia.createSession(userId, {});
        const sessionCookie = lucia.createSessionCookie(session.id);
        cookies().set(
            sessionCookie.name,
            sessionCookie.value,
            sessionCookie.attributes
        );

        return {
            success: true,
            data: newUser,
            message: "Sign up successfully.",
        };
    } catch (error) {
        console.error(error);
        return { failed: true, message: "An error occurred." };
    }
}

export async function signOut() {
    const { session } = await validateRequest();

    if (!session) {
        return {
            failed: true,
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

    return { success: true, data: session, message: "Sign out successfully." };
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
