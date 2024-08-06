import { logoImg } from "@/constants/asset_constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import GlobalSearchbar from "./GlobalSearchbar";
import { navLinks } from "@/constants";
import AuthRedirect from "./AuthRedirect";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from "../ui/navigation-menu";
import ThemeToggler from "./ThemeToggler";

const Navbar = () => {
    return (
        <>
            <div className="w-full background py-4 sticky top-0">
                <div className="container flex-between">
                    <Link href="/">
                        <Image src={logoImg} alt="logo" height={60} />
                    </Link>
                    <GlobalSearchbar />
                    <NavigationMenu>
                        <NavigationMenuList>
                            {navLinks.map((navLink) => (
                                <NavigationMenuItem key={navLink.href}>
                                    <Link
                                        href={navLink.href}
                                        legacyBehavior
                                        passHref
                                    >
                                        <NavigationMenuLink
                                            className={navigationMenuTriggerStyle()}
                                        >
                                            {navLink.label}
                                        </NavigationMenuLink>
                                    </Link>
                                </NavigationMenuItem>
                            ))}
                        </NavigationMenuList>
                    </NavigationMenu>
                    <div className="flex items-center">
                        <ThemeToggler />
                        <AuthRedirect />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
