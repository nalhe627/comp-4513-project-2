import { useContext } from "react";
import { CartContext } from "./CartContext";
import Navigation from "./Navigation";

const Header = (props) => {
    const { cart } = useContext(CartContext);

    return (
        <header>
            <Navigation />
        </header>
    );
};

export default Header;
