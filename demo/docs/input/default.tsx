import { Input } from "@/components/ui/input";

export const Demo = ({ ...props }) => {
    return <Input type="email" className="max-w-80" placeholder="Email" {...props} />;
};
