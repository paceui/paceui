"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";

export const Demo = ({ ...props }) => {
    const [open, setOpen] = useState(false);

    return (
        <div className="flex flex-col items-center space-y-2">
            <Dialog {...props} open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                    <Button variant="outline">Open</Button>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Are you absolutely sure?</DialogTitle>
                        <DialogDescription>
                            This action cannot be undone. This will permanently delete your account and remove your data
                            from our servers.
                        </DialogDescription>
                    </DialogHeader>
                    <DialogFooter className="justify-end">
                        <DialogClose asChild>
                            <Button variant="soft">Close</Button>
                        </DialogClose>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
            <p className="text-default-600 text-sm">
                State: {open ? "Open" : "Close"}
                <span className="text-primary ms-1 cursor-pointer hover:underline" onClick={() => setOpen(!open)}>
                    (Click)
                </span>
            </p>
        </div>
    );
};
