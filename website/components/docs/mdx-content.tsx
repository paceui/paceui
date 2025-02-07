import Link from "next/link";

import * as runtime from "react/jsx-runtime";

import { cn } from "@/lib/utils";

const sharedComponents = {
    h2: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
        <h2
            className={cn("border-border mt-10 scroll-m-16 border-b pb-2 text-2xl font-medium", className)}
            {...props}
        />
    ),
    h3: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
        <h2 className={cn("mt-8 scroll-m-16 text-xl font-medium", className)} {...props} />
    ),
    h4: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
        <h2 className={cn("mt-6 scroll-m-16 text-lg font-medium", className)} {...props} />
    ),
    code: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
        <code
            className={cn(
                "bg-default-200 relative rounded px-[6px] py-[3px] font-mono text-[13px] text-nowrap select-all",
                className,
            )}
            {...props}
        />
    ),
    p: ({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
        <p className={cn("[&:not(:first-child)]:mt-2", className)} {...props} />
    ),
    ul: ({ className, ...props }: React.HTMLAttributes<HTMLUListElement>) => (
        <ul className={cn("ms-5 mt-3 list-disc", className)} {...props} />
    ),
    strong: ({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
        <strong className={cn("font-medium", className)} {...props} />
    ),
    a: ({ className, href, ...props }: React.ComponentProps<typeof Link>) => (
        <Link
            target={href.toString().includes("https://") ? "_blank" : "_self"}
            href={href}
            className={cn("text-primary hover:underline", className)}
            {...props}
        />
    ),
    table: ({ className, ...props }: React.HTMLAttributes<HTMLTableElement>) => (
        <div className="my-6 w-full overflow-y-auto">
            <table className={cn("w-full", className)} {...props} />
        </div>
    ),
    tr: ({ className, ...props }: React.HTMLAttributes<HTMLTableRowElement>) => (
        <tr className={cn("m-0 border-t p-0", className)} {...props} />
    ),
    th: ({ className, ...props }: React.HTMLAttributes<HTMLTableCellElement>) => (
        <th
            className={cn(
                "border px-4 py-2 text-left font-medium [&[align=center]]:text-center [&[align=right]]:text-end",
                className,
            )}
            {...props}
        />
    ),
    td: ({ className, ...props }: React.HTMLAttributes<HTMLTableCellElement>) => (
        <td
            className={cn(
                "border px-4 py-2 text-left text-nowrap [&[align=center]]:text-center [&[align=right]]:text-end",
                className,
            )}
            {...props}
        />
    ),
    Link,
};

const useMDXComponent = (code: string) => {
    const fn = new Function(code);
    return fn({ ...runtime }).default;
};

interface MDXProps {
    code: string;
}

export const MDXContent = ({ code }: MDXProps) => {
    const Component = useMDXComponent(code);
    return <Component components={{ ...sharedComponents }} />;
};
