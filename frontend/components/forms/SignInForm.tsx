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
import { SignInSchema } from "@/lib/validations";
import { MdEmail, MdLock } from "react-icons/md";

const SignInForm = () => {
	const form = useForm<z.infer<typeof SignInSchema>>({
		resolver: zodResolver(SignInSchema),
		defaultValues: {
			email: "",
			password: "",
		},
	});

	function onSubmit(values: z.infer<typeof SignInSchema>) {
		console.log(values);
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
				<FormField
					control={form.control}
					name="email"
					render={({ field }) => (
						<FormItem className="border-heavy my-4 rounded-xl border px-4 py-2">
							<div className="flex-start">
								<MdEmail className="text-normal" />
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
					name="password"
					render={({ field }) => (
						<FormItem className="border-heavy my-4 rounded-xl border px-4 py-2">
							<div className="flex-start">
								<MdLock className="text-normal" />
								<FormControl>
									<Input
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
				>
					Continue
				</Button>
			</form>
		</Form>
	);
};

export default SignInForm;
