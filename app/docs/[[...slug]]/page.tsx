import { Link2Icon } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { docs } from "@/.velite";
import { docsSidebarNavItems } from "@/app/docs/menu";
import {
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { MDXContent } from "@/website/components/docs/mdx-content";
import { DocsPager } from "@/website/components/docs/pager";
import { TableOfContent } from "@/website/components/docs/toc";
import { createPagerPair } from "@/website/utils/pager";
import { routes } from "@/website/utils/routes";

interface PageProps {
    params: Promise<{
        slug?: string[];
    }>;
}

export async function generateMetadata(props: PageProps): Promise<Metadata> {
    const params = await props.params;
    const url = `docs${params.slug ? "/" : ""}${(params.slug ?? []).join("/")}`;
    const page = docs.find((doc) => doc.path === url);

    return {
        title: page?.title,
        description: page?.description,
    };
}

export default async function Page(props: PageProps) {
    const params = await props.params;
    const url = `docs${params.slug ? "/" : ""}${(params.slug ?? []).join("/")}`;
    const page = docs.find((doc) => doc.path === url);

    if (!page) {
        notFound();
    }

    const pager = createPagerPair({
        items: docsSidebarNavItems,
        activePath: url,
        pagerPair: { prev: page.pagerPrev, next: page.pagerNext },
    });

    return (
        <div className="flex md:gap-4 xl:gap-8 2xl:gap-16">
            <div className="mx-auto w-full min-w-0 grow md:ps-4 xl:ps-8 2xl:ps-16">
                <BreadcrumbList className="sm:gap-1.5">
                    <BreadcrumbItem>
                        <BreadcrumbLink asChild>
                            <Link className="text-default-600" href={routes.docs.home}>
                                Docs
                            </Link>
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbPage className="text-default-950">{page.title}</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
                <h1 className="mt-3 text-3xl font-semibold">{page.title}</h1>
                <p className="text-default-500">{page.description}</p>
                {page.links && (
                    <div className="mt-4 flex gap-2">
                        {page.links.api && (
                            <Link
                                className="bg-default-100 text-foreground text-opacity-80 hover:bg-default-200 hover:text-opacity-100 inline-flex items-center gap-1.5 rounded px-2 py-0.5 text-sm font-medium transition-all"
                                href={page.links.api}
                                target="_blank">
                                <Link2Icon className="size-3.5" />
                                API Reference
                            </Link>
                        )}
                    </div>
                )}
                {page.code && (
                    <div className="mt-8">
                        <MDXContent code={page.code} />
                    </div>
                )}
                <div className="my-12">
                    <DocsPager prev={pager.prev} next={pager.next} />
                </div>
            </div>
            <div className="sticky top-24 hidden max-h-[calc(100vh-100px)] w-52 xl:block">
                <TableOfContent entries={page.toc} />
                <div className="mt-3">
                    <p className="text-sm text-default-700 font-medium">Join us</p>
                    <div className="space-y-1 mt-1 text-sm">
                        <Link href={routes.externalLinks.discord} target="_blank"
                              className="flex items-center gap-2 text-default-600 hover:text-default-800 transition-all">
                            <svg xmlns="http://www.w3.org/2000/svg"  className="size-4.5" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                <path
                                    d="M13.545 2.907a13.2 13.2 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.2 12.2 0 0 0-3.658 0 8 8 0 0 0-.412-.833.05.05 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.04.04 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032q.003.022.021.037a13.3 13.3 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019q.463-.63.818-1.329a.05.05 0 0 0-.01-.059l-.018-.011a9 9 0 0 1-1.248-.595.05.05 0 0 1-.02-.066l.015-.019q.127-.095.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.05.05 0 0 1 .053.007q.121.1.248.195a.05.05 0 0 1-.004.085 8 8 0 0 1-1.249.594.05.05 0 0 0-.03.03.05.05 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.2 13.2 0 0 0 4.001-2.02.05.05 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.03.03 0 0 0-.02-.019m-8.198 7.307c-.789 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612m5.316 0c-.788 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612"></path>
                            </svg>
                            Discord
                        </Link>
                        <Link href={routes.externalLinks.twitter} target="_blank"
                              className="flex items-center gap-2 text-default-600 hover:text-default-800 transition-all">
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                <path
                                    d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"></path>
                            </svg>
                            Twitter
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
