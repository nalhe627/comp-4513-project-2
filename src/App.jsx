import { createContext, useEffect, useState } from "react";
import { Routes, Route, useNavigate, useHref } from "react-router-dom";
import { HeroUIProvider } from "@heroui/system";
import { CartContextProvider } from "./components/CartContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ShoppingCart from "./views/ShoppingCart";
import Home from "./views/Home";
// import "./App.css";
import ProductFilters from "./components/ProductFilters";
import HeroSection from "./components/HeroSection";
import mensHero from "./assets/mens-hero.jpg";
import GetProducts from "./components/GetProducts";
import CategoryGrid from "./components/CategoryGrid";

const App = (props) => {
  const {products} = GetProducts();
  const navigate = useNavigate()
  const [filter, setFilter] = useState();
  const specifyFilter = (f) => { setFilter(f) };

  return (
    <HeroUIProvider navigate={navigate} useHref={useHref}>
      <CartContextProvider>
        <main className="flex flex-col justify-between min-h-screen">
          <Header />
          <HeroSection title="Welcome to HeroUI Store" image={mensHero} />
          <CategoryGrid data={products} />
          {/* <ShoppingCart /> */}
          <Footer />
        </main>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </CartContextProvider>
    </HeroUIProvider>
  );
};

export default App;
