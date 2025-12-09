import GiantHeroSection from "../components/GiantHeroSection";
import FeaturedItemsHome from "../components/FeaturedItemsHome";
import home from "../assets/home.jpg";

const Home = ({products, change}) => {
    return (
        <>
            <GiantHeroSection title="Welcome to Justin & Norris Store" image={home} />
            <FeaturedItemsHome products={products} change={change}/>
        </>
    );
}

export default Home;