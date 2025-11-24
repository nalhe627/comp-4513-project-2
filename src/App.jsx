import { createContext, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { CartContextProvider } from "./components/CartContext";
import Header from "./components/Header";
// import { Browser } from './components/Browser';
import CartDisplay from "./components/CartDisplay";
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
    <CartContextProvider>
      <Header />
      {/* <Browser/> */}
      <CartDisplay />
      {/* <Routes>
        <Route path="" element={} />
      </Routes> */}
    </CartContextProvider>
  );
};

export default App;
