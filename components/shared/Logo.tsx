import { logoImg } from "@/constants/asset_constants";
import { pages } from "@/constants/route_constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
    return (
        <Link href={pages.HOME}>
            <Image src={logoImg} alt="logo" height={54} />
        </Link>
    );
};

export default Logo;
