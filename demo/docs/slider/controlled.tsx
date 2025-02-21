"use client";

import { useState } from "react";

import { Slider } from "@/components/ui/slider";

export const Demo = ({ ...props }) => {
    const [range, setRange] = useState([20, 80]);

    return (
        <div className="w-full">
            <Slider value={range} onValueChange={setRange} minStepsBetweenThumbs={5} max={100} step={1} {...props} />
            <p className="mt-4 text-sm text-gray-600">
                Range: {range[0]} - {range[1]}
                <span onClick={() => setRange([20, 80])} className="text-primary ms-1 cursor-pointer hover:underline">
                    (Reset)
                </span>
            </p>
        </div>
    );
};
