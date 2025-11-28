import { useContext, useEffect, useState } from "react";
import { Accordion, AccordionItem } from "@heroui/accordion";
import { Checkbox, CheckboxGroup } from "@heroui/checkbox";
import { Radio, RadioGroup } from "@heroui/radio";
import { CartContext } from "../components/CartContext";

// Hardcode categories for now (we could possibly keep it)
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

const Browse = ({ gender, category }) => {
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

    return (
        <section className="flex border p-5 m-5 flex-grow rounded-lg gap-4">
            <div className="border basis-1/5 p-5 rounded-lg">
                <p className="font-bold text-xl mb-5">Filters</p>
                <Accordion
                    selectionMode="multiple"
                    itemClasses={{ title: "font-semibold" }}
                >
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
                    <AccordionItem key={3} title="Size">
                    </AccordionItem>
                    <AccordionItem key={4} title="Color">
                    </AccordionItem>
                </Accordion>
            </div>
            <div className="border basis-4/5 p-5 rounded-lg">
                <p className="font-bold text-xl">Products</p>
            </div>
        </section>
    );
};

export default Browse;
