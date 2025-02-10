import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const Demo = ({ ...props }) => {
    return (
        <Avatar {...props}>
            <AvatarImage src="https://github.com/withden.png" alt="@withden" />
            <AvatarFallback>DN</AvatarFallback>
        </Avatar>
    );
};
