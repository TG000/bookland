/* eslint-disable no-unused-vars */
declare global {
    namespace NodeJS {
        interface ProcessEnv {
            NODE_ENV: "development" | "production";
            BASE_URL: string;

            RANDOM_AVATAR_API: string;

            GOOGLE_CLIENT_ID: string;
            GOOGLE_CLIENT_SECRET: string;
            GOOGLE_REDIRECT_URI: string;

            SMTP_HOST: string;
            SMTP_PORT: Number;
            SMTP_USERNAME: string;
            SMTP_PASSWORD: string;

            DATABASE_URL: string;
        }
    }
}

export {};
