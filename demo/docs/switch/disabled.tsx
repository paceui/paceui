import { Switch } from "@/components/ui/switch";

export const Demo = ({ ...props }) => {
    return (
        <div className="inline-flex gap-4">
            <Switch {...props} disabled />
            <Switch {...props} disabled defaultChecked />
        </div>
    );
};
