import * as React from "react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const Demo = ({ ...props }) => {
    const [displayMode, setDisplayMode] = useState("grid");

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline">Open</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>Display Mode</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuRadioGroup value={displayMode} onValueChange={setDisplayMode}>
                    <DropdownMenuRadioItem {...props} value="grid">
                        Grid View
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem {...props} value="list">
                        List View
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem {...props} value="compact">
                        Compact View
                    </DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};
