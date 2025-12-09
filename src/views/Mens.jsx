import HeroSection from "../components/HeroSection";
import MensHero from "../assets/mens-hero.jpg";
import CategoryGrid from "../components/CategoryGrid";

const Mens = ({products}) => {
    return (
        <>
            <HeroSection title="Men's" image={MensHero} />
            <CategoryGrid data={products} gender={"mens"}/>
        </>
    );
}

export default Mens;