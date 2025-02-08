import { Metadata } from "next";
import { notFound } from "next/navigation";

import { docs } from "@/.velite";
import { MDXContent } from "@/website/components/docs/mdx-content";
import { BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import Link from "next/link";
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
                {page.code && (
                    <div className="mt-8">
                        <MDXContent code={page.code} />
                    </div>
                )}
            </div>
            <div className="sticky top-24 hidden max-h-[calc(100vh-100px)] w-52 xl:block">Table of Contents</div>
        </div>
    );
}
