import { BookOpenTextIcon, HourglassIcon, PaletteIcon, ShapesIcon, SquareDashedBottomCodeIcon } from "lucide-react";

import { SidebarNavItem } from "@/website/components/layouts/sidebar";
import { routes } from "@/website/utils/routes";

const base = routes.docs;
const components = base.components.base;

export const docsSidebarNavItems: SidebarNavItem[] = [
    {
        title: "Getting Started",
        icon: <BookOpenTextIcon />,
        expanded: true,
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
        expanded: true,
        items: [
            {
                title: "Next.js",
                link: base.installation + "/next",
                new: true,
            },
            {
                title: "Vite",
                link: base.installation + "/vite",
                new: true,
            },
            {
                title: "Manual",
                link: base.installation + "/manual",
            },
        ],
    },
    {
        title: "Theme",
        icon: <PaletteIcon />,
        items: [
            {
                title: "Conventions",
                link: base.theme + "/conventions",
            },
            {
                title: "Setup",
                link: base.theme + "/setup",
            },
            {
                title: "Dark mode",
                link: base.theme + "/dark-mode",
                new: true,
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
                title: "Checkbox",
                link: components + "/checkbox",
            },
            {
                title: "Dialog",
                link: components + "/dialog",
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
                title: "Pagination",
                link: components + "/pagination",
            },
            {
                title: "Popover",
                link: components + "/popover",
            },
            {
                title: "Progress",
                link: components + "/progress",
                new: true,
            },
            {
                title: "Radio Group",
                link: components + "/radio-group",
                new: true,
            },
            {
                title: "Scroll Area",
                link: components + "/scroll-area",
                new: true,
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
            },
            {
                title: "Slider",
                link: components + "/slider",
                new: true,
            },
            {
                title: "Switch",
                link: components + "/switch",
            },
            {
                title: "Table",
                link: components + "/table",
                new: true,
            },
            {
                title: "Tabs",
                link: components + "/tabs",
            },
            {
                title: "Textarea",
                link: components + "/textarea",
                new: true,
            },
            {
                title: "Toggle",
                link: components + "/toggle",
                new: true,
            },
            {
                title: "Tooltip",
                link: components + "/tooltip",
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
                title: "Toggle Group",
            },
        ],
    },
];
