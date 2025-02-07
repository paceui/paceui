import * as React from "react";
import { ReactNode } from "react";

import { cn } from "@/lib/utils";

export type AlertProps = React.ComponentProps<"div"> & {
    startContent?: ReactNode;
    endContent?: ReactNode;
};

export const Alert = ({ startContent, endContent, children, className, ...props }: AlertProps) => (
    <div
        role="alert"
        className={cn(
            "bg-default-700 text-background flex w-full gap-3 rounded-lg p-4 [&:not(:has([data-slot=description]))]:items-center",
            className,
        )}
        {...props}>
        {startContent && <span>{startContent}</span>}
        <div className="grow space-y-1">{children}</div>
        {endContent && <span>{endContent}</span>}
    </div>
);

export type AlertTitleProps = React.ComponentProps<"h5">;

export const AlertTitle = ({ className, ...props }: AlertTitleProps) => (
    <h5 data-slot="title" className={cn("leading-none font-medium tracking-tight", className)} {...props} />
);

export type AlertDescriptionProps = React.ComponentProps<"div">;

export const AlertDescription = ({ className, ...props }: AlertDescriptionProps) => (
    <div data-slot="description" className={cn("text-sm", className)} {...props} />
);
