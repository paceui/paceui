import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const Demo = () => {
    return (
        <div className="flex flex-wrap gap-4">
            <Card className="w-64 shadow-none">
                <CardHeader>
                    <CardTitle>Only Border</CardTitle>
                </CardHeader>
                <CardContent>
                    Use
                    <code className="bg-default-100 mx-1 rounded-sm px-1 py-0.5 text-sm select-all">shadow-none</code>
                    class to hide shadow
                </CardContent>
            </Card>
            <Card className="w-64 border-none shadow">
                <CardHeader>
                    <CardTitle>Only Shadow</CardTitle>
                </CardHeader>
                <CardContent>
                    Use
                    <code className="bg-default-100 mx-1 rounded-sm px-1 py-0.5 text-sm select-all">border-none</code>
                    class to hide border
                </CardContent>
            </Card>
        </div>
    );
};
