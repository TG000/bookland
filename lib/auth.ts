import { PrismaClient } from "@prisma/client";
import { Lucia } from "lucia";
import { PrismaAdapter } from "@lucia-auth/adapter-prisma";
import { Google } from "arctic";

export const google = new Google(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET,
    process.env.BASE_URL + process.env.GOOGLE_REDIRECT_URI
);

export const prisma = new PrismaClient();

const adapter = new PrismaAdapter(prisma.session, prisma.user);

export const lucia = new Lucia(adapter, {
    sessionCookie: {
        expires: false,
        attributes: {
            secure: process.env.NODE_ENV === "production",
        },
    },
    getUserAttributes: (attributes) => {
        return {
            username: attributes.username,
            displayName: attributes.displayName,
            email: attributes.email,
            emailVerified: attributes.emailVerified,
            phone: attributes.phone,
            role: attributes.role,
            profilePictureURL: attributes.profilePictureURL,
        };
    },
});
