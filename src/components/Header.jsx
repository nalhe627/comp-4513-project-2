import { useContext } from "react";
import { CartContext } from "./CartContext";

const Header = (props) => {
    const { cart } = useContext(CartContext);

    return (
        <header>
            <h1>Test</h1>
            <button>View Cart</button>
            <span classList="badge">{cart.length}</span>
        </header>
    );
};

export default Header;
