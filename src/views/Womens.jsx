import { useState, useContext, useEffect } from "react";
import { CartContext } from "../components/CartContext";
import womensHero from "../assets/womens.jpeg";
const Womens = (products) => {
    const { cart, setCart } = useContext(CartContext);

    return (
        <>
            <HeroSection title="Men's" image={womensHero} />
            <CategoryGrid data={products} gender={"womens"}/>
        </>
    );
}

export default Womens;