import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartContextProvider = (props) => {
    const [cart, setCart] = useState([]);
    const addToCart = (product) => {
        setCart((prev) => {
    // check if same product with same size & color already exists
    const existing = prev.find(
      p =>
        p.id === product.id &&
        p.selectedSize === product.selectedSize &&
        p.selectedColor?.name === product.selectedColor?.name
    );

    if (existing) {
      // increase quantity instead of adding duplicate
      return prev.map((p) =>
        p === existing
          ? { ...p, quantity: p.quantity + product.quantity }
          : p
      );
    }

    // otherwise add new line item
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
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, setCart }}>
            {props.children}
        </CartContext.Provider>
    );
};
