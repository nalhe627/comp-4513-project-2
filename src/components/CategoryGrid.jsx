import { Card, CardBody, CardFooter } from "@heroui/card";
import { Image } from "@heroui/image";
import { useState, useEffect } from 'react';
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
import { Link } from "react-router-dom";

const CategoryGrid = ({ data, gender }) => {
    const [categories, setCategories] = useState([]);

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

    useEffect(() => {
        if (Array.isArray(data)) {
            const filtergender = data.filter((g) => g.gender === gender);
            const uniqueCategories = [...new Set(filtergender.map(c => c.category))];
            setCategories(uniqueCategories);
        }
    }, [data, gender]);

    return (
        <div className="gap-2 grid grid-cols-4 sm:grid-cols-4 grid-rows-3 m-12">
            {categories.map((category, index) => {
                const imgSrc = categoryImages[category];
                return (
                    
                    <Link key={index} to={`/browse?gender=${gender}&category=${category}`}>
                        <Card shadow="sm" fullWidth>
                                <CardBody className="overflow-visible p-0">
                                    <Image
                                    removeWrapper
                                    alt="Card background"
                                    className="w-full object-cover h-[140px]"
                                    src={imgSrc}
                                />
                                </CardBody>
                                <CardFooter className="text-small justify-between">
                                    <p className="text-black font-medium text-large" key={category}>{category}</p>
                                </CardFooter>
                        </Card>
                    </Link>
                );
        })}
        </div>
    );
}
export default CategoryGrid;