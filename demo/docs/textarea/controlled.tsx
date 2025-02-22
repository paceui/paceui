import { useState } from "react";

import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export const Demo = ({ ...props }) => {
    const [text, setText] = useState("");

    return (
        <div className="w-full space-y-1">
            <Label htmlFor="--controlled">Write anything, and we will count your characters</Label>
            <Textarea id="--controlled" value={text} onChange={(e) => setText(e.target.value)} {...props} />
            <p className="text-default-600 text-sm">
                Characters: {text.length}
                <span onClick={() => setText("")} className="text-primary ms-1 cursor-pointer hover:underline">
                    (Clear)
                </span>
            </p>
        </div>
    );
};
