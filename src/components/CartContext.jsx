import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
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

    setCart([...cart, product]);
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  const clearCart = () => {
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
