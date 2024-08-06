import { logoImg } from "@/constants/asset_constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
    return (
        <Link href="/">
            <Image src={logoImg} alt="logo" height={60} />
        </Link>
    );
};

export default Logo;
