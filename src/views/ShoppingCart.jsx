import { useContext } from "react";
import { CartContext } from "../components/CartContext";

const ShoppingCart = (props) => {
    const { cart } = useContext(CartContext);
    
    const removeItem = () => {
    };

    const clearCart = () => {
    };

    return (
        <div>
            <ul>
                {cart.map((c) => (
                    <li>
                        {c.title}
                        <button onClick={removeItem}>-</button>
                    </li>
                ))}
            </ul>
            <button onClick={clearCart}>Remove</button>
        </div>
    );
};

export default ShoppingCart;
