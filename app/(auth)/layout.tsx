import { authImg, logoImg } from "@/constants/asset_constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <main className="flex-center min-h-screen w-full">
            <div className="flex-between background h-screen grow flex-col p-12">
                <Link href="/">
                    <Image src={logoImg} alt="logo" height={60} />
                </Link>
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
