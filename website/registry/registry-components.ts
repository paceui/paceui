import { type RegistryItem } from "shadcn/registry";

export const componentRegistries: RegistryItem[] = [
    {
        name: "accordion",
        type: "registry:ui",
        dependencies: ["@radix-ui/react-accordion"],
        files: [
            {
                path: "ui/accordion.tsx",
                type: "registry:ui",
            },
        ],
        tailwind: {
            config: {
                theme: {
                    extend: {
                        keyframes: {
                            "accordion-down": {
                                from: { height: "0" },
                                to: { height: "var(--radix-accordion-content-height)" },
                            },
                            "accordion-up": {
                                from: { height: "var(--radix-accordion-content-height)" },
                                to: { height: "0" },
                            },
                        },
                        animation: {
                            "accordion-down": "accordion-down 0.2s ease-out",
                            "accordion-up": "accordion-up 0.2s ease-out",
                        },
                    },
                },
            },
        },
    },
    {
        name: "alert",
        type: "registry:ui",
        files: [
            {
                path: "ui/alert.tsx",
                type: "registry:ui",
            },
        ],
    },
    {
        name: "avatar",
        type: "registry:ui",
        dependencies: ["@radix-ui/react-avatar"],
        files: [
            {
                path: "ui/avatar.tsx",
                type: "registry:ui",
            },
        ],
    },
    {
        name: "badge",
        type: "registry:ui",
        files: [
            {
                path: "ui/badge.tsx",
                type: "registry:ui",
            },
        ],
    },
    {
        name: "breadcrumb",
        type: "registry:ui",
        dependencies: ["@radix-ui/react-slot"],
        files: [
            {
                path: "ui/breadcrumb.tsx",
                type: "registry:ui",
            },
        ],
    },
    {
        name: "button",
        type: "registry:ui",
        dependencies: ["@radix-ui/react-slot"],
        files: [
            {
                path: "ui/button.tsx",
                type: "registry:ui",
            },
        ],
    },
    {
        name: "card",
        type: "registry:ui",
        files: [
            {
                path: "ui/card.tsx",
                type: "registry:ui",
            },
        ],
    },
    {
        name: "checkbox",
        type: "registry:ui",
        dependencies: ["@radix-ui/react-slot", "@radix-ui/react-checkbox"],
        files: [
            {
                path: "ui/checkbox.tsx",
                type: "registry:ui",
            },
        ],
    },
    {
        name: "dialog",
        type: "registry:ui",
        dependencies: ["@radix-ui/react-dialog"],
        files: [
            {
                path: "ui/dialog.tsx",
                type: "registry:ui",
            },
        ],
    },
    {
        name: "dropdown-menu",
        type: "registry:ui",
        dependencies: ["@radix-ui/react-dropdown-menu"],
        files: [
            {
                path: "ui/dropdown-menu.tsx",
                type: "registry:ui",
            },
        ],
    },
    {
        name: "input",
        type: "registry:ui",
        files: [
            {
                path: "ui/input.tsx",
                type: "registry:ui",
            },
        ],
    },
    {
        name: "label",
        type: "registry:ui",
        files: [
            {
                path: "ui/label.tsx",
                type: "registry:ui",
            },
        ],
    },
    {
        name: "pagination",
        type: "registry:ui",
        files: [
            {
                path: "ui/pagination.tsx",
                type: "registry:ui",
            },
        ],
    },
    {
        name: "popover",
        type: "registry:ui",
        dependencies: ["@radix-ui/react-popover"],
        files: [
            {
                path: "ui/popover.tsx",
                type: "registry:ui",
            },
        ],
    },
    {
        name: "progress",
        type: "registry:ui",
        dependencies: ["@radix-ui/react-progress"],
        files: [
            {
                path: "ui/progress.tsx",
                type: "registry:ui",
            },
        ],
    },
    {
        name: "radio-group",
        type: "registry:ui",
        dependencies: ["@radix-ui/react-radio-group"],
        files: [
            {
                path: "ui/radio-group.tsx",
                type: "registry:ui",
            },
        ],
    },
    {
        name: "scroll-area",
        type: "registry:ui",
        dependencies: ["@radix-ui/react-scroll-area"],
        files: [
            {
                path: "ui/scroll-area.tsx",
                type: "registry:ui",
            },
        ],
    },
    {
        name: "select",
        type: "registry:ui",
        dependencies: ["@radix-ui/react-select"],
        files: [
            {
                path: "ui/select.tsx",
                type: "registry:ui",
            },
        ],
    },
    {
        name: "separator",
        type: "registry:ui",
        dependencies: ["@radix-ui/react-separator"],
        files: [
            {
                path: "ui/separator.tsx",
                type: "registry:ui",
            },
        ],
    },
    {
        name: "skeleton",
        type: "registry:ui",
        files: [
            {
                path: "ui/skeleton.tsx",
                type: "registry:ui",
            },
        ],
    },
    {
        name: "slider",
        type: "registry:ui",
        dependencies: ["@radix-ui/react-slider"],
        files: [
            {
                path: "ui/slider.tsx",
                type: "registry:ui",
            },
        ],
    },
    {
        name: "switch",
        type: "registry:ui",
        dependencies: ["@radix-ui/react-switch"],
        files: [
            {
                path: "ui/switch.tsx",
                type: "registry:ui",
            },
        ],
    },
    {
        name: "table",
        type: "registry:ui",
        files: [
            {
                path: "ui/table.tsx",
                type: "registry:ui",
            },
        ],
    },
    {
        name: "tabs",
        type: "registry:ui",
        dependencies: ["@radix-ui/react-tabs"],
        files: [
            {
                path: "ui/tabs.tsx",
                type: "registry:ui",
            },
        ],
    },
    {
        name: "textarea",
        type: "registry:ui",
        files: [
            {
                path: "ui/textarea.tsx",
                type: "registry:ui",
            },
        ],
    },
    {
        name: "toggle",
        type: "registry:ui",
        dependencies: ["@radix-ui/react-toggle"],
        files: [
            {
                path: "ui/toggle.tsx",
                type: "registry:ui",
            },
        ],
    },
    {
        name: "toggle-group",
        type: "registry:ui",
        dependencies: ["@radix-ui/react-toggle-group"],
        files: [
            {
                path: "ui/toggle-group.tsx",
                type: "registry:ui",
            },
        ],
    },
    {
        name: "tooltip",
        type: "registry:ui",
        dependencies: ["@radix-ui/react-tooltip"],
        files: [
            {
                path: "ui/tooltip.tsx",
                type: "registry:ui",
            },
        ],
    },
];
