import { useContext } from "react";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { Image } from "@heroui/image";
import { CartContext } from "./CartContext";
import placeholderImg from '../assets/shirt.jpg';

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
        <li className="rounded-md shadow-sm cursor-pointer hover:shadow-md w-fit">
            <Link href="/product" className="p-5 px-10 flex flex-col gap-3" onPress={onProductClick}>
                <Image src={placeholderImg} width={200} />
                <div className="flex flex-col">
                    <h3 className="font-medium truncate text-black">{product.name}</h3>
                    <p className="text-sm text-gray-600">${product.price}</p>
                </div>
                <Button onClick={addCart} color="primary" variant="ghost" className="rounded">Add to Cart</Button>
            </Link>
        </li>
    );
};

export default ProductCard;
