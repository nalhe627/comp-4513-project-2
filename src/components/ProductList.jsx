import ProductCard from "./ProductCard";

const ProductList = ({ products, change }) => {
    const handler = (ind) => {
        change(ind);
    };
    
    return (
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 my-6 px-4 max-w-7xl mx-auto">
            {products.map((p, index) => (
                <li key={index} onClick={() => handler(index)} className="cursor-pointer">
                    {/* Optional: use ProductCard to render each product; for now render name */}
                    <ProductCard product={p} />
                </li>
            ))}
        </ul>
    );
};

export default ProductList;