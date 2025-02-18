import { Checkbox } from "@/components/ui/checkbox";

export const Demo = ({ ...props }) => {
    return (
        <div className="flex items-center gap-3">
            <Checkbox {...props} />
            <Checkbox {...props} defaultChecked />
            <Checkbox {...props} disabled />
            <Checkbox {...props} disabled defaultChecked />
        </div>
    );
};
