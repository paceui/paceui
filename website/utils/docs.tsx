"use client";

import dynamic from "next/dynamic";
import React from "react";

import { ComponentPreviewProp } from "@/website/components/docs/demo-preview";

export const getDemoComponent = (name: string) => {
    return dynamic<ComponentPreviewProp>(() => import(`@/demo/${name.replace(/^demo\//, "")}`).then((e) => e.Demo), {
        loading: () => <p className="opacity-60">Loading...</p>,
        ssr: false,
    });
};

export const copyToClipboard = async (text: string) => {
    if (navigator.clipboard) {
        try {
            await navigator.clipboard.writeText(text);
        } catch (err) {
            console.error("Failed to copy text: ", err);
        }
    } else {
        console.warn("Clipboard API is not available.");
    }
};
