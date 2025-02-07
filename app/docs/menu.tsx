import { BookOpenTextIcon } from "lucide-react";

import { SidebarNavSection } from "@/website/components/layouts/sidebar";
import { routes } from "@/website/utils/routes";

const base = routes.docs;

export const docsSidebarNavSections: SidebarNavSection[] = [
    {
        title: "Getting Started",
        icon: <BookOpenTextIcon />,
        items: [
            {
                title: "Introduction",
                link: base.home,
            },
        ],
    },
];
