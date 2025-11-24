import { useContext } from "react";
import { CartContext } from "./CartContext";

const ProductCard = (props) => {
    const { cart, setCart } = useContext(CartContext);

    const addCart = () => {
        let c = cart.find((c) => c.id === props.id);
        if (!c) {
            // TODO: code below is not finished, color is nested and need to be implemented as right now it assumes that it is not nested.
            const newCart = [...cart, {
                id: props.id,
                name: props.name,
                gender: props.gender,
                category: props.category,
                description: props.description,
                price: props.price,
                cost: props.cost,
                color: props.color,
            }];
            newCart.push[props.product];
            setCart(newCart);
        }
    };

    return (
        <div className="card">
            <button onClick={addCart}>Add to Cart</button>
        </div>
    );
};

export default ProductCard;
