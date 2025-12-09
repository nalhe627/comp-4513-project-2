import { useState } from "react";
import { Chip } from "@heroui/chip";
import { Select, SelectItem } from "@heroui/select";

import ProductList from "../components/ProductList";
import Filter from "../components/Filter";

const Browse = ({ products, gender, categories, changeProduct }) => {
    const [loading, setLoading] = useState(true);

    // Default sort is by name
    const [sortType, setSortType] = useState("name");

    // Need to sort products by name first before rendering
    const [filteredProducts, setFilteredProducts] = useState(
        products.toSorted((a, b) => a.name < b.name ? -1 : 1)
    );

    // Not sure if filters should be an array or object (using object for now)
    const [filters, setFilters] = useState({ gender, categories });
    const [filterArr, setFilterArr] = useState([]);

    // Specfic state for gender in order to deselect the gender radio button
    const [selectedGender, setSelectedGender] = useState(gender);

    /**
     * Filters the products everytime a specific filter (e.g., gender) is changed.
     * 
     * @param {Object} currFilter Object representing the current filters to use 
     */
    const refilterProducts = (currFilters) => {
        setFilters(currFilters);

        let tempProducts = [...products];

        if (currFilters.gender) {
            tempProducts = tempProducts.filter((p) => p.gender === currFilters.gender);
            console.log("filtered gender");
        }

        if (currFilters.categories?.length > 0) {
            tempProducts = tempProducts.filter((p) => {
                for (const category of currFilters.categories) {
                    if (p.category.toLowerCase().includes(category.toLowerCase())) {
                        return true;
                    }
                }
            });
            console.log("filtered categories");
        }

        if (currFilters.sizes?.length > 0) {
            tempProducts = tempProducts.filter((p) => {
                for (const size of p.sizes) {
                    for (const selectedSize of currFilters.sizes) {
                        if (size === selectedSize) {
                            return true;
                        }
                    }
                }
            });
            console.log("filtered sizes");
        }

        if (currFilters.colors?.length > 0) {
            tempProducts = tempProducts.filter((p) => {
                for (const color of currFilters.colors) {
                    // Not sure if there are itesm with more than 1 color
                    if (p.color[0].name.toLowerCase().includes(color.toLowerCase())) {
                        return true;
                    }
                }
            });
            console.log("filtered colors");
        }

        tempProducts = sortProducts(tempProducts, sortType);
        setFilteredProducts(tempProducts);
    };

    /**
     * Removes the specific filter from the `filterArr`state.
     * Also refilters the products to be displayed to the user.
     * 
     * @param {Object} currFilter Object representing the filter to remove from `filterArr` state
     */
    const removeFilter = (currFilter) => {
        // Uncheck the radio box
        if (currFilter.value === "mens" || currFilter.value === "womens") {
            setSelectedGender(null);
        }
        setFilterArr(filterArr.filter((f) => f.value !== currFilter.value));

        const tempFilters = { ...filters };
        const departmentFilters = tempFilters[currFilter.department];

        if (Array.isArray(departmentFilters)) {
            const tempArr = departmentFilters.filter((f) => f !== currFilter.value);
            tempFilters[currFilter.department] = tempArr;
        } else {
            delete tempFilters[currFilter.department];
        }

        setFilters(tempFilters);
        refilterProducts(tempFilters);
    };

    /**
     * Clears all the current filters applied.
     */
    const removeAllFilters = () => {
        setFilterArr([]);
        setFilters({
            gender: undefined,
            categories: [],
            sizes: [],
            colors: [],
        });
        setSelectedGender(null);
        setFilteredProducts(sortProducts(products, sortType));
    }

    /**
     * Sorts the products based on the provided sortType.
     * 
     * Could be sorted by name, highest price, lowest price, or category.
     * 
     * @param {Object[]} currProducts the current products to sort
     * @param {string} newSortType string representing how to sort the products
     * @returns {Object[]} An array of products that have been sorted
     */
    const sortProducts = (currProducts, newSortType) => {
        switch (newSortType) {
            case "name":
                // Products are sorted alphabetically (A-Z)
                console.log("sorting by name");
                return currProducts.toSorted((a, b) => a.name < b.name ? -1 : 1);
            case "high price":
                console.log("sorting by high");
                return currProducts.toSorted((a, b) => b.price - a.price);
            case "low price":
                console.log("sorting by low");
                return currProducts.toSorted((a, b) => a.price - b.price);
            case "category":
                console.log("sorting by category");
                return currProducts.toSorted((a, b) => a.category < b.category ? -1 : 1);
        }
    }
    
    /**
     * Handles the logic for when the user changes the sort selection.
     * 
     * @param {Event} e the event that caused the change
     */
    const handleSortChange = (e) => {
        const newSortType = e.target.value;

        setSortType(newSortType);
        setFilteredProducts(sortProducts(filteredProducts, newSortType));
    }

    /**
     * Formats the text used in the `Chip` component for each filter.
     * 
     * Only formats the text for filters related to gender or size.
     * 
     * @param {string} filterText the string to format
     * @returns {string} A string that's been formatted appropriately
     */
    const formatFilterText = (filterText) => {
        switch (filterText) {
            case "XS":
                return "Extra Small";
            case "S":
                return "Small";
            case "M":
                return "Medium";
            case "L":
                return "Large";
            case "XL":
                return "Extra Large";
            case "mens":
                return "Men";
            case "womens":
                return "Women";
            // Don't format if not gender or size
            default:
                return filterText;
        }
    };

    return (
        <section className="flex p-5 m-5 items-start flex-grow rounded-lg gap-4">

            {/* Filter section */}
            {/* TODO: make the fitler a separate component */}
            <Filter 
                filters={filters} 
                filterArr={filterArr} 
                setFilterArr={setFilterArr} 
                selectedGender={selectedGender} 
                setSelectedGender={setSelectedGender} 
                refilterProducts={refilterProducts} 
            />

            {/* Product section */}
            {/* TODO: put into separate component */}
            <div className="basis-4/5 p-5 rounded-lg">
                <div className="flex items-center justify-between">
                    <div className="flex gap-8 items-center">
                        <p className="font-bold text-xl">Results ({filteredProducts.length})</p>
                    </div>
                    <Select 
                        className="max-w-3xs" 
                        label="Sort By" 
                        defaultSelectedKeys={["name"]} 
                        disallowEmptySelection
                        onChange={handleSortChange}
                    >
                        <SelectItem key="name">Product Name</SelectItem>
                        <SelectItem key="high price">Highest Price</SelectItem>
                        <SelectItem key="low price">Lowest Price</SelectItem>
                        <SelectItem key="category">Category</SelectItem>
                    </Select>
                </div>
                
                {/* Chips of applied filters */}
                <div className="flex flex-wrap gap-2 items-center pt-5">
                    {filterArr.length > 0 && (
                        <p 
                            onClick={removeAllFilters} 
                            className="underline px-2 cursor-pointer font-semibold underline-offset-3"
                        >
                            Clear All
                        </p>
                    )}
                    {filterArr.map((filter, i) => (
                        <Chip key={i} onClose={() => removeFilter(filter)}>
                            {formatFilterText(filter.value)}
                        </Chip>
                    ))}
                </div>
                {filteredProducts.length === 0 && (
                    <p className="text-center text-gray-500/80 text-3xl font-semibold my-10">
                        No products found
                    </p>
                )}
                <ProductList products={filteredProducts} changeProduct={changeProduct} />
            </div>
        </section>
    );
};

export default Browse;
