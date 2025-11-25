import { useContext } from "react";
import { CartContext } from "./CartContext";
import Navigation from "./Navigation";

const Header = (props) => {
    const { cart } = useContext(CartContext);

    return (
        <header className="flex">
            <Navigation />
            <button>Cart {cart.length}</button>
            {/* <span classList="badge">{cart.length}</span> */}
        </header>
    );
};

export default Header;
