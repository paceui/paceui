"use client";

import { useEffect, useState } from "react";

import { Progress } from "@/components/ui/progress";

export const Demo = ({ ...props }) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((p) => {
                if (p <= 99) {
                    return p + 1;
                } else {
                    clearInterval(interval);
                    return 100;
                }
            });
        }, 200);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="w-3/5">
            <p>
                Uploading:{" "}
                {progress == 100 ? <span className="text-green-500">Completed</span> : <span>({progress}%)</span>}
            </p>
            <Progress value={progress} {...props} />
        </div>
    );
};
