/* eslint-disable no-unused-vars */
import { lucia } from "@/lib/auth";

interface DatabaseUserAttributes {
    id: string;
    username: string;
    displayName: string?;
    email: string;
    emailVerified: boolean;
    phone: string;
    role: string;
}

declare module "lucia" {
    interface Register {
        Lucia: typeof lucia;
        DatabaseUserAttributes: DatabaseUserAttributes;
    }
}
