import { facebookIcon, googleIcon } from "@/constants/asset_constants";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

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
