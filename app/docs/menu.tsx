import { BookOpenTextIcon, HourglassIcon, PaletteIcon, ShapesIcon, SquareDashedBottomCodeIcon } from "lucide-react";

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
                title: "Installation",
                link: base.installation,
            },
            {
                title: "Theme",
                link: base.theme,
            },
        ],
    },
    {
        title: "Installation",
        icon: <SquareDashedBottomCodeIcon />,
        expanded: false,
        items: [
            {
                title: "Manual",
                link: base.installation + "/manual",
            },
            {
                title: "Next.js",
                link: base.installation + "/next",
                comingSoon: true,
            },
            {
                title: "Vite",
                link: base.installation + "/vite",
                comingSoon: true,
            },
        ],
    },
    {
        title: "Theme",
        icon: <PaletteIcon />,
        expanded: false,
        items: [
            {
                title: "Conventions",
                link: base.theme + "/conventions",
            },
            {
                title: "Setup",
                link: base.theme + "/setup",
                new: true,
            },
            {
                title: "Dark mode",
                link: base.theme + "/dark-mode",
                comingSoon: true,
            },
        ],
    },
    {
        title: "Components",
        icon: <ShapesIcon />,
        expanded: true,
        items: [
            {
                title: "Accordion",
                link: components + "/accordion",
                new: true,
            },
            {
                title: "Alert",
                link: components + "/alert",
            },
            {
                title: "Avatar",
                link: components + "/avatar",
            },
            {
                title: "Badge",
                link: components + "/badge",
            },
            {
                title: "Breadcrumb",
                link: components + "/breadcrumb",
            },
            {
                title: "Button",
                link: components + "/button",
            },
            {
                title: "Card",
                link: components + "/card",
            },
            {
                title: "Dialog",
                link: components + "/dialog",
                new: true,
            },
            {
                title: "Dropdown Menu",
                link: components + "/dropdown-menu",
            },
            {
                title: "Input",
                link: components + "/input",
            },
            {
                title: "Label",
                link: components + "/label",
            },
            {
                title: "Popover",
                link: components + "/popover",
            },
            {
                title: "Select",
                link: components + "/select",
            },
            {
                title: "Separator",
                link: components + "/separator",
            },
            {
                title: "Skeleton",
                link: components + "/skeleton",
                new: true,
            },
            {
                title: "Switch",
                link: components + "/switch",
            },
            {
                title: "Tabs",
                link: components + "/tabs",
                new: true,
            },
        ],
    },
    {
        title: "Coming soon",
        icon: <HourglassIcon />,
        comingSoon: true,
        items: [
            {
                title: "Checkbox",
            },
            {
                title: "Pagination",
            },
            {
                title: "Progress",
            },
            {
                title: "Radio Group",
            },
            {
                title: "Scroll Area",
            },
            {
                title: "Slider",
            },
            {
                title: "Table",
            },
            {
                title: "Textarea",
            },
            {
                title: "Toggle",
            },
            {
                title: "Tooltip",
            },
        ],
    },
];
