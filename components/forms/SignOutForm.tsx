"use client";

import { signOut } from "@/lib/actions/user.action";
import { Button } from "../ui/button";

const SignOutForm = () => {
    const logout = async () => {
        await signOut();
    };

    return <Button onClick={logout}>Sign Out</Button>;
};

export default SignOutForm;
