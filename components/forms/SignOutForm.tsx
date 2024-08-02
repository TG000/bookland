"use client";

import { signOut } from "@/lib/actions/user.action";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

const SignOutForm = () => {
    const router = useRouter();

    const logout = async () => {
        await signOut();

        router.push("/sign-in");
    };

    return <Button onClick={logout}>Sign Out</Button>;
};

export default SignOutForm;
