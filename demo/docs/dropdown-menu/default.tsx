import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const Demo = ({ ...props }) => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline">Open</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>Settings</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem {...props}>Account</DropdownMenuItem>
                <DropdownMenuItem {...props}>Privacy</DropdownMenuItem>
                <DropdownMenuItem {...props}>Notifications</DropdownMenuItem>
                <DropdownMenuItem {...props}>Security</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};
