import { Link2Icon } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { docs } from "@/.velite";
import {
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { MDXContent } from "@/website/components/docs/mdx-content";
import { routes } from "@/website/utils/routes";
import { DocsPager } from "@/website/components/docs/pager";
import { createPagerPair } from "@/website/utils/pager";
import { docsSidebarNavItems } from "@/app/docs/menu";

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
            <div className="sticky top-24 hidden max-h-[calc(100vh-100px)] w-52 xl:block">Table of Contents</div>
        </div>
    );
}
