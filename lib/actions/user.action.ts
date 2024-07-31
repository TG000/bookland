"use server";

import { createClient } from "@/lib/supabase/server";
import { SignInProps, SignUpProps } from "@/types/auth";
import { prisma } from "../auth";

export async function signIn(params: SignInProps) {
    try {
        const supabase = createClient();
        const { email, password } = params;

        const user = await supabase.auth.signInWithPassword({
            email,
            password,
        });

        if (user.error) {
            console.error(user.error);
        }
    } catch (error) {
        console.error(error);
    }
}

export async function signUp(params: SignUpProps) {
    try {
        const supabase = createClient();
        const { username, email, phone, password } = params;

        const user = await prisma.user.findFirst({
            where: {
                email,
            },
        });

        if (user !== undefined && user !== null) {
            console.log("User already exists!");
        }

        const newUser = await supabase.auth.signUp({ email, phone, password });

        if (newUser.error) {
            console.error(newUser.error);
        }

        const data = { username, email, phone };
        await prisma.user.create({ data });

        return !newUser.error;
    } catch (error) {
        console.error(error);
    }
}
