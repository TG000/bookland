import { google, lucia, prisma } from "@/lib/auth";
import { getUsernameByEmail } from "@/lib/utils";
import { GoogleUser } from "@/types/auth";
import { generateIdFromEntropySize } from "lucia";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    try {
        const url = new URL(request.nextUrl);

        const code = url.searchParams.get("code");
        const state = url.searchParams.get("state");

        if (!code || !state) {
            return Response.json(
                { failed: "Code or state not found." },
                { status: 400 }
            );
        }

        const codeVerifier = cookies().get("codeVerifier")?.value;
        const savedState = cookies().get("state")?.value;

        if (!codeVerifier || !savedState) {
            return Response.json(
                { failed: "Code verifier or saved state not found." },
                { status: 400 }
            );
        }

        if (state !== savedState) {
            return Response.json(
                { failed: "State mismatch." },
                { status: 400 }
            );
        }

        const { accessToken, refreshToken, accessTokenExpiresAt } =
            await google.validateAuthorizationCode(code, codeVerifier);

        const googleResponse = await fetch(
            "https://www.googleapis.com/oauth2/v1/userinfo",
            {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
                method: "GET",
            }
        );

        const googleData = (await googleResponse.json()) as GoogleUser;

        const response = await prisma.$transaction(async (prisma) => {
            const user = await prisma.user.findFirst({
                where: {
                    email: googleData.email,
                },
            });

            const oAuthAccount = await prisma.oAuthAccount.findFirst({
                where: {
                    userId: user?.id,
                },
            });

            if (!user) {
                const userId = generateIdFromEntropySize(10);

                const createdUserResponse = await prisma.user.create({
                    data: {
                        id: userId,
                        username: getUsernameByEmail(googleData.email),
                        displayName: googleData.name,
                        email: googleData.email,
                        profilePictureURL: googleData.picture,
                    },
                });

                if (createdUserResponse === null) {
                    return {
                        failed: true,
                        message: "Failed to create user.",
                    };
                }

                const createdOAuthAccountResponse =
                    await prisma.oAuthAccount.create({
                        data: {
                            providerId: "google",
                            providerUserId: googleData.id,
                            userId,
                            accessToken,
                            expiresAt: accessTokenExpiresAt,
                            refreshToken,
                        },
                    });

                if (createdOAuthAccountResponse === null) {
                    return {
                        failed: true,
                        message: "Failed to create oauth user.",
                    };
                }
            } else if (user && !oAuthAccount) {
                const createdOAuthAccountResponse =
                    await prisma.oAuthAccount.create({
                        data: {
                            providerId: "google",
                            providerUserId: googleData.id,
                            userId: user.id,
                            accessToken,
                            expiresAt: accessTokenExpiresAt,
                            refreshToken,
                        },
                    });

                if (createdOAuthAccountResponse === null) {
                    return {
                        failed: true,
                        message: "Failed to create oauth user.",
                    };
                }
            } else {
                const updatedOAuthAccountResponse =
                    await prisma.oAuthAccount.update({
                        data: {
                            accessToken,
                            expiresAt: accessTokenExpiresAt,
                            refreshToken,
                        },
                        where: {
                            providerId_providerUserId: {
                                providerId: "google",
                                providerUserId: googleData.id,
                            },
                        },
                    });

                if (updatedOAuthAccountResponse === null) {
                    return {
                        failed: true,
                        message: "Failed to update oauth user.",
                    };
                }
            }

            return {
                success: true,
                message: "Successfully signed in.",
            };
        });

        if (response.success) {
            const user = await prisma.user.findFirst({
                where: {
                    email: googleData.email,
                },
            });

            const session = await lucia.createSession(user!.id, {});
            const sessionCookie = lucia.createSessionCookie(session.id);
            cookies().set(
                sessionCookie.name,
                sessionCookie.value,
                sessionCookie.attributes
            );

            cookies().set("state", "", { expires: new Date(0) });
            cookies().set("codeVerifier", "", { expires: new Date(0) });

            return NextResponse.redirect(new URL("/", process.env.BASE_URL), {
                status: 302,
            });
        }
    } catch (error: any) {
        console.error(error);
        return Response.json({ failed: error.message }, { status: 500 });
    }
}
