import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@heroui/navbar";
import { Link } from "@heroui/link";
import { Button } from "@heroui/button";
import { Badge } from "@heroui/badge";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useContext, useState } from "react";
import { CartContext } from "./CartContext";
import { LoginContext } from "./LoginContext";

const Navigation = () => {
    const { cart } = useContext(CartContext);
    const { loggedIn, setLoggedIn } = useContext(LoginContext);
    const [currPage, setCurrPage] = useState("");

    /**
     * Changes the color of the link in the navigation bar for the current page.
     *
     * @param {string} route a string representing the route of the view
     * @returns the string `"foreground"` if it's the current page, or `undefined` if not
     */
    const setCurrLinkColor = (route) => currPage === route ? "foreground" : undefined;

    const handleLoginClick = () => {
        if (loggedIn) {
            setLoggedIn(false);
        }
        setCurrPage("/login");
    };

    return (
        <Navbar isBordered maxWidth="full">
            <NavbarContent justify="start">
                <NavbarBrand className="">Shop</NavbarBrand>
            </NavbarContent>
            <NavbarContent justify="center">
                <NavbarItem isActive={currPage === "/"}>
                    <Link
                        color={setCurrLinkColor("/")}
                        isBlock
                        href="/"
                        onPress={() => setCurrPage("/")}
                    >
                        Home
                    </Link>
                </NavbarItem>
                <NavbarItem isActive={currPage === "/women"}>
                    <Link
                        color={setCurrLinkColor("/women")}
                        isBlock
                        href="/women"
                        onPress={() => setCurrPage("/women")}
                    >
                        Women
                    </Link>
                </NavbarItem>
                <NavbarItem isActive={currPage === "/men"}>
                    <Link
                        color={setCurrLinkColor("/men")}
                        isBlock
                        href="/men"
                        onPress={() => setCurrPage("/men")}
                    >
                        Men
                    </Link>
                </NavbarItem>
                <NavbarItem isActive={currPage === "/browse"}>
                    <Link
                        color={setCurrLinkColor("/browse")}
                        isBlock
                        href="/browse"
                        onPress={() => setCurrPage("/browse")}
                    >
                        Browse
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link isBlock href="/about">About</Link>
                </NavbarItem>
                {loggedIn && (
                    <NavbarItem isActive={currPage === "/dashboard"}>
                        <Link 
                            color={setCurrLinkColor("/dashboard")} 
                            isBlock href="/dashboard" 
                            onPress={() => setCurrPage("/dashboard")}
                        >
                            Sales Dashboard
                        </Link>
                    </NavbarItem>
                )}
            </NavbarContent>
            <NavbarContent justify="end">
                <NavbarItem isActive={currPage === "/login"}>
                    <Link
                        color={setCurrLinkColor("/login")}
                        isBlock
                        href="/login"
                        onPress={handleLoginClick}
                    >
                        {loggedIn ? "Logout" : "Admin Login"}
                    </Link>
                </NavbarItem>
                {/* Using /cart for now for the shopping cart route */}
                <Button
                    as={Link}
                    variant="ghost"
                    href="/cart"
                    isIconOnly
                    className="border-transparent overflow-visible"
                >
                    <Badge
                        color="danger"
                        content={cart.length}
                        isInvisible={cart.length === 0}
                        shape="circle"
                        showOutline={false}
                        size="sm"
                    >
                        <FontAwesomeIcon icon={faCartShopping} size="lg" />
                    </Badge>
                </Button>
            </NavbarContent>
        </Navbar>
    );
};

export default Navigation;
