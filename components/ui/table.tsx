import * as React from "react";

import { cn } from "@/lib/utils";

export type TableProps = React.ComponentProps<"table">;

export const Table = ({ className, ...props }: TableProps) => (
    <div className="relative w-full overflow-auto">
        <table className={cn("w-full caption-bottom text-sm", className)} {...props} />
    </div>
);

export type TableHeaderProps = React.ComponentProps<"thead">;

export const TableHeader = ({ className, ...props }: TableHeaderProps) => (
    <thead className={cn("[&_tr]:border-b", className)} {...props} />
);

export type TableBodyProps = React.ComponentProps<"tbody">;

export const TableBody = ({ className, ...props }: TableBodyProps) => (
    <tbody className={cn("[&_tr:last-child]:border-0", className)} {...props} />
);

export type TableFooterProps = React.ComponentProps<"tfoot">;

export const TableFooter = ({ className, ...props }: TableFooterProps) => (
    <tfoot className={cn("border-t font-medium [&>tr]:last:border-b-0", className)} {...props} />
);

export type TableRowProps = React.ComponentProps<"tr">;

export const TableRow = ({ className, ...props }: TableRowProps) => (
    <tr
        className={cn(
            "hover:bg-default-100 data-[state=selected]:bg-default-100 border-b transition-[background]",
            className,
        )}
        {...props}
    />
);

export type TableHeadProps = React.ComponentProps<"th">;

export const TableHead = ({ className, ...props }: TableHeadProps) => (
    <th
        className={cn(
            "text-default-600 h-12 px-4 text-left align-middle font-medium [&:has([role=checkbox])]:pr-0",
            className,
        )}
        {...props}
    />
);

export type TableCellProps = React.ComponentProps<"td">;

export const TableCell = ({ className, ...props }: TableCellProps) => (
    <td className={cn("p-4 align-middle [&:has([role=checkbox])]:pr-0", className)} {...props} />
);

export type TableCaptionProps = React.ComponentProps<"caption">;

export const TableCaption = ({ className, ...props }: TableCaptionProps) => (
    <caption className={cn("text-default-500 mt-4 text-sm", className)} {...props} />
);
