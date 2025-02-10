import * as React from "react";
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type Checked = DropdownMenuCheckboxItemProps["checked"];

export const Demo = ({ ...props }) => {
    const [enableNotifications, setEnableNotifications] = useState<Checked>(false);
    const [enableDarkMode, setEnableDarkMode] = useState(false);
    const [enableAutoUpdates, setEnableAutoUpdates] = useState(true);

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline">Open</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>Preferences</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuCheckboxItem
                    {...props}
                    checked={enableNotifications}
                    onCheckedChange={setEnableNotifications}>
                    Enable Notifications
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem
                    {...props}
                    checked={enableDarkMode}
                    onCheckedChange={setEnableDarkMode}
                    disabled>
                    Dark Mode
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem {...props} checked={enableAutoUpdates} onCheckedChange={setEnableAutoUpdates}>
                    Auto Updates
                </DropdownMenuCheckboxItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};
