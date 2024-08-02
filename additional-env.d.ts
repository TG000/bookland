/* eslint-disable no-unused-vars */
declare global {
    namespace NodeJS {
        interface ProcessEnv {
            NODE_ENV: "development" | "production";

            GOOGLE_CLIENT_ID: string;
            GOOGLE_CLIENT_SECRET: string;

            SMTP_HOST: string;
            SMTP_PORT: Number;
            SMTP_USERNAME: string;
            SMTP_PASSWORD: string;

            DATABASE_URL: string;
        }
    }
}

export {};
