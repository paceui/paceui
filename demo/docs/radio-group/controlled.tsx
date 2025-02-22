"use client";

import { useState } from "react";

import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export const Demo = ({ ...props }) => {
    const [gender, setGender] = useState("male");

    return (
        <div className="flex flex-col items-center space-y-3">
            <RadioGroup value={gender} onValueChange={setGender} className="space-y-1">
                <div className="flex items-center gap-2">
                    <RadioGroupItem value="male" id="--male" {...props} />
                    <Label htmlFor="--male">Male</Label>
                </div>
                <div className="flex items-center gap-2">
                    <RadioGroupItem value="female" id="--female" {...props} />
                    <Label htmlFor="--female">Female</Label>
                </div>
            </RadioGroup>
            <p className="text-default-600 text-sm">
                You choose: <span className="capitalize">{gender}</span>
                <span
                    className="text-primary ms-1 cursor-pointer hover:underline"
                    onClick={() => setGender(gender == "male" ? "female" : "male")}>
                    (Toggle)
                </span>
            </p>
        </div>
    );
};
