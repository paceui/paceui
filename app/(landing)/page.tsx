import { BookOpenTextIcon, ChevronRightIcon, ShapesIcon } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { routes } from "@/website/utils/routes";

export default function LandingPage() {
    return (
        <div className="container">
            <div className="flex h-screen flex-col items-center justify-center">
                <div className="max-w-[600px] space-y-10 text-center">
                    <div>
                        <p className="text-7xl font-semibold">PaceUI</p>
                    </div>
                    <p className="text-default-800 text-xl">
                        Copy-pasteable, customizable Tailwind components and variants to boost your workflow.
                    </p>
                    <div className="flex justify-center gap-6">
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
        </div>
    );
}
