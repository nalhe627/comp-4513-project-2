  /**
 * Sorts the products based on the provided sortType.
 * 
 * Could be sorted by name, highest price, lowest price, or category.
 * 
 * @param {Object[]} currProducts the current products to sort
 * @param {string} newSortType string representing how to sort the products
 * @returns {Object[]} An array of products that have been sorted
 */
export const sortProducts = (currProducts, newSortType) => {
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
};

  /**
 * Formats the text used in the `Chip` component for each filter.
 * 
 * Only formats the text for filters related to gender or size.
 * 
 * @param {string} filterText the string to format
 * @returns {string} A string that's been formatted appropriately
 */
export const formatFilterText = (filterText) => {
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