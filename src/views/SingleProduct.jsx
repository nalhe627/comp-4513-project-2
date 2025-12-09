import { useContext, useState } from "react";
import { CartContext } from "../components/CartContext";
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
import AdminDrawer from "../components/AdminDrawer";
import FeaturedItems from "../components/FeaturedItems";
import { Breadcrumbs, BreadcrumbItem } from "@heroui/react";
const SingleProduct = ({ product, products, change }) => {
    const { addToCart } = useContext(CartContext);

    if (!product) return null;

    const similarItems = products.map((p, i) => ({ ...p, originalIndex: i })).filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);
    const matchCategory = () => {
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
        return categoryImages[product.category];
    }

    const [selectedSize, setSelectedSize] = useState(null);
    const [selectedColor, setSelectedColor] = useState(null);
    const [quantity, setQuantity] = useState(1);

    if (!product) return null;
    const editProduct = () => {
        if (!selectedSize || !selectedColor) {
            alert("Please select a color and size.");
            return;
        }

        addToCart({
            ...product,
            selectedSize,
            selectedColor,
            quantity,
        });
    }
    return (
        <div className="max-w-4xl mx-auto p-4">
            {/* Breadcrumbs */}
            <div className="mb-6">
                <Breadcrumbs>
                    <BreadcrumbItem>Home</BreadcrumbItem>
                    <BreadcrumbItem>Gender</BreadcrumbItem>
                    <BreadcrumbItem>{product.category}</BreadcrumbItem>
                    <BreadcrumbItem>{product.name}</BreadcrumbItem>
                </Breadcrumbs>
            </div>

            {/* Product Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white rounded-md shadow-sm p-6">
                <div>
                    <div className="flex justify-center w-full h-96 bg-gray-200 rounded-lg flex items-center overflow-hidden">
                        <img src={matchCategory()} alt={product.category} />
                    </div>
                    <div className="grid grid-cols-2 gap-4 mt-4">
                        <div className="h-32 bg-gray-200 rounded flex items-center justify-center overflow-hidden">
                            <img src={matchCategory()} alt={product.category} />
                        </div>
                        <div className="h-32 bg-gray-200 rounded flex items-center justify-center overflow-hidden">
                            <img src={matchCategory()} alt={product.category} />
                        </div>
                    </div>
                </div>
                <div>
                    <h2 className="text-2xl font-semibold mb-2">{product.name}</h2>
                    <p className="text-xl text-gray-700 mb-2">Price: ${product.price}</p>
                    <p className="text-gray-600">{product.description}</p>

                    <p className="text-gray-1100 font-medium mb-4 mt-3">Material: {product.material}</p>
                    {/* <p className="text-gray-700 mb-4">{product.material}</p> */}

                    <label>Quantity</label>
                    <input type="number" min="1" value={quantity} onChange={(e) => setQuantity(parseInt(e.target.value))} className="border p-2 w-20 ml-2 mb-4 rounded" />

                    <div className="flex gap-2 mb-4">
                        {product.sizes.map((s, index) => {
                            const active = s === selectedSize;
                            return (
                                <button key={index} onClick={() => setSelectedSize(s)} className={` px-4 py-2 rounded border ${active ? "bg-blue-600 text-white border-blue-600" : "bg-white text-gray-800"}`}>{s}</button>
                            );
                        })}
                    </div>
                    <div className="flex gap-2 mb-6">
                        {product.color.map((c, index) => {
                            const active = selectedColor?.name === c.name;
                            return (
                                <div key={index} className="flex items-center gap-2 ">
                                    <button style={{ backgroundColor: c.hex }} onClick={() => setSelectedColor(c)} className="w-8 h-8 rounded cursor-pointer border" />
                                    <span className={active ? "font-semibold text-blue-600" : "text-gray-700"}>{c.name}</span>

                                </div>
                            )
                        })}
                    </div>
                    <div className="flex gap-2 mb-1">
                        <button onClick={editProduct} className="bg-blue-600 text-white px-6 py-2 rounded mb-3 w-full cursor-pointer">Add To Cart</button>
                    </div>

                    <div className="flex gap-2 mb-6">
                        <AdminDrawer product={product} />
                    </div>
                </div>
            </div>

            {/* Similar Items */}
            <FeaturedItems products={similarItems} change={change} image={matchCategory} />
        </div>
    );
};

export default SingleProduct;