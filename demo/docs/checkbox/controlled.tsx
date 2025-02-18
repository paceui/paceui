"use client";

import { CheckedState } from "@radix-ui/react-checkbox";
import { useState } from "react";

import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export const Demo = ({ ...props }) => {
    const [checked, setChecked] = useState<CheckedState>(false);

    return (
        <div className="flex flex-col items-center space-y-2">
            <div className="flex items-center gap-2">
                <Checkbox id="--controlled" {...props} checked={checked} onCheckedChange={setChecked} />
                <Label htmlFor="--controlled">Controlled</Label>
            </div>
            <p className="text-default-600 text-sm">
                Checked: {checked ? "Yes" : "No"}
                <span className="text-primary ms-1 cursor-pointer hover:underline" onClick={() => setChecked(!checked)}>
                    (Click)
                </span>
            </p>
        </div>
    );
};
