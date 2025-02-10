"use client";

import * as React from "react";
import { LaptopIcon, MoonIcon, SunIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useConfig } from "@/website/contexts/config";

export const ThemeModeToggle = () => {
    const { state, changeThemeMode } = useConfig();

    return (
        <Button
            onlyIcon
            variant="ghost"
            suppressHydrationWarning
            title={state.theme.mode == "light" ? "Light" : state.theme.mode == "dark" ? "Dark" : "System"}
            className="relative overflow-hidden"
            aria-label="Theme mode"
            onClick={() =>
                changeThemeMode(state.theme.mode === "light" ? "dark" : state.theme.mode == "dark" ? "system" : "light")
            }>
            <SunIcon
                suppressHydrationWarning
                className={cn("absolute size-[18px] scale-50 opacity-0 transition-all", {
                    "scale-100 opacity-100": state.theme.mode == "light",
                })}
            />
            <MoonIcon
                suppressHydrationWarning
                className={cn("absolute size-[18px] scale-50 opacity-0 transition-all", {
                    "scale-100 opacity-100": state.theme.mode == "dark",
                })}
            />
            <LaptopIcon
                suppressHydrationWarning
                className={cn("absolute size-[18px] scale-50 opacity-0 transition-all", {
                    "scale-100 opacity-100": state.theme.mode == "system",
                })}
            />
        </Button>
    );
};
