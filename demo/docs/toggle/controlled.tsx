"use client";

import { Link2Icon } from "lucide-react";
import { useState } from "react";

import { Toggle } from "@/components/ui/toggle";

export const Demo = ({ ...props }) => {
    const [pressed, setPressed] = useState(false);

    return (
        <div className="flex flex-col items-center space-y-2">
            <Toggle {...props} pressed={pressed} onPressedChange={setPressed}>
                <Link2Icon className="size-4" />
                Link
            </Toggle>
            <p className="text-default-600 text-sm">
                Pressed: {pressed ? "Yes" : "No"}
                <span className="text-primary ms-1 cursor-pointer hover:underline" onClick={() => setPressed(!pressed)}>
                    (Toggle)
                </span>
            </p>
        </div>
    );
};
