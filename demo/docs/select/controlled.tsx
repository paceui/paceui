"use client";

import { useState } from "react";

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

export const Demo = ({ ...props }) => {
    const [selectedLanguage, setSelectedLanguage] = useState("english");
    const [open, setOpen] = useState(false);

    return (
        <div>
            <Select
                {...props}
                value={selectedLanguage}
                onValueChange={setSelectedLanguage}
                open={open}
                onOpenChange={setOpen}>
                <SelectTrigger className="w-60">
                    <SelectValue placeholder="Select a language" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectLabel>Languages</SelectLabel>
                        <SelectItem value="english">English</SelectItem>
                        <SelectItem value="spanish">Spanish</SelectItem>
                        <SelectItem value="french">French</SelectItem>
                        <SelectItem value="german">German</SelectItem>
                        <SelectItem value="japanese">Japanese</SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>
            <p className="text-default-600 mt-1.5 text-sm">
                Selected: <span className="capitalize">{selectedLanguage}</span>
                <span onClick={() => setOpen(true)} className="text-primary ms-1 cursor-pointer hover:underline">
                    (Change)
                </span>
            </p>
        </div>
    );
};
