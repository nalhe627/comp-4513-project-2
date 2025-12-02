import { useContext } from "react";
import { CartContext } from "../components/CartContext";
import shirt from "../assets/shirt.jpg";
import AdminDrawer from "../components/AdminDrawer";
const SingleProduct = ({ product }) => {
    const { cart, setCart } = useContext(CartContext);
    if (!product) return null;

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto my-6 p-4 bg-white rounded-md shadow-sm">
            <div>
                <div className="flex justify-center w-full h-96 bg-gray-200 rounded-lg flex items-center">
                    <img src={shirt} />
                </div>
                <div className="grid grid-cols-2 gap-4 mt-4">
                    <div className="h-32 bg-gray-200 rounded flex items-center justify-center">
                        Small Image
                    </div>
                    <div className="h-32 bg-gray-200 rounded flex items-center justify-center">
                        Small Image
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
                <input type="number" className="border p-2 w-20 ml-2 mb-4 rounded"/>

                <div className="flex gap-2 mb-4">
                    {product.sizes.map((s, index) => {
                        return (
                        <button key={index} className="border px-4 py-2 rounded mr-2 cursor-pointer">{s}</button>
                        );
                    })}
                </div>
                <div className="flex gap-2 mb-6">
                    {product.color.map((c, index) => {
                        return (
                            <div key={index} className="flex items-center gap-2 ">
                                <button style={{backgroundColor: c.hex}} className="w-8 h-8 rounded cursor-pointer border" />
                                <span className="text-sm text-gray-700">{c.name}</span>
                                
                            </div>
                        )
                    })}
                </div>
                <div className="flex gap-2 mb-1">
                    <button className="bg-blue-600 text-white px-6 py-2 rounded mb-3 w-full cursor-pointer">Add To Cart</button>
                </div>
                <div className="flex gap-2 mb-6">
                    <AdminDrawer product={product} />
                </div>
            </div>
            
        </div>
    );
};

export default SingleProduct;