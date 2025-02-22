import { Textarea } from "@/components/ui/textarea";

export const Demo = ({ ...props }) => {
    return (
        <div className="w-full space-y-3">
            <Textarea defaultValue="It's a readonly data" {...props} readOnly />
            <Textarea {...props} disabled defaultValue="You can't touch me" />
        </div>
    );
};
