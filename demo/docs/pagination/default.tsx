import {
    Pagination,
    PaginationEllipsis,
    PaginationItem,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";

export const Demo = ({ ...props }) => {
    return (
        <Pagination>
            <PaginationPrevious {...props} />
            <PaginationItem {...props} href="#">
                1
            </PaginationItem>
            <PaginationItem {...props} href="#" isActive>
                2
            </PaginationItem>
            <PaginationItem {...props} href="#">
                3
            </PaginationItem>
            <PaginationEllipsis {...props} />
            <PaginationNext {...props} />
        </Pagination>
    );
};
