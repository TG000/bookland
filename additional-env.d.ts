/* eslint-disable no-unused-vars */
declare global {
    namespace NodeJS {
        interface ProcessEnv {
            NODE_ENV: "development" | "production";

            GOOGLE_CLIENT_ID: string;
            GOOGLE_CLIENT_SECRET: string;

            DATABASE_URL: string;
        }
    }
}

export {};
