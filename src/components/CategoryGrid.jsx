import { Card, CardHeader, CardBody, CardFooter } from "@heroui/card";
import { Image } from "@heroui/image";
import { useState, useEffect, use } from 'react';
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
        const filtergender = data.filter((item) => item.gender === gender);
        const uniqueCategories = [...new Set(filtergender.map(item => item.category))];
        setCategories(uniqueCategories);
    }, [data, gender]);

    return (
        <div className="gap-2 grid grid-cols-4 sm:grid-cols-4 grid-rows-3 m-12">
            {categories.map((category, index) => {
                const imgSrc = categoryImages[category];
                return (
                <Card key={index} isPressable shadow="sm">
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
                );
        })}
        </div>
    );
}
export default CategoryGrid;