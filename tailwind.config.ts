import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        container: {
            center: true,
            padding: "2rem",
        },
        extend: {
            colors: {
                primary: "#4A90E2",
                error: "#FF0000",
                accent: {
                    1: "#C3BEF0",
                    2: "#CCA8E9",
                },
                dark: {
                    background: "#1A1A2E",
                    surface: "#16213E",
                    "text-normal": "#FFFFFF",
                    "text-secondary": "#B0B0B0",
                    neutral: "#0F3460",
                    "border-light": "#2C3E50",
                    "border-medium": "#34495E",
                    "border-heavy": "#415B76",
                },
                light: {
                    background: "#DEFCF9",
                    surface: "#FFFFFF",
                    "text-normal": "#333333",
                    "text-secondary": "#666666",
                    neutral: "#CADEFC",
                    "border-light": "#E0E0E0",
                    "border-medium": "#BDBDBD",
                    "border-heavy": "#9E9E9E",
                },
            },
            fontFamily: {
                merriweather: ["var(--font-merriweather)"],
                openSans: ["var(--font-openSans)"],
                montserrat: ["var(--font-montserrat)"],
            },
            screens: {
                xs: "420px",
            },
            aspectRatio: {
                "2/3": "2 / 3",
            },
            backgroundImage: {
                hero: "url('/assets/images/hero-image.png')",
            },
            keyframes: {
                "accordion-down": {
                    from: { height: "0" },
                    to: { height: "var(--radix-accordion-content-height)" },
                },
                "accordion-up": {
                    from: { height: "var(--radix-accordion-content-height)" },
                    to: { height: "0" },
                },
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
            },
        },
    },
    plugins: [
        require("tailwindcss-animate"),
        require("@tailwindcss/typography"),
    ],
};
export default config;
