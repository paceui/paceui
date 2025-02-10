import * as React from "react";

import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const Demo = ({ ...props }) => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline">Open</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuGroup>
                    <DropdownMenuLabel>Fruits</DropdownMenuLabel>
                    <DropdownMenuItem {...props}>Apple</DropdownMenuItem>
                    <DropdownMenuItem {...props}>Banana</DropdownMenuItem>
                    <DropdownMenuItem {...props}>Orange</DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <DropdownMenuLabel>Vegetables</DropdownMenuLabel>
                    <DropdownMenuItem {...props}>Carrot</DropdownMenuItem>
                    <DropdownMenuItem {...props}>Broccoli</DropdownMenuItem>
                    <DropdownMenuItem {...props}>Spinach</DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <DropdownMenuLabel>Dairy</DropdownMenuLabel>
                    <DropdownMenuItem {...props}>Milk</DropdownMenuItem>
                    <DropdownMenuItem {...props}>Cheese</DropdownMenuItem>
                    <DropdownMenuItem {...props}>Yogurt</DropdownMenuItem>
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};
