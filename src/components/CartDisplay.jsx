import {useContext} from 'react';
import {CartContext} from  "./CartContext.jsx";
const CartDisplay = (props) => {
    const {cart} = useContext(CartContext);
    const removeItem = () => {

    }
    const clearCart = () => {

    }
    return (<div>
        <ul>
            {cart.map(c => <li>
                {c.title}
                <button onClick={removeItem}> - </button>
            </li>)}
        </ul>
        <button onClick={clearCart}> Remove </button>
    </div>)
}
export default CartDisplay;