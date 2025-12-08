import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartContextProvider = (props) => {
  const [cart, setCart] = useState([]);
  const addToCart = (product) => {
    setCart((prev) => {
      
      const existing = prev.find(p =>
        p.id === product.id &&
        p.selectedSize === product.selectedSize &&
        p.selectedColor?.name === product.selectedColor?.name
      );

      if (existing) {
        
        return prev.map((p) =>
          p === existing ? { ...p, quantity: p.quantity + product.quantity } : p);
      }

      
      return [...prev, product];
    });
  }

  const removeFromCart = (productId) => {
    setCart(remove => remove.filter(item => item.id !== productId));
  }
  const clearCart = () => {
    setCart([]);
  };
  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, setCart, clearCart }}>
      {props.children}
    </CartContext.Provider>
  );
};
