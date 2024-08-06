import React from "react";
import Link from "next/link";
import { validateRequest } from "@/lib/actions/user.action";
import UserSettingDropdown from "@/components/shared/navbar/UserSettingDropdown";

const AuthRedirect = async () => {
    const { user } = await validateRequest();

    return user !== null ? (
        <UserSettingDropdown user={user} />
    ) : (
        <div className="flex">
            <Link
                href="/sign-up"
                className="border-2 border-heavy bg-transparent text-normal body-medium hover:bg-light-border-heavy dark:hover:bg-dark-border-heavy py-3 px-4 rounded-lg mx-5"
            >
                Sign Up
            </Link>
            <Link
                href="/sign-in"
                className="border-primary border-2 btn bg-transparent text-white body-medium py-3 px-4 rounded-lg hover:btn-hover"
            >
                Sign In
            </Link>
        </div>
    );
};

export default AuthRedirect;
