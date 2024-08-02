/* eslint-disable react-hooks/rules-of-hooks */
import { facebookIcon, googleIcon } from "@/constants/asset_constants";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { redirect } from "next/navigation";
import { validateRequest } from "./actions/user.action";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function getOAuthIcon(icon: string) {
    switch (icon) {
        case "google":
            return googleIcon;
        case "facebook":
            return facebookIcon;
        default:
            return null;
    }
}

export function capitalizeFirstLetter(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export function isValidEmail(email: string): boolean {
    return /.+@.+/.test(email);
}

export function isValidUsername(username: string): boolean {
    return /^[a-z0-9_-]+$/.test(username);
}

export const validateProtected = async () => {
    const req = await validateRequest();

    console.log(req);

    if (!req.session) {
        redirect("/sign-in");
    }
    return req;
};
