import { createContext, useEffect, useState } from "react";
import { Routes, Route, useNavigate, useHref } from "react-router-dom";
import { HeroUIProvider } from "@heroui/system";
import { CartContextProvider } from "./components/CartContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ShoppingCart from "./views/ShoppingCart";
import Home from "./views/Home";
import Browse from "./views/Browse";
// import "./App.css";

const App = (props) => {
  const navigate = useNavigate()
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(
      "https://gist.githubusercontent.com/rconnolly/d37a491b50203d66d043c26f33dbd798/raw/37b5b68c527ddbe824eaed12073d266d5455432a/clothing-compact.json",
    )
      .then((res) => {
        if (!res.ok) throw new Error("Fetch Failed");
        else return res.json();
      })
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  return (
    <HeroUIProvider navigate={navigate} useHref={useHref}>
      <CartContextProvider>
        <main className="flex flex-col justify-between min-h-screen">
          <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/browse" element={<Browse />} />
            </Routes>
          {/* <ShoppingCart /> */}
          <Footer />
        </main>
      </CartContextProvider>
    </HeroUIProvider>
  );
};

export default App;
