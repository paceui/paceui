import * as React from "react";
import { ChevronLeftIcon, ChevronRightIcon, MoreHorizontalIcon } from "lucide-react";

import { Button, ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const Pagination = ({ className, ...props }: React.ComponentProps<"ul">) => (
    <ul className={cn("inline-flex items-center gap-1", className)} {...props} />
);

export type PaginationItemProps = {
    isActive?: boolean;
    activeVariant?: Exclude<ButtonProps["variant"], "ghost">;
    activeColor?: ButtonProps["color"];
    disabled?: ButtonProps["disabled"];
} & Pick<ButtonProps, "onlyIcon" | "size"> &
    React.ComponentProps<"a">;

export const PaginationItem = ({
    className,
    isActive,
    size,
    onlyIcon = true,
    activeColor,
    disabled,
    activeVariant = "outline",
    ...props
}: PaginationItemProps) => (
    <Button
        asChild
        variant={isActive ? activeVariant : "ghost"}
        size={size}
        color={isActive ? activeColor : "default"}
        onlyIcon={onlyIcon}
        disabled={disabled}
        className={className}>
        <a aria-current={isActive ? "page" : undefined} {...props} />
    </Button>
);

export const PaginationPrevious = ({ className, ...props }: PaginationItemProps) => (
    <PaginationItem
        aria-label="Go to previous page"
        size="md"
        onlyIcon={false}
        className={cn("gap-1", className)}
        {...props}>
        <ChevronLeftIcon className="size-4" />
        <span>Previous</span>
    </PaginationItem>
);

export const PaginationNext = ({ className, ...props }: React.ComponentProps<typeof PaginationItem>) => (
    <PaginationItem
        aria-label="Go to next page"
        onlyIcon={false}
        size="md"
        className={cn("gap-1", className)}
        {...props}>
        <span>Next</span>
        <ChevronRightIcon className="size-4" />
    </PaginationItem>
);

export const PaginationEllipsis = ({ className, ...props }: React.ComponentProps<typeof PaginationItem>) => (
    <PaginationItem aria-label="Go to next page" size="md" className={cn("gap-1", className)} {...props}>
        <MoreHorizontalIcon className="size-4" />
        <span className="sr-only">More pages</span>
    </PaginationItem>
);
