import { Chip } from "@heroui/chip";
import { Select, SelectItem } from "@heroui/select";

import ProductList from "../components/ProductList";
import { formatFilterText } from "../utils/browse-page";

const ProductResults = ({ filteredProducts, filterArr, removeFilter, removeAllFilters, changeProduct, handleSortChange }) => {

    return (
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
    );
};

export default ProductResults;