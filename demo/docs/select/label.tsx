import { Label } from "@/components/ui/label";
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
        <div className="w-60">
            <Label htmlFor="--select-label">Choose your device</Label>
            <Select {...props}>
                <SelectTrigger id="--select-label">
                    <SelectValue placeholder="Choose your device" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectLabel>Devices</SelectLabel>
                        <SelectItem value="laptop">Laptop</SelectItem>
                        <SelectItem value="tablet">Tablet</SelectItem>
                        <SelectItem value="smartphone">Smartphone</SelectItem>
                        <SelectItem value="desktop">Desktop</SelectItem>
                        <SelectItem value="smartwatch">Smartwatch</SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>
        </div>
    );
};
