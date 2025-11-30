import { Card, CardHeader, CardBody, CardFooter } from "@heroui/card";
import { Image } from "@heroui/image";
import { useState, useEffect, use } from 'react';
const CategoryGrid = ({ data }) => {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    useEffect(() => {
        const uniqueCategories = [...new Set(data.map(item => item.category))];
        setCategories(uniqueCategories);
    }, [data]);
    if (loading) { return <p>Loading categories...</p>; }
    if (error) { return <p>Error loading categories: {error}</p>; }

    return (
        <div className="gap-2 grid grid-cols-4 sm:grid-cols-4 grid-rows-3 m-12">
            {categories.map((category, index) => (
                <Card isPressable shadow="sm">
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
                    {/* <CardHeader className="absolute z-10 top-1 flex-col items-start!">
                        <p className="text-tiny text-white/60 uppercase font-bold">What to watch</p>

                        <h4 className="text-white font-medium text-large" key={category}>{category}</h4>

                    </CardHeader> */}
                    {/* <Image
                        removeWrapper
                        alt="Card background"
                        className="z-0 w-full h-full object-cover"
                        src="https://heroui.com/images/card-example-4.jpeg"
                    /> */}
                </Card>
            ))}
            {/* <GetCategories data={data} /> */}
        </div>
    );
}
export default CategoryGrid;