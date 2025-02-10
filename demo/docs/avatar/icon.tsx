import { UserIcon } from "lucide-react";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export const Demo = ({ ...props }) => {
    return (
        <Avatar {...props}>
            <AvatarFallback>
                <UserIcon />
            </AvatarFallback>
        </Avatar>
    );
};
