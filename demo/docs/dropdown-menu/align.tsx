import * as React from "react";

import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const Demo = ({ ...props }) => {
    return (
        <div className="flex gap-3">
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="outline">Start</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start">
                    <DropdownMenuLabel>Settings</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem {...props}>Account</DropdownMenuItem>
                    <DropdownMenuItem {...props}>Privacy</DropdownMenuItem>
                    <DropdownMenuItem {...props}>Notifications</DropdownMenuItem>
                    <DropdownMenuItem {...props}>Security</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="outline">Center</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="center">
                    <DropdownMenuLabel>Settings</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem {...props}>Account</DropdownMenuItem>
                    <DropdownMenuItem {...props}>Privacy</DropdownMenuItem>
                    <DropdownMenuItem {...props}>Notifications</DropdownMenuItem>
                    <DropdownMenuItem {...props}>Security</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="outline">End</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Settings</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem {...props}>Account</DropdownMenuItem>
                    <DropdownMenuItem {...props}>Privacy</DropdownMenuItem>
                    <DropdownMenuItem {...props}>Notifications</DropdownMenuItem>
                    <DropdownMenuItem {...props}>Security</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    );
};
