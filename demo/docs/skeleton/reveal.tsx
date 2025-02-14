import { Navigation2Icon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export const Demo = ({ reveal = false }) => {
    return (
        <div className="relative">
            <Card
                className={`absolute w-80 opacity-0 shadow-none transition-all duration-500 ${reveal && "z-50 opacity-100"}`}>
                <CardHeader>
                    <CardDescription>09, May 2025</CardDescription>
                    <CardTitle>New York, USA</CardTitle>
                </CardHeader>
                <img
                    src={
                        "https://raw.githubusercontent.com/ServiceStack/images/refs/heads/master/hero/black-white-city.jpg"
                    }
                    className="h-40 object-cover"
                    alt="Card Media"
                />
                <CardContent className="mt-4">
                    <p>New York, often called New York City or NYC, is the most populous city in the United States.</p>
                </CardContent>
                <CardFooter className="justify-end">
                    <Button color="primary" variant="ghost">
                        <Navigation2Icon className="size-4" />
                        Directions
                    </Button>
                </CardFooter>
            </Card>
            <Card className={`w-80 opacity-100 shadow-none transition-all duration-500 ${reveal && "opacity-0"}`}>
                <CardHeader>
                    <Skeleton className="h-3.5 w-24"></Skeleton>
                    <CardTitle>
                        <Skeleton className="mt-1.5 h-5 w-36"></Skeleton>
                    </CardTitle>
                </CardHeader>
                <Skeleton className="h-40 w-full rounded-none"></Skeleton>
                <CardContent className="mt-4 space-y-1.5">
                    <Skeleton className="h-5 w-full"></Skeleton>
                    <Skeleton className="h-5 w-full"></Skeleton>
                    <Skeleton className="h-5 w-full"></Skeleton>
                </CardContent>
                <CardFooter className="justify-end">
                    <Skeleton className="my-1 h-[29px] w-32"></Skeleton>
                </CardFooter>
            </Card>
        </div>
    );
};
