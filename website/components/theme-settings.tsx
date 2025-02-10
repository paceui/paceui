"use client";

import * as React from "react";
import { CheckIcon, Settings2Icon, Undo2Icon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { useConfig } from "@/website/contexts/config";

export const ThemeSettings = () => {
    const {
        state: { theme },
        changeThemeBase,
        changeThemePrimary,
        reset,
    } = useConfig();

    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button variant="ghost" onlyIcon aria-label="Theme setting">
                    <Settings2Icon className="size-5 stroke-[1.5px]" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-44 py-3">
                <p className="text-opacity-60 text-sm font-medium">Base</p>
                <div className="-mx-2 mt-1">
                    <div
                        className="hover:bg-default-100 flex cursor-pointer items-center gap-2 px-2 py-0.5"
                        onClick={() => changeThemeBase("neutral")}>
                        <div className="size-4 rounded-full bg-neutral-500"></div>
                        <p>Neutral</p>
                        <span className="ms-auto">
                            <CheckIcon
                                className={cn("size-4 opacity-0 transition-all", {
                                    "opacity-100": theme.base === "neutral",
                                })}
                            />
                        </span>
                    </div>
                    <div
                        className="hover:bg-default-100 flex cursor-pointer items-center gap-2 px-2 py-0.5"
                        onClick={() => changeThemeBase("slate")}>
                        <div className="size-4 rounded-full bg-slate-500"></div>
                        <p>Slate</p>
                        <span className="ms-auto">
                            <CheckIcon
                                className={cn("size-4 opacity-0 transition-all", {
                                    "opacity-100": theme.base === "slate",
                                })}
                            />
                        </span>
                    </div>
                    <div
                        className="hover:bg-default-100 flex cursor-pointer items-center gap-2 px-2 py-0.5"
                        onClick={() => changeThemeBase("gray")}>
                        <div className="size-4 rounded-full bg-gray-500"></div>
                        <p>Gray</p>
                        <span className="ms-auto">
                            <CheckIcon
                                className={cn("size-4 opacity-0 transition-all", {
                                    "opacity-100": theme.base === "gray",
                                })}
                            />
                        </span>
                    </div>
                    <div
                        className="hover:bg-default-100 flex cursor-pointer items-center gap-2 px-2 py-0.5"
                        onClick={() => changeThemeBase("zinc")}>
                        <div className="size-4 rounded-full bg-zinc-500"></div>
                        <p>Zinc</p>
                        <span className="ms-auto">
                            <CheckIcon
                                className={cn("size-4 opacity-0 transition-all", {
                                    "opacity-100": theme.base === "zinc",
                                })}
                            />
                        </span>
                    </div>
                </div>
                <p className="text-opacity-60 mt-2 text-sm font-medium">Primary</p>
                <div className="-mx-2 mt-1">
                    <div
                        className="hover:bg-default-100 flex cursor-pointer items-center gap-2 px-2 py-0.5"
                        onClick={() => changeThemePrimary("blue")}>
                        <div className="size-4 rounded-full bg-blue-500"></div>
                        <p>Blue</p>
                        <span className="ms-auto">
                            <CheckIcon
                                className={cn("size-4 opacity-0 transition-all", {
                                    "opacity-100": theme.primary === "blue",
                                })}
                            />
                        </span>
                    </div>
                    <div
                        className="hover:bg-default-100 flex cursor-pointer items-center gap-2 px-2 py-0.5"
                        onClick={() => changeThemePrimary("purple")}>
                        <div className="size-4 rounded-full bg-purple-500"></div>
                        <p>Purple</p>
                        <span className="ms-auto">
                            <CheckIcon
                                className={cn("size-4 opacity-0 transition-all", {
                                    "opacity-100": theme.primary === "purple",
                                })}
                            />
                        </span>
                    </div>
                    <div
                        className="hover:bg-default-100 flex cursor-pointer items-center gap-2 px-2 py-0.5"
                        onClick={() => changeThemePrimary("green")}>
                        <div className="size-4 rounded-full bg-green-500"></div>
                        <p>Green</p>
                        <span className="ms-auto">
                            <CheckIcon
                                className={cn("size-4 opacity-0 transition-all", {
                                    "opacity-100": theme.primary === "green",
                                })}
                            />
                        </span>
                    </div>
                    <div
                        className="hover:bg-default-100 flex cursor-pointer items-center gap-2 px-2 py-0.5"
                        onClick={() => changeThemePrimary("teal")}>
                        <div className="size-4 rounded-full bg-teal-500"></div>
                        <p>Teal</p>
                        <span className="ms-auto">
                            <CheckIcon
                                className={cn("size-4 opacity-0 transition-all", {
                                    "opacity-100": theme.primary === "teal",
                                })}
                            />
                        </span>
                    </div>
                    <div
                        className="hover:bg-default-100 flex cursor-pointer items-center gap-2 px-2 py-0.5"
                        onClick={() => changeThemePrimary("orange")}>
                        <div className="size-4 rounded-full bg-orange-500"></div>
                        <p>Orange</p>
                        <span className="ms-auto">
                            <CheckIcon
                                className={cn("size-4 opacity-0 transition-all", {
                                    "opacity-100": theme.primary === "orange",
                                })}
                            />
                        </span>
                    </div>
                    <div
                        className="hover:bg-default-100 flex cursor-pointer items-center gap-2 px-2 py-0.5"
                        onClick={() => changeThemePrimary("rose")}>
                        <div className="size-4 rounded-full bg-rose-500"></div>
                        <p>Rose</p>
                        <span className="ms-auto">
                            <CheckIcon
                                className={cn("size-4 opacity-0 transition-all", {
                                    "opacity-100": theme.primary === "rose",
                                })}
                            />
                        </span>
                    </div>
                </div>
                <Button
                    size="sm"
                    variant="soft"
                    color="error"
                    onClick={reset}
                    className="mt-2 flex h-8 w-full items-center justify-center gap-2">
                    <Undo2Icon />
                    Reset
                </Button>
            </PopoverContent>
        </Popover>
    );
};
