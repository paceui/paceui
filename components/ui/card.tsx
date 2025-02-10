import * as React from "react";

import { cn } from "@/lib/utils";

export type CardProps = React.ComponentProps<"div">;

export const Card = ({ className, ...props }: CardProps) => (
    <div className={cn("bg-card text-card-foreground rounded-lg border shadow-sm", className)} {...props} />
);

export type CardHeaderProps = React.ComponentProps<"div">;

export const CardHeader = ({ className, ...props }: CardHeaderProps) => (
    <div className={cn("p-4", className)} {...props} />
);

export type CardTitleProps = React.ComponentProps<"h3">;

export const CardTitle = ({ className, ...props }: CardTitleProps) => (
    <h3 className={cn("text-lg leading-none font-medium tracking-tight lg:text-xl/none", className)} {...props} />
);

export type CardDescriptionProps = React.ComponentProps<"p">;

export const CardDescription = ({ className, ...props }: CardDescriptionProps) => (
    <p className={cn("text-default-600 text-sm", className)} {...props} />
);

export type CardContentProps = React.ComponentProps<"div">;

export const CardContent = ({ className, ...props }: CardContentProps) => (
    <div className={cn("p-4 pt-0", className)} {...props} />
);

export type CardFooterProps = React.ComponentProps<"div">;

export const CardFooter = ({ className, ...props }: CardFooterProps) => (
    <div className={cn("flex items-center gap-3 p-4 pt-0", className)} {...props} />
);
