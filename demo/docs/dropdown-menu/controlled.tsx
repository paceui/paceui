import { useState } from "react";

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
    const [open, setOpen] = useState(false);

    return (
        <div className="flex flex-col items-center space-y-2">
            <p className="text-default-600 text-sm">
                State: {open ? "Open" : "Close"}
                <span className="text-primary ms-1 cursor-pointer hover:underline" onClick={() => setOpen(!open)}>
                    (Click)
                </span>
            </p>
            <DropdownMenu open={open} onOpenChange={setOpen}>
                <DropdownMenuTrigger asChild>
                    <Button variant="outline">Open</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
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
