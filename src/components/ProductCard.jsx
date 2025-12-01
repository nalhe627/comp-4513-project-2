import { useContext } from "react";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { CartContext } from "./CartContext";

const ProductCard = ({ product, onProductClick }) => {
    const { cart, setCart } = useContext(CartContext);

    const addCart = (e) => {
        // Prevent the click from also navigating to the product view
        e.preventDefault();

        const existing = cart.find((c) => c.id === product.id);
        if (!existing) {
            const newCart = [...cart, { ...product }];
            setCart(newCart);
        }
    };

    return (
        <li className="rounded-md shadow-sm cursor-pointer">
            <Link href="/product" className="p-3 flex flex-col gap-3" onPress={onProductClick}>
                {product.image && <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded-md" />}
                <div className="flex flex-col">
                    <h3 className="font-medium truncate">{product.name}</h3>
                    <p className="text-sm text-gray-600">${product.price}</p>
                </div>
                {/* <div className="flex gap-2 mt-auto"> */}
                    {/* <button onClick={addCart} className="px-3 py-1 bg-blue-600 text-white rounded">Add to Cart</button> */}
                    <Button onClick={addCart} className="px-3 py-1 bg-blue-600 text-white rounded">Add to Cart</Button>
                {/* </div> */}
            </Link>
        </li>
    );
};

export default ProductCard;
