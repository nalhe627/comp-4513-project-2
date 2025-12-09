import { Card, CardBody, CardFooter } from "@heroui/card";
import { Image } from "@heroui/image";
const FeaturedItems = ({ products, change, image }) => {
    const handler = (product) => {
        change(product);
    };
    return (
        <div className="mt-12 mb-10 px-4 col-span-full">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Similar Items</h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                {products.map((product, index) => (
                    <div
                        key={index}
                        onClick={() => handler(product)}
                        className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow cursor-pointer overflow-hidden border border-gray-200"
                    >
                        <div className="w-full h-48 bg-gray-100 flex items-center justify-center overflow-hidden">
                            <img
                                alt={product.name}
                                className="w-full h-full object-contain p-3"
                                src={image()}
                            />
                        </div>
                        <div className="p-4">
                            <p className="text-gray-900 font-semibold text-sm line-clamp-2 mb-2">
                                {product.name}
                            </p>
                            <p className="text-blue-600 font-bold">${product.price.toFixed(2)}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FeaturedItems;