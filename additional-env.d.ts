/* eslint-disable no-unused-vars */
declare global {
	namespace NodeJS {
		interface ProcessEnv {
			NODE_ENV: "development" | "production";

			NEXT_PUBLIC_SUPABASE_URL: string;
			NEXT_PUBLIC_SUPABASE_ANON_KEY: string;

			GOOGLE_CLIENT_ID: string;
			GOOGLE_CLIENT_SECRET: string;

			DATABASE_URL: string;
			DIRECT_URL: string;
		}
	}
}

export {};
