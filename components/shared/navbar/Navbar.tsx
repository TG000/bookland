import Link from "next/link";
import GlobalSearchbar from "@/components/shared/navbar/GlobalSearchbar";
import { navLinks } from "@/constants";
import AuthRedirect from "@/components/shared/navbar/AuthRedirect";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import ThemeToggler from "@/components/shared/navbar/ThemeToggler";
import Logo from "@/components/shared/Logo";

const Navbar = () => {
    return (
        <>
            <div className={`surface w-full py-4 fixed z-40`}>
                <div className="container flex-between">
                    <Logo />
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
