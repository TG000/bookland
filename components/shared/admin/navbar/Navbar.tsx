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

const Navbar = () => {
    return (
        <div className="flex-between background-neutral w-full p-4">
            <GlobalSearchbar />
            <div className="flex-center">
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
                <ThemeToggler />
                <AuthRedirect />
            </div>
        </div>
    );
};

export default Navbar;
