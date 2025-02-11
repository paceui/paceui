import { Fragment } from "react";

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectSeparator,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

const items = [
    {
        label: "American",
        items: [
            { value: "burger", label: "Burger" },
            { value: "bbq", label: "Barbecue" },
            { value: "poutine", label: "Poutine" },
            { value: "tacos", label: "Tacos" },
            { value: "chowder", label: "Clam Chowder" },
            { value: "jambalaya", label: "Jambalaya" },
        ],
    },
    {
        label: "Italian",
        items: [
            { value: "pizza", label: "Pizza" },
            { value: "paella", label: "Paella" },
            { value: "croissant", label: "Croissant" },
            { value: "bratwurst", label: "Bratwurst" },
            { value: "moussaka", label: "Moussaka" },
            { value: "pierogi", label: "Pierogi" },
        ],
    },
    {
        label: "Japanese",
        items: [
            { value: "sushi", label: "Sushi" },
            { value: "ramen", label: "Ramen" },
            { value: "bibimbap", label: "Bibimbap" },
            { value: "dim_sum", label: "Dim Sum" },
            { value: "curry", label: "Curry" },
            { value: "pho", label: "Pho" },
        ],
    },
    {
        label: "Australian",
        items: [
            { value: "meat_pie", label: "Meat Pie" },
            { value: "lamington", label: "Lamington" },
            { value: "pavlova", label: "Pavlova" },
            { value: "hāngi", label: "Hāngi" },
            { value: "fish_and_chips", label: "Fish and Chips" },
        ],
    },
    {
        label: "South American",
        items: [
            { value: "feijoada", label: "Feijoada" },
            { value: "empanadas", label: "Empanadas" },
            { value: "ceviche", label: "Ceviche" },
            { value: "asado", label: "Asado" },
            { value: "arepas", label: "Arepas" },
        ],
    },
];

export const Demo = ({ ...props }) => {
    return (
        <Select {...props}>
            <SelectTrigger className="w-60">
                <SelectValue placeholder="Choose a dish" />
            </SelectTrigger>
            <SelectContent>
                {items.map((item, index) => {
                    return (
                        <Fragment key={item.label + index}>
                            <SelectGroup>
                                <SelectLabel>{item.label}</SelectLabel>
                                {item.items.map((item, index) => (
                                    <SelectItem value={item.value} key={item.label + index}>
                                        {item.label}
                                    </SelectItem>
                                ))}
                            </SelectGroup>
                            {index < items.length - 1 && <SelectSeparator />}
                        </Fragment>
                    );
                })}
            </SelectContent>
        </Select>
    );
};
