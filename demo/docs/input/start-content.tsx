import { MailIcon } from "lucide-react";

import { Input } from "@/components/ui/input";

export const Demo = ({ ...props }) => {
    return <Input type="email" placeholder="Email" className="max-w-80" startContent={<MailIcon />} {...props} />;
};
