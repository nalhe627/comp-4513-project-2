import { useContext, useEffect, useState } from "react";
import { Accordion, AccordionItem } from "@heroui/accordion";
import { Checkbox, CheckboxGroup } from "@heroui/checkbox";
import { Radio, RadioGroup } from "@heroui/radio";

import ProductList from "../components/ProductList";
import { CartContext } from "../components/CartContext";

// Hardcode categories, sizes, and materials for now (we could possibly keep it)
const CATEGORIES = [
    "Accessories",
    "Bottoms",
    "Dresses",
    "Intimates",
    "Jumpsuits",
    "Loungewear",
    "Outerwear",
    "Shoes",
    "Sweaters",
    "Swimwear",
    "Tops",
];

/* 
 * TODO: the data file also has products with numbers in its "sizes" array,
 * so figure out a way to incorporate that
 */ 
const SIZES = [
    "XS",
    "S",
    "M",
    "L",
    "XL",
];

/*
 * Too many material types in the data file, only including the common/noteable ones
 * Every other material not in these common types will be labeld as "other" 
 * 
 * Note that materials isn't shown in the exmaple for the browse view, so it might not be needed
 */
const MATERIALS = [
    "Cashemere",
    "Cotton",
    "Denim",
    "Leather",
    "Nylon",
    "Polyester",
    "Sherpa",
    "Silk",
    "Wool",
    "Other",
];

/*
 * Same as materials, too many colors so only using the most common/notalbe ones
 * Dynamically putting the hex number into the class name doesn't work; must use full name
 */
const COLORS = [
    { name: "Black", hex: "bg-[#000000]" },
    { name: "Beige", hex: "bg-[#ede8d0]" },
    { name: "Blue", hex: "bg-[#0066ffff]" },
    { name: "Brown", hex: "bg-[#a36537ff]" },
    { name: "Burgundy", hex: "bg-[#660033]" },
    { name: "Camel", hex: "bg-[#c695f9]" },
    { name: "Charcoal", hex: "bg-[#36454f]" },
    { name: "Gold", hex: "bg-[#ebdd1eff]" },
    { name: "Gray", hex: "bg-[#8b8b8bff]" },
    { name: "Green", hex: "bg-[#2dd51eff]" },
    { name: "Ivory", hex: "bg-[#ffffe3]" },
    { name: "Navy", hex: "bg-[#00279dff]" },
    { name: "Red", hex: "bg-[#ff0000ff]" },
    { name: "Tan", hex: "bg-[#d2b48c]" },
    { name: "White", hex: "bg-[#FFFFFF]" },
    { name: "Yellow", hex: "bg-[#fffb00ff]" },
];

const Browse = ({ products, gender, category, change }) => {
    const { cart, setCart } = useContext(CartContext);
    const [loading, setLoading] = useState(true);
    // const [currGender, setCurrGender] = useState("");

    // Not sure if filters should be an array or object (using object for now)
    const [filters, setFilters] = useState({ gender, category });

    /**
     * Changes the gender property in the filter state.
     *
     * *For some reason it shows a warning in the console when changing this state,
     * But when you use a separate state for gender, it doesn't show.*
     *
     * @param {string} selectedGender the gender to change to in the filter state.
     */
    const changeGender = (selectedGender) => {
        // setCurrGender(selectedGender);
        setFilters({
            ...filters,
            gender: selectedGender,
        });
    };

    /**
     * Changes the categories property in the filter state.
     * 
     * @param {string[]} selectedCategories the categories to change in the filter state.
     */
    const changeCategories = (selectedCategories) => {
        setFilters({
            ...filters,
            category: selectedCategories,
        });
    }

    /**
     * Changes the sizes property in the filter state.
     * 
     * @param {string[]} selectedSizes the sizes to change in the filter state.
     */
    const changeSizes = (selectedSizes) => {
        setFilters({
            ...filters,
            size: selectedSizes,
        });
    }

    /**
     * Changes the color property in the filter state.
     * 
     * @param {string[]} selectedColors the colors to change in the filter state.
     */
    const changeColors = (selectedColors) => {
        setFilters({
            ...filters,
            color: selectedColors,
        });
    }

    return (
        <section className="flex border p-5 m-5 flex-grow rounded-lg gap-4">

            {/* Filter section */}
            {/* TODO: make the fitler a separate component */}
            <div className="border basis-1/5 p-5 rounded-lg">
                <p className="font-bold text-xl mb-5">Filters</p>
                <Accordion
                    selectionMode="multiple"
                    itemClasses={{ title: "font-semibold" }}
                >
                    {/* Gender filter */}
                    <AccordionItem key={1} title="Gender">
                        <RadioGroup
                            color="default"
                            className="pb-3"
                            value={filters.gender}
                            onValueChange={changeGender}
                        >
                            <Radio value="male">Male</Radio>
                            <Radio value="female">Female</Radio>
                        </RadioGroup>
                    </AccordionItem>

                    {/* Category filter */}
                    <AccordionItem key={2} title="Category">
                        <CheckboxGroup 
                            color="default" 
                            className="pb-3"
                            value={filters.category} 
                            onValueChange={changeCategories}
                        >
                            {CATEGORIES.map((categ, i) => (
                                <Checkbox key={i} value={categ}>
                                    {categ}
                                </Checkbox>
                            ))}
                        </CheckboxGroup>
                    </AccordionItem>

                    {/* Size filter */}
                    <AccordionItem key={3} title="Size">
                        <CheckboxGroup 
                            color="default" 
                            className="pb-3"
                            value={filters.size} 
                            onValueChange={changeSizes}
                        >
                            {SIZES.map((size, i) => (
                                <Checkbox key={i} value={size}>
                                    {size}
                                </Checkbox>
                            ))}
                        </CheckboxGroup>
                    </AccordionItem>

                    {/* Color filter */}
                    {/* TODO: make all color boxes with the same alignment */}
                    <AccordionItem key={4} title="Color">
                        <CheckboxGroup 
                            color="default" 
                            value={filters.color} 
                            onValueChange={changeColors}
                        >
                            {COLORS.map((color, i) => {
                                return (
                                    <Checkbox key={i} value={color.name}>
                                        <div className="grid grid-cols-2 gap-6">
                                            <p>
                                                {color.name}
                                            </p>

                                            {/* Hardcoding the colorbox witdh for now */}
                                            <div 
                                                className={`${color.hex} border rounded-xs w-[24px]`}
                                            >
                                            </div>
                                        </div>
                                    </Checkbox>
                                )
                            })}
                        </CheckboxGroup>
                    </AccordionItem>
                </Accordion>
            </div>

            {/* Product section */}
            <div className="border basis-4/5 p-5 rounded-lg">
                <p className="font-bold text-xl">Products</p>
                <ProductList products={products} change={change} />
            </div>
        </section>
    );
};

export default Browse;
