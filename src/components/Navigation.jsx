import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@heroui/navbar";
import { Link } from "@heroui/link";
import { useContext } from "react";
import { CartContext } from "./CartContext";

const Navigation = (props) => {
    const { cart } = useContext(CartContext);
    
    return (
        <Navbar isBordered maxWidth="full">
            <NavbarContent justify="start">
                <NavbarBrand className="">Shop</NavbarBrand>
            </NavbarContent>
            <NavbarContent justify="center">
                <NavbarItem isActive>
                    <Link color="foreground" isBlock href="/">Home</Link>
                </NavbarItem>
                <NavbarItem>
                    <Link isBlock href="/women">Women</Link>
                </NavbarItem>
                <NavbarItem>
                    <Link isBlock href="/men">Men</Link>
                </NavbarItem>
                <NavbarItem>
                    <Link isBlock href="/browse">Browse</Link>
                </NavbarItem>
                <NavbarItem>
                    <Link isBlock href="/about">About</Link>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="end">
                <button>Cart {cart.length}</button>
            </NavbarContent>
        </Navbar>
    );
}

export default Navigation;