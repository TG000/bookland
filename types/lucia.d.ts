/* eslint-disable no-unused-vars */
import { lucia } from "@/lib/auth";
import { Role } from "@prisma/client";

interface DatabaseUserAttributes {
    id: string;
    username: string;
    displayName: string?;
    email: string;
    emailVerified: boolean;
    phone: string;
    role: Role;
    profilePictureURL: string;
}

declare module "lucia" {
    interface Register {
        Lucia: typeof lucia;
        DatabaseUserAttributes: DatabaseUserAttributes;
    }
}
