"use client";

import { BellRingIcon, XIcon } from "lucide-react";
import { useState } from "react";

import { Alert, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";

export const Demo = ({ ...props }) => {
    const [show, setShow] = useState(false);

    return (
        <div className="flex flex-col items-center gap-3">
            <Button variant="outline" onClick={() => setShow(!show)}>
                {show ? "Hide" : "Show"}
            </Button>
            {show && (
                <Alert
                    startContent={<BellRingIcon className="size-4" />}
                    endContent={<XIcon className="size-4 cursor-pointer" onClick={() => setShow(false)} />}
                    {...props}>
                    <AlertTitle>Order Confirmed!</AlertTitle>
                </Alert>
            )}
        </div>
    );
};
