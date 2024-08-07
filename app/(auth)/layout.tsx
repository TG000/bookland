import Logo from "@/components/shared/Logo";
import { authImg } from "@/constants/asset_constants";
import { userRoles } from "@/constants/user_constants";
import { validateRequest } from "@/lib/actions/user.action";
import Image from "next/image";
import { redirect } from "next/navigation";
import React from "react";

const AuthLayout = async ({ children }: { children: React.ReactNode }) => {
    const { user } = await validateRequest();

    if (user?.role === userRoles.ADMIN) {
        redirect("/dashboard");
    }

    return (
        <main className="flex-center min-h-screen w-full">
            <div className="flex-between background h-screen grow flex-col p-12">
                <Logo />
                {children}
            </div>
            <Image
                src={authImg}
                alt="background image"
                className="h-screen w-1/2 object-cover"
                priority={true}
            />
        </main>
    );
};

export default AuthLayout;
