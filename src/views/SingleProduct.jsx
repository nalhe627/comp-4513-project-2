import { useContext } from "react";
import { CartContext } from "../components/CartContext";

const SingleProduct = ({ product }) => {
    const { cart, setCart } = useContext(CartContext);

    if (!product) return null;

    return (
        <div className="max-w-3xl mx-auto my-6 p-4 bg-white rounded-md shadow-sm">
            <h2 className="text-2xl font-semibold mb-2">{product.name}</h2>
            <p className="text-xl text-gray-700 mb-2">Price: ${product.price}</p>
            <p className="text-gray-600">{product.description}</p>
        </div>
    );
};

export default SingleProduct;