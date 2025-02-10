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
                    <Button variant="outline">Left</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent side="left">
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
                    <Button variant="outline">Top</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent side="top">
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
                    <Button variant="outline">Bottom</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent side="bottom">
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
                    <Button variant="outline">Right</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent side="right">
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
