import { PagerPair } from "@/website/components/docs/pager";
import { SidebarNavItem } from "@/website/components/layouts/sidebar";

export const createPagerPair = ({
    items,
    activePath,
    pagerPair,
    defaultPagerPair,
}: {
    items: SidebarNavItem[];
    activePath: string;
    pagerPair: PagerPair;
    defaultPagerPair?: PagerPair;
}): PagerPair => {
    const flatSections = items.flatMap((item) => (item.comingSoon ? [] : item.items)).filter((e) => e != undefined);

    const currentIndex = flatSections.findIndex((item) => item.link?.includes(activePath));

    if (currentIndex === -1) return pagerPair;

    if (pagerPair.prev == null) {
        if (currentIndex > 0) {
            pagerPair.prev = {
                title: flatSections[currentIndex - 1].title,
                link: flatSections[currentIndex - 1].link ?? "#",
            };
        } else {
            pagerPair.prev = defaultPagerPair?.prev;
        }
    }

    if (pagerPair.next == null) {
        if (currentIndex < flatSections.length - 1) {
            pagerPair.next = {
                title: flatSections[currentIndex + 1].title,
                link: flatSections[currentIndex + 1].link ?? "#",
            };
        } else {
            pagerPair.next = defaultPagerPair?.next;
        }
    }

    return pagerPair;
};
