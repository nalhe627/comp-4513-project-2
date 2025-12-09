import { useEffect, useState } from "react";
import { Routes, Route, useNavigate, useHref } from "react-router-dom";
import { HeroUIProvider } from "@heroui/system";
import { CartContextProvider } from "./components/CartContext";
import { LoginContextProvider } from "./components/LoginContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ShoppingCart from "./views/ShoppingCart";
import Home from "./views/Home";
import Browse from "./views/Browse";
import Login from "./views/Login";
import ProductFilters from "./components/ProductFilters";
import HeroSection from "./components/HeroSection";
import mensHero from "./assets/mens-hero.jpg";
import GetProducts from "./components/GetProducts";
import CategoryGrid from "./components/CategoryGrid";
import ProductList from "./components/ProductList";
import SingleProduct from "./views/SingleProduct";
import Dashboard from "./views/Dashboard";

const App = () => {
  // const { products } = GetProducts();
  const navigate = useNavigate()
  const [filter, setFilter] = useState();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const specifyFilter = (f) => { setFilter(f) };
  const [products, setProducts] = useState([]);

  const changeProduct = (product) => {
    // setSelectedProduct(index);
    setSelectedProduct(product);
  }
  const getIndex = () => {
    return selectedProduct;
  }

  useEffect(() => {
    fetch("https://gist.githubusercontent.com/rconnolly/d37a491b50203d66d043c26f33dbd798/raw/37b5b68c527ddbe824eaed12073d266d5455432a/clothing-compact.json")
      .then(res => res.json())
      .then(data => {
        const editedData = data.map((p) => {
          const temp = { 
            ...p,
            domesticGross: p.sales.domestic * p.price,
            internationalGross: p.sales.international * p.price,
            totalGross: p.sales.total * p.price,
            domesticCost: p.sales.domestic * p.cost,
            internationalCost: p.sales.international * p.cost,
            totalCost: p.sales.total * p.cost,
          }

          temp.domesticProfit = temp.domesticGross - temp.domesticCost;
          temp.internationalProfit = temp.internationalGross - temp.internationalCost;
          temp.totalProfit = temp.totalGross - temp.totalCost;

          return temp;
        })
        setProducts(editedData);
      })
      .catch((err) => console.error("Error fetching data: ", err));
  }, []);
  
  
  return (
    <HeroUIProvider navigate={navigate} useHref={useHref}>
      <LoginContextProvider>
        <CartContextProvider>
          <main className="flex flex-col justify-between min-h-screen">
            <Header />
            {/* <HeroSection title="Welcome to Justin & Norris Store" image={mensHero} /> */}
            {/* <CategoryGrid data={products} /> */}
            {/* <ProductList products={products} change={changeProduct} /> */}
            {/* {selectedProduct !== null && (
              <SingleProduct product={products[selectedProduct]} />
            )} */}
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/browse" element={<Browse products={products} changeProduct={changeProduct} />} />
                <Route path="/product" element={<SingleProduct product={selectedProduct} />} />
                <Route path="/dashboard" element={<Dashboard products={products} changeProduct={changeProduct} />} />
                <Route path="/login" element={<Login />} />
              </Routes>
            {/* <ShoppingCart /> */}
            <Footer />
          </main>
        </CartContextProvider>
      </LoginContextProvider>
    </HeroUIProvider>
  );
};

export default App;
