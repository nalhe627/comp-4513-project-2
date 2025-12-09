import { useContext } from "react";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { Image } from "@heroui/image";
import { CartContext } from "./CartContext";
import shirt from "../assets/shirt.jpg";
import bottoms from "../assets/bottoms.jpg";
import dresses from "../assets/dresses.jpg";
import outerwear from "../assets/outerwear.jpg";
import jumpsuits from "../assets/jumpsuits.jpg";
import sweaters from "../assets/sweaters.jpg";
import accessories from "../assets/accessories.jpg";
import loungewear from "../assets/loungewear.jpg";
import shoes from "../assets/shoes.jpg";
import intimates from "../assets/intimates.jpg";
import swimwear from "../assets/swimwear.jpg";

const ProductCard = ({ product, onProductClick }) => {
    const { addToCart } = useContext(CartContext);

    const handleCartClick = (e) => {
        // Prevent the click from also navigating to the product view
        e.preventDefault();

        addToCart({
            ...product,
            selectedSize: product.sizes[0],
            selectedColor: product.color[0],
            quantity: 1
        })
    };

    const handleProductClick = () => {
        onProductClick();
    };

    const getCategoryImage = (category) => {
            const categoryImages = {
                Tops: shirt,
                Bottoms: bottoms,
                Dresses: dresses,
                Outerwear: outerwear,
                Jumpsuits: jumpsuits,
                Sweaters: sweaters,
                Accessories: accessories,
                Loungewear: loungewear,
                Shoes: shoes,
                Intimates: intimates,
                Swimwear: swimwear,
            }
            return categoryImages[category];
        }

    return (
        <li className="rounded-md shadow-sm cursor-pointer hover:shadow-md w-fit">
            <Link 
                href="/product" 
                className="p-5 px-8 flex flex-col justify-between gap-3 h-full" 
                onPress={handleProductClick}
            >
                <div>
                    <Image src={getCategoryImage(product.category)} height={250} />
                    <Button 
                        onClick={handleCartClick} 
                        color="primary" 
                        variant="ghost"
                        className="z-10 absolute right-11 top-57 text-lg font-medium"
                        isIconOnly
                        size="sm"
                    >
                        +
                    </Button>

                </div>
                <div className="flex flex-col self-start">
                    <div 
                        className={`rounded-xs w-[20px] h-[20px] mb-2 ${
                            product.color[0].hex && "border border-black/30"}`}
                        style={{ backgroundColor: product.color[0].hex }}
                    >
                    </div>
                    <h3 className="font-medium truncate text-black">{product.name}</h3>
                    <p className="text-sm text-gray-600">${product.price}</p>
                </div>
            </Link>
        </li>
    );
};

export default ProductCard;
