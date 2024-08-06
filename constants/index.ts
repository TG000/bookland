import { FooterMenuProps, NavLinkProps, ThemeProps } from "@/types";
import { MdComputer, MdDarkMode, MdLightMode } from "react-icons/md";

export const navLinks: NavLinkProps[] = [
    {
        label: "Recommend",
        href: "/recommend",
    },
    {
        label: "Hot",
        href: "/hot",
    },
    {
        label: "New",
        href: "/new",
    },
];

export const themes: ThemeProps[] = [
    {
        value: "light",
        label: "Light",
        icon: MdLightMode,
    },
    {
        value: "dark",
        label: "Dark",
        icon: MdDarkMode,
    },
    {
        value: "system",
        label: "System",
        icon: MdComputer,
    },
];

export const footerMenus: FooterMenuProps[] = [
    {
        title: "Discover",
        footerLinks: [
            {
                label: "Premium",
                href: "/premium",
            },
            {
                label: "Become a Creator",
                href: "/creator",
            },
            {
                label: "Work with us",
                href: "/work",
            },
        ],
    },
    {
        title: "Support",
        footerLinks: [
            {
                label: "FAQs",
                href: "/faqs",
            },
            {
                label: "Help Center",
                href: "/help",
            },
        ],
    },
    {
        title: "Legal",
        footerLinks: [
            {
                label: "Privacy Policy",
                href: "/privacy",
            },
            {
                label: "Terms of Service",
                href: "/terms",
            },
            {
                label: "Compliance",
                href: "/compliance",
            },
        ],
    },
];
