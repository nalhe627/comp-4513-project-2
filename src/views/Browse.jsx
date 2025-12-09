import { useEffect, useState } from "react";

import Filter from "../components/Filter";
import ProductResults from '../components/ProductResults';
import { sortProducts } from "../utils/browse-page";
import { useSearchParams } from "react-router";

const Browse = ({ products, changeProduct }) => {
    const [searchParams] = useSearchParams();

    // Default sort is by name
    const [sortType, setSortType] = useState("name");

    // Need to sort products by name first before rendering
    const [filteredProducts, setFilteredProducts] = useState(
        products.toSorted((a, b) => a.name < b.name ? -1 : 1)
    );

    // Not sure if filters should be an array or object (using object for now)
    const [filters, setFilters] = useState({ 
        gender: searchParams.get("gender"), 
        categories: searchParams.get("category") || []
    });
    const [filterArr, setFilterArr] = useState([]);

    // Specfic state for gender in order to deselect the gender radio button
    const [selectedGender, setSelectedGender] = useState(searchParams.get("gender"));

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
    };
    
    /**
     * Handles the logic for when the user changes the sort selection.
     * 
     * @param {Event} e the event that caused the change
     */
    const handleSortChange = (e) => {
        const newSortType = e.target.value;

        setSortType(newSortType);
        setFilteredProducts(sortProducts(filteredProducts, newSortType));
    };

    return (
        <section className="flex p-5 m-5 items-start flex-grow rounded-lg gap-4">

            {/* Filter section */}
            <Filter 
                filters={filters} 
                filterArr={filterArr} 
                setFilterArr={setFilterArr} 
                selectedGender={selectedGender} 
                setSelectedGender={setSelectedGender} 
                refilterProducts={refilterProducts} 
            />

            {/* Product section */}
            <ProductResults 
                filterArr={filterArr} 
                handleSortChange={handleSortChange} 
                filteredProducts={filteredProducts} 
                removeFilter={removeFilter} 
                removeAllFilters={removeAllFilters} 
                changeProduct={changeProduct} 
            />
        </section>
    );
};

export default Browse;
