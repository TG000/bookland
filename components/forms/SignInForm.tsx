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
import { useState } from "react";
import { signIn } from "@/lib/actions/user.action";
import { useRouter } from "next/navigation";

const SignInForm = () => {
    const router = useRouter();

    const [isSubmitting, setIsSubmitting] = useState(false);

    const form = useForm<z.infer<typeof SignInSchema>>({
        resolver: zodResolver(SignInSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    async function onSubmit(values: z.infer<typeof SignInSchema>) {
        setIsSubmitting(true);

        try {
            const response = await signIn(values);

            if (response.error) {
                return form.setError(
                    response.error as any,
                    {
                        message: response.message,
                    },
                    {
                        shouldFocus: true,
                    }
                );
            }

            if (response.data === "failed") {
                // TODO: Pop up a toast message
                return;
            }

            router.push("/");
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
                    name="password"
                    render={({ field }) => (
                        <FormItem className="my-4">
                            <div className="flex-start border-heavy border px-4 py-2 rounded-xl">
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

export default SignInForm;
