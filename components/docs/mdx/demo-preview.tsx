"use client";

import { RotateCcwIcon, Settings2Icon, XIcon } from "lucide-react";
import React, { ComponentType, useMemo, useState } from "react";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";

import { ClientDemoComponent } from "./client-demo-component";

export type ComponentPreviewProp = { [key: string]: string | boolean };

export type IDemoProp = {
    title: string;
    name: string;
} & (
    | {
          type: "select";
          values: string[];
          defaultValue: string;
      }
    | {
          type: "switch";
          defaultValue: boolean;
      }
);

export type IDemoPreview = {
    path?: string;
    component?: ComponentType<ComponentPreviewProp>;
    props: IDemoProp[];
};

export const DemoPreview = ({ path, component, props = [] }: IDemoPreview) => {
    const [key, setKey] = useState(1);
    const [showPropChanger, setShowPropChanger] = useState(false);

    const Demo = useMemo<ComponentType<ComponentPreviewProp> | undefined>(
        () => component ?? (path ? ClientDemoComponent(path) : undefined),
        [path, component],
    );

    const [compProps, setCompProps] = useState<ComponentPreviewProp>(() =>
        props.reduce(
            (obj, prop) => ({
                ...obj,
                [prop.name]: prop.defaultValue,
            }),
            {},
        ),
    );

    const refresh = () => {
        setKey(key + 1);
    };

    if (!Demo) return <p>Demo is not available</p>;

    return (
        <div className={cn("relative mt-3 flex gap-3 overflow-hidden rounded border")}>
            <div className="absolute inset-0 bg-[url('/images/docs/dots-bg.png')] bg-[length:800px_300px] bg-repeat opacity-5" />
            <div
                className={cn(
                    "relative flex min-h-80 grow items-center justify-center px-8 py-8 lg:py-16 [&>.w-full]:lg:w-[90%] [&>.w-full]:2xl:w-[70%]",
                    {
                        "2xl:px-24 2xl:py-24": props.length == 0,
                    },
                )}>
                <Demo {...compProps} key={key.toString()} />
                {props.length != 0 && (
                    <div className="absolute end-2 top-2 inline lg:hidden">
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => setShowPropChanger(true)}
                            aria-label="Show Props">
                            <Settings2Icon className="size-4" />
                        </Button>
                    </div>
                )}
                <Button
                    className="group absolute end-3 top-3 cursor-pointer shadow-none"
                    size="icon"
                    aria-label="Refresh"
                    title="Refresh"
                    variant="outline"
                    onClick={refresh}>
                    <RotateCcwIcon className="!size-3.5 transition-all group-hover:-rotate-60" />
                </Button>
            </div>
            {showPropChanger && (
                <div
                    className="bg-foreground/5 absolute inset-0 block lg:hidden"
                    onClick={() => setShowPropChanger(false)}></div>
            )}
            {props.length != 0 && (
                <div
                    className={cn(
                        "bg-background absolute -end-full top-0 bottom-0 z-[2] min-w-56 border-s p-6 transition-[inset-inline-end] duration-300 lg:static lg:block",
                        {
                            "end-0": showPropChanger,
                        },
                    )}
                    key={"props-list-1"}>
                    <div className="relative">
                        <div className="absolute -end-4 -top-4 block lg:hidden">
                            <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => setShowPropChanger(false)}
                                aria-label="Hide Props">
                                <XIcon className="size-4" />
                            </Button>
                        </div>
                        <div className="space-y-3">
                            {props.map((prop, index) => {
                                return (
                                    <div key={prop.name + index}>
                                        {prop.type == "select" ? (
                                            <>
                                                <Label className="block">{prop.title}</Label>
                                                <Select
                                                    value={compProps[prop.name]?.toString()}
                                                    onValueChange={(value) =>
                                                        setCompProps({
                                                            ...compProps,
                                                            [prop.name]: value,
                                                        })
                                                    }>
                                                    <SelectTrigger className="mt-2 capitalize" aria-label="Select">
                                                        <SelectValue placeholder={prop.title} />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        {prop.values.map((val) => (
                                                            <SelectItem value={val} key={val} className="capitalize">
                                                                {val}
                                                            </SelectItem>
                                                        ))}
                                                    </SelectContent>
                                                </Select>
                                            </>
                                        ) : prop.type == "switch" ? (
                                            <>
                                                <Label className="block">{prop.title}</Label>
                                                <Switch
                                                    checked={!!compProps[prop.name]}
                                                    className="mt-2"
                                                    onCheckedChange={(value) =>
                                                        setCompProps({
                                                            ...compProps,
                                                            [prop.name]: value,
                                                        })
                                                    }></Switch>
                                            </>
                                        ) : (
                                            <></>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
