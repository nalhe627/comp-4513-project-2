import womensHero from "../assets/womens.jpeg";
import HeroSection from "../components/HeroSection";
import CategoryGrid from "../components/CategoryGrid";

const Womens = ({products}) => {
    return (
        <>
            <HeroSection title="Women's" image={womensHero} />
            <CategoryGrid data={products} gender={"womens"}/>
        </>
    );
}

export default Womens;