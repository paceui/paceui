"use client";

import * as DialogPrimitive from "@radix-ui/react-dialog";
import * as React from "react";
import { XIcon } from "lucide-react";
import { ReactNode } from "react";
import { VariantProps, tv } from "tailwind-variants";

import { cn } from "@/lib/utils";

const dialogTheme = tv({
    slots: {
        overlay:
            "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50",
        content: [
            "bg-background fixed z-50 grid w-full max-w-lg gap-4 border p-5 shadow-lg duration-200 sm:rounded-lg",
            "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
        ],
        closeButton:
            "ring-offset-background focus:ring-ring absolute top-4 right-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-none disabled:pointer-events-none",
    },
    variants: {
        position: {
            center: {
                content:
                    "start-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 data-[state=closed]:scale-50 data-[state=open]:scale-100",
            },
            "top-left": {
                content:
                    "data-[state=closed]:slide-out-to-left-20 data-[state=closed]:slide-out-to-top-20 data-[state=open]:slide-in-from-left-20 data-[state=open]:slide-in-from-top-20 start-20 top-20",
            },
            "top-center": {
                content:
                    "data-[state=closed]:slide-out-to-top-20 data-[state=open]:slide-in-from-top-20 start-1/2 top-20 -translate-x-1/2",
            },
            "top-right": {
                content:
                    "data-[state=closed]:slide-out-to-right-20 data-[state=closed]:slide-out-to-top-20 data-[state=open]:slide-in-from-right-20 data-[state=open]:slide-in-from-top-20 end-20 top-20",
            },
            "bottom-left": {
                content:
                    "data-[state=closed]:slide-out-to-bottom-20 data-[state=closed]:slide-out-to-left-20 data-[state=open]:slide-in-from-bottom-20 data-[state=open]:slide-in-from-left-20 start-20 bottom-20",
            },
            "bottom-center": {
                content:
                    "data-[state=closed]:slide-out-to-bottom-20 data-[state=open]:slide-in-from-bottom-20 start-1/2 bottom-20 -translate-x-1/2",
            },
            "bottom-right": {
                content:
                    "data-[state=closed]:slide-out-to-bottom-20 data-[state=closed]:slide-out-to-right-20 data-[state=open]:slide-in-from-bottom-20 data-[state=open]:slide-in-from-right-20 end-20 bottom-20",
            },
        },
        backdrop: {
            opaque: {
                overlay: "bg-black/80",
            },
            blur: {
                overlay: "bg-black/70 backdrop-blur-xs",
            },
            transparent: "",
        },
    },
    defaultVariants: {
        position: "center",
        backdrop: "opaque",
    },
});

type ThemeProps = VariantProps<typeof dialogTheme>;

const DialogContext = React.createContext<ThemeProps>({
    position: "center",
    backdrop: "opaque",
});

export type DialogProps = { children: ReactNode } & ThemeProps & React.ComponentProps<typeof DialogPrimitive.Root>;

export const Dialog = ({ children, position, backdrop, ...props }: DialogProps) => {
    return (
        <DialogContext.Provider value={{ position, backdrop }}>
            <DialogPrimitive.Root {...props}>{children}</DialogPrimitive.Root>
        </DialogContext.Provider>
    );
};

export const DialogTrigger = DialogPrimitive.Trigger;

export const DialogPortal = DialogPrimitive.Portal;

export const DialogClose = DialogPrimitive.Close;

export type DialogOverlayProps = React.ComponentProps<typeof DialogPrimitive.Overlay>;

export const DialogOverlay = ({ className, ...props }: DialogOverlayProps) => {
    const { backdrop } = React.useContext(DialogContext);
    return <DialogPrimitive.Overlay className={dialogTheme().overlay({ className, backdrop })} {...props} />;
};

export type DialogContentProps = React.ComponentProps<typeof DialogPrimitive.Content>;

export const DialogContent = ({ className, children, ...props }: DialogContentProps) => {
    const { position } = React.useContext(DialogContext);
    return (
        <DialogPortal>
            <DialogOverlay />
            <DialogPrimitive.Content className={dialogTheme().content({ className, position })} {...props}>
                {children}
                <DialogClose className={dialogTheme().closeButton()}>
                    <XIcon className="size-4" />
                    <span className="sr-only">Close</span>
                </DialogClose>
            </DialogPrimitive.Content>
        </DialogPortal>
    );
};

export type DialogHeaderProps = React.ComponentProps<"div">;

export const DialogHeader = ({ className, ...props }: DialogHeaderProps) => (
    <div className={cn("flex flex-col space-y-1.5 text-center sm:text-left", className)} {...props} />
);

export type DialogFooterProps = React.ComponentProps<"div">;

export const DialogFooter = ({ className, ...props }: DialogFooterProps) => (
    <div className={cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className)} {...props} />
);

export type DialogTitleProps = React.ComponentProps<typeof DialogPrimitive.Title>;

export const DialogTitle = ({ className, ...props }: DialogTitleProps) => (
    <DialogPrimitive.Title className={cn("text-lg leading-none font-medium tracking-tight", className)} {...props} />
);

export type DialogDescriptionProps = React.ComponentProps<typeof DialogPrimitive.Description>;

export const DialogDescription = ({ className, ...props }: DialogDescriptionProps) => (
    <DialogPrimitive.Description className={cn("text-default-600 text-sm", className)} {...props} />
);
