"use client";

import { UserIcon } from "lucide-react";
import { useState } from "react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const Demo = ({ ...props }) => {
    const [name, setName] = useState("");

    return (
        <div className="w-full max-w-80">
            <Label htmlFor="--input-controlled">Full Name</Label>
            <Input
                type="text"
                placeholder="Your Name"
                startContent={<UserIcon />}
                value={name}
                id="--input-controlled"
                onChange={(e) => setName(e.target.value)}
                {...props}
            />
            <div className="flex justify-between gap-3">
                <span className="text-default-500 text-sm text-ellipsis">
                    {name.length == 0 ? "Please write your name" : `Hello ${name} !!`}
                </span>
                <span className="text-default-500 text-sm">{`Chars: ${name.length}`}</span>
            </div>
        </div>
    );
};
