"use client";

import dynamic from "next/dynamic";
import React, { ComponentType, useMemo } from "react";

import { cn } from "@/lib/utils";

export const DemoPreview = ({ path }: { path: string }) => {
    const getComponent = (path: string) =>
        dynamic(() => import(`@/demo/${path}`).then((e) => e.Demo), {
            loading: () => <p>Loading</p>,
            ssr: false,
        });

    const Demo = useMemo<ComponentType>(() => getComponent(path), [path]);

    return (
        <div className={cn("mt-3 flex gap-3 overflow-hidden rounded border p-32")}>
            <Demo />
        </div>
    );
};
