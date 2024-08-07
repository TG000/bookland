import {
    FooterMenuProps,
    NavLinkProps,
    SidebarMenuProps,
    ThemeProps,
} from "@/types";
import {
    MdAdd,
    MdAnalytics,
    MdBook,
    MdCollections,
    MdComputer,
    MdDarkMode,
    MdLightMode,
    MdPages,
    MdPerson,
    MdPersonAddAlt1,
    MdPersonSearch,
    MdRocket,
    MdSettings,
    MdSettingsAccessibility,
} from "react-icons/md";

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

export const sidebarMenus: SidebarMenuProps[] = [
    {
        menuLabel: "General",
        items: [
            {
                icon: MdRocket,
                title: "Dashboard",
                subMenus: [
                    {
                        label: "Overview",
                        href: "/dashboard",
                    },
                    {
                        label: "Analytics",
                        href: "/dashboard/analytics",
                    },
                ],
            },
            {
                icon: MdAnalytics,
                title: "Reports",
                subMenus: [
                    {
                        label: "Sales Reports",
                        href: "/reports/sales",
                    },
                    {
                        label: "User Reports",
                        href: "/reports/users",
                    },
                ],
            },
        ],
    },
    {
        menuLabel: "Books",
        items: [
            {
                icon: MdBook,
                title: "All Books",
                href: "/books/all",
            },
            {
                icon: MdAdd,
                title: "Add New Book",
                href: "/books/add",
            },
            {
                icon: MdCollections,
                title: "Genres",
                href: "/books/genres",
            },
            {
                icon: MdPersonSearch,
                title: "Authors",
                href: "/books/authors",
            },
        ],
    },
    {
        menuLabel: "Users",
        items: [
            {
                icon: MdPerson,
                title: "All Users",
                href: "/users/all",
            },
            {
                icon: MdPersonAddAlt1,
                title: "Add User",
                href: "/users/add",
            },
            {
                icon: MdSettingsAccessibility,
                title: "User Settings",
                subMenus: [
                    {
                        label: "Profile Settings",
                        href: "/users/settings/profile",
                    },
                    {
                        label: "Account Settings",
                        href: "/users/settings/account",
                    },
                ],
            },
        ],
    },
    {
        menuLabel: "Others",
        items: [
            {
                icon: MdSettings,
                title: "Settings",
                subMenus: [
                    {
                        label: "General Settings",
                        href: "/settings/general",
                    },
                    {
                        label: "Notifications",
                        href: "/settings/notifications",
                    },
                    {
                        label: "Privacy",
                        href: "/settings/privacy",
                    },
                ],
            },
            {
                icon: MdPages,
                title: "Pages",
                subMenus: [
                    {
                        label: "Help Center",
                        href: "/support/help-center",
                    },
                    {
                        label: "FAQs",
                        href: "/support/faqs",
                    },
                    {
                        label: "Contact Us",
                        href: "/support/contact",
                    },
                ],
            },
        ],
    },
];
