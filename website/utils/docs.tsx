"use client";

import dynamic from "next/dynamic";
import React from "react";

import { ComponentPreviewProp } from "@/website/components/docs/demo-preview";

export const getDemoComponent = (name: string) => {
    return dynamic<ComponentPreviewProp>(() => import(`@/demo/${name.replace(/^demo\//, "")}`).then((e) => e.Demo), {
        loading: () => <p>Loading</p>,
        ssr: false,
    });
};

export const copyToClipboard = async (text: string) => {
    return await navigator.clipboard.writeText(text);
};
