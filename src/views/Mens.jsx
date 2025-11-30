import { useState, useContext, useEffect } from "react";
import { CartContext } from "../components/CartContext";
import HeroSection from "../components/HeroSection";
import MensHero from "../assets/mens-hero.jpg";

const Mens = ({}) => {
    const { cart, setCart } = useContext(CartContext);

    return (
        <HeroSection title="Men's" image={MensHero} />
    );
}

export default Mens;