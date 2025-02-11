import { ArrowDownToLineIcon, ChevronsDownIcon, ChevronsUpDownIcon, CircleChevronDownIcon } from "lucide-react";

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
        <div className="w-60 space-y-3">
            <Select {...props}>
                <SelectTrigger icon={<ChevronsUpDownIcon />}>
                    <SelectValue placeholder="Select a item" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectLabel>Items</SelectLabel>
                        <SelectItem value="english">Item 1</SelectItem>
                        <SelectItem value="spanish">Item 2</SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>
            <Select {...props}>
                <SelectTrigger icon={<ChevronsDownIcon />}>
                    <SelectValue placeholder="Select a item" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectLabel>Items</SelectLabel>
                        <SelectItem value="english">Item 1</SelectItem>
                        <SelectItem value="spanish">Item 2</SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>
            <Select {...props}>
                <SelectTrigger icon={<ArrowDownToLineIcon />}>
                    <SelectValue placeholder="Select a item" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectLabel>Items</SelectLabel>
                        <SelectItem value="english">Item 1</SelectItem>
                        <SelectItem value="spanish">Item 2</SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>
            <Select {...props}>
                <SelectTrigger icon={<CircleChevronDownIcon />}>
                    <SelectValue placeholder="Select a item" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectLabel>Items</SelectLabel>
                        <SelectItem value="english">Item 1</SelectItem>
                        <SelectItem value="spanish">Item 2</SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>
        </div>
    );
};
