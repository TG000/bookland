import { NavLink, Theme } from "@/types";
import { MdComputer, MdDarkMode, MdLightMode } from "react-icons/md";

export const navLinks: NavLink[] = [
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

export const themes: Theme[] = [
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
