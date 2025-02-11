"use client";

import { useState } from "react";

import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

export const Demo = ({ ...props }) => {
    const [checked, setChecked] = useState(false);

    return (
        <div className="flex flex-col items-center space-y-2">
            <div className="flex items-center gap-3">
                <Switch checked={checked} onCheckedChange={setChecked} id="--switch-controlled" {...props} />
                <Label htmlFor="--switch-controlled">Label</Label>
            </div>
            <p className="text-default-600 text-sm">
                Checked: {checked ? "Yes" : "No"}
                <span className="text-primary ms-1 cursor-pointer hover:underline" onClick={() => setChecked(!checked)}>
                    (Toggle)
                </span>
            </p>
        </div>
    );
};
