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

const FeaturedItemsHome = ({ products, change }) => {
    const handler = (product) => {
        change(product);
    };
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
    const featured = products.map((p, i) => ({ ...p, originalIndex: i })).filter(p => p["sales"]["total"] >= 500).slice(0, 4);

    return (
        <section className="relative w-full">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 my-6">
                <div>
                    {featured.map((product, index) => {
                        const imgSrc = categoryImages[product.category]
                        return (
                            <div 
                                key={index}
                                onClick={() => handler(product)}
                                className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow cursor-pointer overflow-hidden border border-gray-200 m-4 inline-block w-60"
                            >
                                <div className="w-full h-48 bg-gray-100 flex items-center justify-center overflow-hidden">
                                    <img
                                        alt={product.name}
                                        className="w-full h-full object-contain p-3"
                                        src={imgSrc}
                                    />
                                </div>
                                <div className="p-4">
                                    <p className="text-gray-900 font-semibold text-sm line-clamp-2 mb-2">
                                        {product.name}
                                    </p>
                                    <p className="text-blue-600 font-bold">${product.price.toFixed(2)}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    );
}
export default FeaturedItemsHome;