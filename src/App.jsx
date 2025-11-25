import { createContext, useEffect, useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { CartContextProvider } from "./components/CartContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
// import { Browser } from './components/Browser';
import ShoppingCart from "./views/ShoppingCart";
// import "./App.css";



const App = (props) => {
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
    <BrowserRouter>
      <CartContextProvider products={products} >
        <Route path="/home">{<Home />}</Route>
        <Route path="/women">{<Women />}</Route>
        <Route path="/men">{<Men />}</Route>
        <Route path="/browse">{<Browse />}</Route>
        <Route path="/about">{<About />}</Route>
        <Route path="/login">{<Login />}</Route>
        <Route path="/cart">{<Cart />}</Route>
      </CartContextProvider>
    </BrowserRouter>
  );
};

export default App;
