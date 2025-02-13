"use client";

import { MailIcon, NewspaperIcon } from "lucide-react";
import { FormEvent, useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ISubscribeResponse, subscribe } from "@/website/utils/newsletter";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const isValidEmail = (email: string) => emailRegex.test(email);

export const Newsletter = () => {
    const [result, setResult] = useState<ISubscribeResponse | undefined>(undefined);
    const [email, setEmail] = useState("");

    useEffect(() => {
        setResult(undefined);
    }, [email]);

    const onSubmit = async (e: FormEvent): Promise<void> => {
        e.preventDefault();
        if (email.length == 0 || !isValidEmail(email)) {
            setResult({
                success: false,
                message: "Please enter a valid email",
            });
            return;
        }
        const res = await subscribe({ email: email });
        setResult(res);
    };

    return (
        <form onSubmit={onSubmit} className="bg-default-100 relative overflow-hidden rounded px-16 py-6 text-center">
            <NewspaperIcon className="text-default-900/5 absolute top-4 left-4 size-10 -rotate-45" />
            <p className="text-lg/none font-medium">Join our newsletter!</p>
            <div className="mt-3 flex items-center gap-3">
                <Input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    name="MERGE0"
                    className="w-72"
                    placeholder="mail@site.com"
                    color={result && !result.success ? "error" : undefined}
                    startContent={<MailIcon />}
                />
                <Button>Subscribe</Button>
            </div>
            {result && !result.success && <span className="text-error text-sm">{result.message}</span>}
            {result && result.success && <span className="text-sm text-green-500">{result.message}</span>}
            <p className="text-default-600 mt-2 text-xs">We only send important updates. never spam!</p>
        </form>
    );
};
