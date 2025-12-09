import { Accordion, AccordionItem } from "@heroui/accordion";
import { Checkbox, CheckboxGroup } from "@heroui/checkbox";
import { Radio, RadioGroup } from "@heroui/radio";
import { CATEGORIES, SIZES, COLORS } from "../constants/filters";

const Filter = ({ filters, filterArr, setFilterArr, selectedGender, setSelectedGender, refilterProducts }) => {

    /**
     * Changes the gender property in the filter state.
     *
     * @param {string} selectedGender the gender to change to in the filter state.
     */
    const changeGender = (selectedGender) => {
        setSelectedGender(selectedGender);
        const currFilters = { ...filters, gender: selectedGender };

        const noGenderArr = filterArr.filter((f) => f.department !== "gender");

        setFilterArr([
            ...noGenderArr, 
            { department: "gender", value: selectedGender }
        ]);
        refilterProducts(currFilters);
    };

    /**
     * Changes the categories property in the filter state.
     * 
     * @param {string[]} selectedCategories the categories to change in the filter state.
     */
    const changeCategories = (selectedCategories) => {
        const currFilters = { ...filters, categories: selectedCategories };
        console.log(selectedCategories);
        const categoryArr = selectedCategories.map((category) => ({
            department: "categories", 
            value: category
        }));
        
        const noCategoryArr = filterArr.filter((f) => f.department !== "categories");

        setFilterArr([
            ...noCategoryArr,
            ...categoryArr
        ]);
        refilterProducts(currFilters);
    }

    /**
     * Changes the sizes property in the filter state.
     * 
     * @param {string[]} selectedSizes the sizes to change in the filter state.
     */
    const changeSizes = (selectedSizes) => {
        const currFilters = { ...filters, sizes: selectedSizes };
        
        const sizeArr = selectedSizes.map((size) => ({
            department: "sizes", 
            value: size
        }));
        
        const noSizeArr = filterArr.filter((f) => f.department !== "sizes");

        setFilterArr([
            ...noSizeArr,
            ...sizeArr
        ]);
        refilterProducts(currFilters);
    };

    /**
     * Changes the color property in the filter state.
     * 
     * @param {string[]} selectedColors the colors to change in the filter state.
     */
    const changeColors = (selectedColors) => {
        const currFilters = { ...filters, colors: selectedColors };

        const colorArr = selectedColors.map((color) => ({
            department: "colors", 
            value: color
        }));
        
        const noColorArr = filterArr.filter((f) => f.department !== "colors");

        setFilterArr([
            ...noColorArr,
            ...colorArr
        ]);
        refilterProducts(currFilters);
    };

    return (
        <div className="bg-gray-100 basis-1/5 p-5 rounded-lg shadow-sm">
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
                        value={selectedGender}
                        onValueChange={changeGender}
                        
                    >
                        <Radio value="mens">Men</Radio>
                        <Radio value="womens">Women</Radio>
                    </RadioGroup>
                </AccordionItem>

                {/* Category filter */}
                <AccordionItem key={2} title="Category">
                    <CheckboxGroup 
                        color="default" 
                        className="pb-3"
                        value={filters.categories} 
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
                        value={filters.sizes} 
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
                        value={filters.colors} 
                        onValueChange={changeColors}
                    >
                        {COLORS.map((color, i) => {
                            return (
                                <Checkbox key={i} value={color.name}>
                                    <div className="grid grid-cols-2 gap-6">
                                        <p>{color.name}</p>
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
    );
};

export default Filter;