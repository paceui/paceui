import { BoldIcon, ItalicIcon, UnderlineIcon } from "lucide-react";
import { useState } from "react";

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

export const Demo = ({ ...props }) => {
    const [selectedToggle, setSelectedToggle] = useState(["italic"]);

    return (
        <div>
            <ToggleGroup value={selectedToggle} onValueChange={setSelectedToggle} type="multiple" {...props}>
                <ToggleGroupItem value="bold" aria-label="Toggle bold">
                    <BoldIcon className="size-4" />
                </ToggleGroupItem>
                <ToggleGroupItem value="italic" aria-label="Toggle italic">
                    <ItalicIcon className="size-4" />
                </ToggleGroupItem>
                <ToggleGroupItem value="underline" aria-label="Toggle underline">
                    <UnderlineIcon className="size-4" />
                </ToggleGroupItem>
            </ToggleGroup>
            <p className="text-default-600 mt-1 text-sm">
                Selected: [{selectedToggle.join(", ")}]
                <span
                    className="text-primary ms-1 cursor-pointer hover:underline"
                    onClick={() => setSelectedToggle([])}>
                    (Reset)
                </span>
            </p>
        </div>
    );
};
