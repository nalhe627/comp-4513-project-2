import { useContext } from "react";
import { CartContext } from "./CartContext";

const ProductCard = ({ product }) => {
    const { cart, setCart } = useContext(CartContext);

    const addCart = () => {
        const existing = cart.find((c) => c.id === product.id);
        if (!existing) {
            const newCart = [...cart, { ...product }];
            setCart(newCart);
        }
    };

    return (
        <div className="bg-white rounded-md shadow-sm p-3 flex flex-col gap-3">
            {product.image && <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded-md" />}
            <div className="flex flex-col">
                <h3 className="font-medium truncate">{product.name}</h3>
                <p className="text-sm text-gray-600">${product.price}</p>
            </div>
            <div className="flex gap-2 mt-auto">
                <button onClick={addCart} className="px-3 py-1 bg-blue-600 text-white rounded">Add to Cart</button>
            </div>
        </div>
    );
};

export default ProductCard;
