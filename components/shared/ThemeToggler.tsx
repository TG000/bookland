"use client";

import { useTheme } from "@/context/ThemeProvider";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { themes } from "@/constants";

const ThemeToggler = () => {
    const { mode, setMode } = useTheme();

    return (
        <DropdownMenu modal={false}>
            <DropdownMenuTrigger className="mx-5" asChild>
                {mode === "light" ? (
                    <Button className="text-white w-10 h-10 rounded-full p-2 hover:bg-light-border-heavy/60 no-focus">
                        <MdLightMode className="w-full h-full text-primary" />
                    </Button>
                ) : (
                    <Button className="text-white w-10 h-10 rounded-full p-2 hover:bg-light-border-heavy/60 no-focus">
                        <MdDarkMode className="w-full h-full text-primary" />
                    </Button>
                )}
            </DropdownMenuTrigger>
            <DropdownMenuContent side="bottom" sideOffset={10} align="end">
                {themes.map((theme) => (
                    <DropdownMenuItem
                        key={theme.value}
                        className={
                            mode === theme.value
                                ? "text-primary hover:text-white"
                                : ""
                        }
                        onClick={() => {
                            setMode(theme.value);

                            if (theme.value !== "system") {
                                localStorage.theme = theme.value;
                            } else {
                                localStorage.removeItem("theme");
                            }
                        }}
                    >
                        <theme.icon className="mr-2" />
                        {theme.label}
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default ThemeToggler;
