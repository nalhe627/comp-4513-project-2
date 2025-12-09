import { createContext, useState } from "react";
import { addToast } from "@heroui/toast";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {

  /**
   * Retrieves the cart from localStorage.
   * 
   * @returns {Object[]} an array of products in cart (or an empty array)
   */
  const retrieveCart = () => {
    if (localStorage.getItem("cart")) {
      return JSON.parse(localStorage.getItem("cart"));
    }
    return [];
  };

  const [cart, setCart] = useState(retrieveCart());
  
  const addToCart = (product) => {
    const existing = cart.find((p) =>
      p.id === product.id &&
      p.selectedSize === product.selectedSize &&
      p.selectedColor?.name === product.selectedColor?.name
    );

    if (existing) {
      return cart.map((p) =>
        p === existing ? { ...p, quantity: p.quantity + product.quantity } : p
      );
    }

    const newCart = [...cart, product];
    
    localStorage.setItem("cart", JSON.stringify(newCart));
    setCart(newCart);
    addToast({
      title: "Added Product to Cart",
      color: "success"
    })
  };

  const removeFromCart = (productId) => {
    const newCart = cart.filter((item) => item.id !== productId);

    localStorage.setItem("cart", JSON.stringify(newCart));
    setCart(newCart);
  };

  const clearCart = () => {
    localStorage.removeItem("cart");
    setCart([]);
  };
  
  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, setCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
