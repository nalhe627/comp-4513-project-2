import {useState, createContext} from 'react';
export const CartContext = createContext();
const CartContextProvider = (props) => {
    const [cart, setCart] = useState([]);
    return (
        <CartContextProvider value={{cart, setCart}}>
            {props.children}
        </CartContextProvider>
    )

}
export default CartContextProvider;
