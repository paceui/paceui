import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

export const Demo = ({ ...props }) => {
    return (
        <Select {...props} disabled>
            <SelectTrigger className="w-60">
                <SelectValue placeholder="Backup account" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>Accounts</SelectLabel>
                    <SelectItem value="abc@mail.com">abc@mail.com</SelectItem>
                    <SelectItem value="xyz@mail.com">xyz@mail.com</SelectItem>
                    <SelectItem value="alphabet@mail.com">alphabet@mail.com</SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
    );
};
