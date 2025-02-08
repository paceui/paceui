import { BookOpenTextIcon, HourglassIcon, ShapesIcon } from "lucide-react";

import { SidebarNavItem } from "@/website/components/layouts/sidebar";
import { routes } from "@/website/utils/routes";

const base = routes.docs;
const components = base.components.base;

export const docsSidebarNavItems: SidebarNavItem[] = [
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
            {
                title: "Button",
                link: components + "/button",
            },
            {
                title: "Breadcrumb",
                link: components + "/breadcrumb",
            },
            {
                title: "Label",
                link: components + "/label",
            },
            {
                title: "Select",
                link: components + "/select",
            },
            {
                title: "Switch",
                link: components + "/switch",
            },
        ],
    },
    {
        title: "Coming soon",
        icon: <HourglassIcon />,
        comingSoon: true,
        items: [
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
