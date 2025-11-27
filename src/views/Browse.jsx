import { useState, useContext, useEffect } from "react";
import { CartContext } from "../components/CartContext";

const Browse = ({ gender, category }) => {
    const { cart, setCart } = useContext(CartContext);
    const { loading, setLoading } = useState(true);

    // Not sure if filters should be an array or object (using object for now)
    const { filters, setFilters } = useState({gender, category});

    return (
        <section className="flex border p-5 m-5 flex-grow rounded-lg gap-4">
            <div className="border basis-1/5 p-5 rounded-lg">Filters</div>
            <div className="border basis-4/5 p-5 rounded-lg">Products</div>
        </section>
    );
}

export default Browse;