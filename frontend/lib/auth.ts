import { NextAuthOptions } from "next-auth";
import Google from "next-auth/providers/google";
import { Provider } from "next-auth/providers/index";

const providers: Provider[] = [
	Google({
		clientId: process.env.GOOGLE_CLIENT_ID!,
		clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
	}),
];

export const providerMap = providers.map((provider) => {
	return {
		id: provider.id,
		name: provider.name,
	};
});

export const authOptions: NextAuthOptions = {
	debug: process.env.NODE_ENV === "development",
	providers,
	pages: {
		signIn: "/sign-in",
	},
};
