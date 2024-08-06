import React from "react";
import { IconType } from "react-icons/lib";

export interface SlugProps {
    params: { slug: string };
}

export interface ResponseDataProps {
    success?: boolean;
    failed?: boolean;
    error?: boolean;
    data?: any;
    message?: string;
}

export interface NavLinkProps {
    label: string;
    href: string;
}

export interface ThemeProps {
    value: string;
    label: string;
    icon: IconType;
}
export interface FooterLinkProps {
    label: string;
    href: string;
}

export interface FooterMenuProps {
    title: string;
    footerLinks: FooterLinkProps[];
}

export interface SectionProps {
    title: string;
    href: string;
    children: React.ReactNode;
}
