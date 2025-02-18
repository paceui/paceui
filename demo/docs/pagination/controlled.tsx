"use client";

import { useMemo, useState } from "react";

import { Pagination, PaginationItem, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";

export const Demo = ({ ...props }) => {
    const maxPage = useMemo(
        () => (typeof window != "undefined" ? (window.innerWidth > 1600 ? 6 : window.innerWidth > 1000 ? 4 : 3) : 3),
        [],
    );

    const [selectedPage, setSelectedPage] = useState(1);

    const goToPreviousPage = () => {
        if (selectedPage > 1) setSelectedPage(selectedPage - 1);
    };

    const goToNextPage = () => {
        if (selectedPage < maxPage) setSelectedPage(selectedPage + 1);
    };

    return (
        <div className="space-y-4">
            <Pagination>
                <PaginationPrevious href="##" {...props} onClick={goToPreviousPage} disabled={selectedPage <= 1} />
                {Array.from({ length: maxPage }, (_, i) => i + 1).map((page) => (
                    <PaginationItem
                        href="##"
                        {...props}
                        key={page}
                        onClick={() => setSelectedPage(page)}
                        isActive={selectedPage == page}>
                        {page}
                    </PaginationItem>
                ))}
                <PaginationNext {...props} onClick={goToNextPage} href="##" disabled={selectedPage >= maxPage} />
            </Pagination>
            <p className="text-default-600 text-center text-sm">Selected Page: {selectedPage}</p>
        </div>
    );
};
