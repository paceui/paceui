import { AlignCenterIcon, AlignLeftIcon, AlignRightIcon } from "lucide-react";

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

export const Demo = ({ ...props }) => {
    return (
        <ToggleGroup type="single" defaultValue="align-center" {...props}>
            <ToggleGroupItem value="align-left" aria-label="Align left">
                <AlignLeftIcon className="size-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="align-center" aria-label="Align center">
                <AlignCenterIcon className="size-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="align-right" aria-label="Align right">
                <AlignRightIcon className="size-4" />
            </ToggleGroupItem>
        </ToggleGroup>
    );
};
