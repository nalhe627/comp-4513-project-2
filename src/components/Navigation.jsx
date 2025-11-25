import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@heroui/navbar";
import { Link } from "@heroui/link";
// import { Link } from "react-router-dom";

const Navigation = (props) => {
    
    return (
        <Navbar isBordered>
            <NavbarBrand>Shop</NavbarBrand>
            <NavbarContent className="flex gap-4">
                <NavbarItem className="" isActive>
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
        </Navbar>
    );
}

export default Navigation;