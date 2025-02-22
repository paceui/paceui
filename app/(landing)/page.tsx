import { BookOpenTextIcon, ChevronRightIcon, ShapesIcon } from "lucide-react";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Logo } from "@/website/components/Logo";
import { InstallationCommand } from "@/website/components/docs/installation-command";
import { Topbar } from "@/website/components/layouts/topbar";
import { Newsletter } from "@/website/components/newsletter";
import { routes } from "@/website/utils/routes";

export default function LandingPage() {
    return (
        <div className="container">
            <Topbar />
            <div className="mt-8 mb-8 2xl:mt-24">
                <div className="flex flex-col items-center justify-center">
                    <div className="max-w-[600px] text-center">
                        <div>
                            <Link href={routes.docs.installation}>
                                <Badge variant="soft" color="success" className="font-medium">
                                    CLI is available
                                </Badge>
                            </Link>

                            <div className="flex items-center justify-center gap-4 transition-all duration-500 starting:blur-sm">
                                <Logo className="size-16" />
                                <p className="text-3xl font-semibold sm:text-7xl">PaceUI</p>
                            </div>
                        </div>
                        <p className="text-default-800 mt-4 sm:text-xl">
                            Easily integrate, customizable, copy-pasteable Tailwind components and variants into your
                            React and Next.js apps
                        </p>
                        <div className="mt-8 flex justify-center gap-6 max-sm:flex-col">
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
                        <div className="mt-8 flex flex-col items-center justify-center gap-2 xl:mt-16 2xl:mt-24">
                            <p className="font-medium italic">&#34;Single-command setup with zero dependency&#34;</p>
                            <InstallationCommand
                                wrapperClassname="mt-0"
                                className="[&>.shiki]:!pe-10"
                                command='npx shadcn@canary add "https://paceui.com/r/init"'></InstallationCommand>
                        </div>
                    </div>
                </div>
                <div className="mt-8 flex justify-center xl:mt-16 2xl:mt-24 ">
                    <Newsletter />
                </div>
            </div>
        </div>
    );
}
