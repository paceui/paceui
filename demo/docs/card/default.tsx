import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export const Demo = () => {
    return (
        <Card className="w-full">
            <CardHeader className="flex items-center gap-3">
                <Avatar>
                    <AvatarImage src="https://github.com/withden.png" alt="@withden" />
                    <AvatarFallback>DN</AvatarFallback>
                </Avatar>
                <div>
                    <CardTitle>Denish Navadiya</CardTitle>
                    <CardDescription>@withden</CardDescription>
                </div>
            </CardHeader>
            <CardContent>
                <p>
                    Get started with JavaScript, the essential language for building dynamic web applications. This
                    course covers the fundamentals, including variables, functions, and events.
                </p>
            </CardContent>
            <CardFooter className="justify-end">
                <Button color="error" variant="ghost">
                    Decline
                </Button>
                <Button color="primary">Accept</Button>
            </CardFooter>
        </Card>
    );
};
