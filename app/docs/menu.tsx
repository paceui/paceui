import { BookOpenTextIcon, HourglassIcon, ShapesIcon } from "lucide-react";

import { SidebarNavSection } from "@/website/components/layouts/sidebar";
import { routes } from "@/website/utils/routes";

const base = routes.docs;
const components = base.components.base;

export const docsSidebarNavSections: SidebarNavSection[] = [
    {
        title: "Getting Started",
        icon: <BookOpenTextIcon />,
        items: [
            {
                title: "Introduction",
                link: base.home,
            },
            {
                title: "Theme",
                link: base.theme,
            },
        ],
    },
    {
        title: "Components",
        icon: <ShapesIcon />,
        expanded: true,
        items: [
            {
                title: "Alert",
                link: components + "/alert",
            },
        ],
    },
    {
        title: "Coming soon",
        icon: <HourglassIcon />,
        comingSoon: true,
        items: [
            {
                title: "Button",
            },
            {
                title: "Card",
            },
            {
                title: "Checkbox",
            },
            {
                title: "Dialog",
            },
            {
                title: "Dropdown Menu",
            },
        ],
    },
];
