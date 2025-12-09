import { useState, useContext, useEffect } from "react";
import { CartContext } from "../components/CartContext";
import GiantHeroSection from "../components/GiantHeroSection";
import FeaturedItemsHome from "../components/FeaturedItemsHome";
import home from "../assets/home.jpg";
const Home = ({products, change}) => {
    const { cart, setCart } = useContext(CartContext);

    return (
        <>
            <GiantHeroSection title="Welcome to Justin & Norris Store" image={home} />
            <FeaturedItemsHome products={products} change={change}/>
        </>
    );
}

export default Home;