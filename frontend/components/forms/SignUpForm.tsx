"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { SignUpSchema } from "@/lib/validations";
import { MdPerson, MdEmail, MdLock, MdCall } from "react-icons/md";
import { useState } from "react";

const SignUpForm = () => {
	const [isSubmitting, setIsSubmitting] = useState(false);

	const form = useForm<z.infer<typeof SignUpSchema>>({
		resolver: zodResolver(SignUpSchema),
		defaultValues: {
			username: "",
			email: "",
			phone: "",
			password: "",
		},
	});

	function onSubmit(values: z.infer<typeof SignUpSchema>) {
		setIsSubmitting(true);

		try {
			// TODO: Make an async call to API -> sign up
			// Contain all form data
			// Navigate to sign in page
		} catch (error) {
			console.error(error);
		} finally {
			setIsSubmitting(false);
		}
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
				<FormField
					control={form.control}
					name="username"
					render={({ field }) => (
						<FormItem className="my-4">
							<div className="flex-start border-heavy rounded-xl border px-4 py-2">
								<MdPerson className="text-normal body-medium" />
								<FormControl>
									<Input
										placeholder="Username"
										className="no-focus text-normal body-medium placeholder border-0 bg-transparent"
										autoComplete="off"
										{...field}
									/>
								</FormControl>
							</div>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="email"
					render={({ field }) => (
						<FormItem className="my-4">
							<div className="flex-start border-heavy rounded-xl border px-4 py-2">
								<MdEmail className="text-normal body-medium" />
								<FormControl>
									<Input
										placeholder="Email"
										className="no-focus text-normal body-medium placeholder border-0 bg-transparent"
										autoComplete="off"
										{...field}
									/>
								</FormControl>
							</div>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="phone"
					render={({ field }) => (
						<FormItem className="my-4">
							<div className="flex-start border-heavy rounded-xl border px-4 py-2">
								<MdCall className="text-normal body-medium" />
								<FormControl>
									<Input
										placeholder="Phone Number"
										className="no-focus text-normal body-medium placeholder border-0 bg-transparent"
										autoComplete="off"
										{...field}
									/>
								</FormControl>
							</div>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="password"
					render={({ field }) => (
						<FormItem className="my-4">
							<div className="flex-start border-heavy rounded-xl border px-4 py-2">
								<MdLock className="text-normal body-medium" />
								<FormControl>
									<Input
										type="password"
										placeholder="Password"
										className="no-focus text-normal body-medium placeholder border-0 bg-transparent"
										autoComplete="off"
										{...field}
									/>
								</FormControl>
							</div>
							<FormMessage />
						</FormItem>
					)}
				/>
				<Button
					type="submit"
					className="btn button-small mt-3 w-full py-3 text-white"
					disabled={isSubmitting}
				>
					{isSubmitting ? "Loading..." : "Continue"}
				</Button>
			</form>
		</Form>
	);
};

export default SignUpForm;
