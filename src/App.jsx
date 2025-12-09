import { useEffect, useState } from "react";
import { Routes, Route, useNavigate, useHref } from "react-router-dom";
import { HeroUIProvider } from "@heroui/system";
import { CartContextProvider } from "./components/CartContext";
import { LoginContextProvider } from "./components/LoginContext";
import { ToastProvider } from "@heroui/toast";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ShoppingCart from "./views/ShoppingCart";
import Home from "./views/Home";
import Browse from "./views/Browse";
import Login from "./views/Login";
import SingleProduct from "./views/SingleProduct";
import Dashboard from "./views/Dashboard";
import Mens from "./views/Mens";
import Womens from "./views/Womens";

const App = () => {
  const navigate = useNavigate()
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [products, setProducts] = useState([]);

  const changeProduct = (product) => {
    setSelectedProduct(product);
  }

  useEffect(() => {
    fetch("https://gist.githubusercontent.com/rconnolly/d37a491b50203d66d043c26f33dbd798/raw/37b5b68c527ddbe824eaed12073d266d5455432a/clothing-compact.json")
      .then(res => res.json())
      .then(data => {
        const editedData = data.map((p) => {
          const temp = { 
            ...p,
            // Calculate the sales beforehand to make our lives easier
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
      <ToastProvider />
      <LoginContextProvider>
        <CartContextProvider>
          <main className="flex flex-col justify-between min-h-screen">
            <Header />
              <Routes>
                <Route path="/" element={<Home products={products} change={changeProduct}/>} />
                <Route path="/browse" element={<Browse products={products} changeProduct={changeProduct} />} />
                <Route path="/product" element={<SingleProduct product={selectedProduct} products={products} change={changeProduct} />} />
                <Route path="/men" element={<Mens products={products}/>} />
                <Route path="/women" element={<Womens products={products}/>} />
                <Route path="/dashboard" element={<Dashboard products={products} changeProduct={changeProduct} />} />
                <Route path="/login" element={<Login />} />
                <Route path="/cart" element={<ShoppingCart />} />
              </Routes>
            <Footer />
          </main>
        </CartContextProvider>
      </LoginContextProvider>
    </HeroUIProvider>
  );
};

export default App;
