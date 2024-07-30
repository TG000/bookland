import { OAuthProvider } from "@/types/auth";

const GoogleProvider: OAuthProvider = {
	id: "google",
	name: "Google",
	redirectURI: process.env.LUCIA_GOOGLE_REDIRECT_URI,
};

export { GoogleProvider };
