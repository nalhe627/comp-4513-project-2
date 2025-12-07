import ProductCard from "./ProductCard";

const ProductList = ({ products, changeProduct }) => {
    const handler = (index) => {
        changeProduct(products[index]);
        console.log(products[index]);
    };

    return (
        <ul className="grid grid-cols-1 justify-items-center sm:grid-cols-2 lg:grid-cols-3 gap-y-5 my-6 px-4 max-w-7xl mx-auto">
            {products.map((p, index) => (
                <ProductCard product={p} key={index} onProductClick={() => handler(index)} />
            ))}
        </ul>
    );
};

export default ProductList;