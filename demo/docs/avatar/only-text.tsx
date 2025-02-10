import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export const Demo = ({ ...props }) => {
    return (
        <Avatar {...props}>
            <AvatarFallback>DN</AvatarFallback>
        </Avatar>
    );
};
