"use client";

import { CheckIcon, ClipboardIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { codeToHtml } from "shiki";

import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { copyToClipboard } from "@/website/utils/clipboard";
import { PackageManager, getCommandAsPackageManager } from "@/website/utils/installation-command";

export const InstallationCommand = ({ command = "" }: { command: string }) => {
    const [code, setCode] = useState<string>("");
    const [hasCopied, setHasCopied] = useState(false);

    const copy = async (manager: PackageManager) => {
        setHasCopied(true);
        const packageLevelCommand = getCommandAsPackageManager(command, manager);
        await copyToClipboard(packageLevelCommand);
        setTimeout(() => {
            setHasCopied(false);
        }, 3000);
    };

    useEffect(() => {
        codeToHtml(command, {
            lang: "bash",
            theme: "github-dark-default",
        }).then(setCode);
    }, [command]);

    return (
        <div className="relative mt-4 mb-3">
            <div
                className="overflow-hidden rounded text-sm select-all [&>.shiki]:p-4"
                dangerouslySetInnerHTML={{ __html: code }}
            />
            <div className="absolute end-4 top-3">
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button
                            variant="ghost"
                            color="secondary"
                            className="relative rounded-lg text-white hover:bg-white/25"
                            size="sm"
                            aria-label="Copy"
                            onlyIcon>
                            <CheckIcon
                                className={cn("absolute inset-1.5 size-4 transition-all duration-300", {
                                    "scale-0 opacity-0": !hasCopied,
                                })}
                            />
                            <ClipboardIcon
                                className={cn("absolute inset-1.5 size-4 transition-all duration-300", {
                                    "scale-0 opacity-0": hasCopied,
                                })}
                            />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuItem onSelect={() => copy("npm")}>npm</DropdownMenuItem>
                        <DropdownMenuItem onSelect={() => copy("yarn")}>yarn</DropdownMenuItem>
                        <DropdownMenuItem onSelect={() => copy("pnpm")}>pnpm</DropdownMenuItem>
                        <DropdownMenuItem onSelect={() => copy("bun")}>bun</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </div>
    );
};
