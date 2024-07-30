import { z } from "zod";

export const SignInSchema = z.object({
	email: z.string().email({
		message: "Please enter a valid email address.",
	}),
	password: z.string().min(6, {
		message: "Password must be at least 6 characters long.",
	}),
});

export const SignUpSchema = z.object({
	username: z.string().min(3, {
		message: "Username must be at least 3 characters long.",
	}),
	email: z.string().email({
		message: "Please enter a valid email address.",
	}),
	phone: z.string().min(10, {
		message: "Please enter a valid phone number.",
	}),
	password: z.string().min(6, {
		message: "Password must be at least 6 characters long.",
	}),
});
