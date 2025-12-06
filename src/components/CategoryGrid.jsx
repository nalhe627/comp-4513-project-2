import { Card, CardHeader, CardBody, CardFooter } from "@heroui/card";
import { Image } from "@heroui/image";
import { useState, useEffect, use } from 'react';


const CategoryGrid = ({ data, gender }) => {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    useEffect(() => {
        const filtergender = data.filter((item) => item.gender === gender);
        const uniqueCategories = [...new Set(filtergender.map(item => item.category))];
        setCategories(uniqueCategories);
    }, [data, gender]);
    if (loading) { return <p>Loading categories...</p>; }
    if (error) { return <p>Error loading categories: {error}</p>; }

    return (
        <div className="gap-2 grid grid-cols-4 sm:grid-cols-4 grid-rows-3 m-12">
            {categories.map((category, index) => (
                
                <Card key={index} isPressable shadow="sm">
                    <CardBody className="overflow-visible p-0">
                        <Image
                        removeWrapper
                        alt="Card background"
                        className="w-full object-cover h-[140px]"
                        src="https://heroui.com/images/card-example-4.jpeg"
                    />
                    </CardBody>
                    <CardFooter className="text-small justify-between">

                        <p className="text-black font-medium text-large" key={category}>{category}</p>

                    </CardFooter>             
                </Card>
            ))}
        </div>
    );
}
export default CategoryGrid;