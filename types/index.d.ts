import { IconType } from "react-icons/lib";

export interface SlugProps {
    params: { slug: string };
}

export interface ResponseData {
    success?: boolean;
    failed?: boolean;
    error?: boolean;
    data?: any;
    message?: string;
}

export interface NavLink {
    label: string;
    href: string;
}

export interface Theme {
    value: string;
    label: string;
    icon: IconType;
}
