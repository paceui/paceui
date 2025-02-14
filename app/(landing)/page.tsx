import { BookOpenTextIcon, ChevronRightIcon, ShapesIcon } from "lucide-react";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Topbar } from "@/website/components/layouts/topbar";
import { Newsletter } from "@/website/components/newsletter";
import { routes } from "@/website/utils/routes";

export default function LandingPage() {
    return (
        <div className="container">
            <Topbar />
            <div className="mt-16 mb-16 md:mt-40">
                <div className="flex flex-col items-center justify-center">
                    <div className="max-w-[600px] space-y-10 text-center">
                        <div>
                            <Badge variant="soft" color="primary" className="font-medium">
                                Preview
                            </Badge>

                            <p className="text-3xl font-semibold sm:text-7xl">PaceUI</p>
                        </div>
                        <p className="text-default-800 sm:text-xl">
                            Easily integrate, customizable, copy-pasteable Tailwind components and variants into your
                            React and Next.js apps
                        </p>
                        <div className="flex justify-center gap-6 max-sm:flex-col">
                            <Button size="lg" variant="ghost" asChild>
                                <Link href={routes.docs.home}>
                                    <BookOpenTextIcon />
                                    Documentation
                                </Link>
                            </Button>
                            <Button size="lg" variant="solid" color="primary" asChild>
                                <Link href={routes.docs.components.home}>
                                    <ShapesIcon />
                                    Components
                                    <ChevronRightIcon />
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="mt-16 flex justify-center md:mt-40">
                    <Newsletter />
                </div>
            </div>
        </div>
    );
}
