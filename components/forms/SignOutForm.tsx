"use client";

import { signOut } from "@/lib/actions/user.action";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { MdLogout } from "react-icons/md";

const SignOutForm = () => {
    const logout = async () => {
        await signOut();
    };

    return (
        <DropdownMenuItem onClick={logout}>
            <MdLogout className="mr-2 h-4 w-4" />
            <span>Log out</span>
        </DropdownMenuItem>
    );
};

export default SignOutForm;
