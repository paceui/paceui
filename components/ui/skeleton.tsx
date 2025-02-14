import * as React from "react";

import { cn } from "@/lib/utils";

export type SkeletonProps = React.ComponentProps<"div">;

export const Skeleton = ({ className, ...props }: SkeletonProps) => (
    <div className={cn("bg-default-200 animate-pulse rounded", className)} {...props} />
);
