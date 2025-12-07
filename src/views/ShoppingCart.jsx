import { useContext, useState } from "react";
import { CartContext } from "../components/CartContext";
import {
    Table,
    TableHeader,
    TableBody,
    TableColumn,
    TableRow,
    TableCell
} from "@heroui/table";
import ShippingDrop from "../components/ShippingDrop";
import CountryDrop from "../components/CountryDrop";
import CartSummary from "../components/CartSummary";

const ShoppingCart = () => {
    const { cart, removeFromCart, clearCart } = useContext(CartContext);

    const [selectedCountry, setSelectedCountry] = useState(null);
    const [selectedShipping, setSelectedShipping] = useState(null);

    return (
        <div className="max-w-6xl mx-auto p-6">
            {/* Main Layout */}
            <div className="flex flex-col md:flex-row gap-8">
                
                {/* Left: Table + Dropdowns */}
                <div className="flex-1 space-y-6">
                    {/* Table */}
                    <div className="rounded-lg shadow-md p-4 bg-white">
                        <Table>
                            <TableHeader>
                                <TableColumn>Image</TableColumn>
                                <TableColumn>Items</TableColumn>
                                <TableColumn>Color</TableColumn>
                                <TableColumn>Size</TableColumn>
                                <TableColumn>Price</TableColumn>
                                <TableColumn>Quantity</TableColumn>
                                <TableColumn>Subtotal</TableColumn>
                                <TableColumn>Actions</TableColumn>
                            </TableHeader>

                            <TableBody emptyContent="Your cart is empty.">
                                {cart.map((c) => (
                                    <TableRow key={c.id}>
                                        <TableCell>
                                            <img
                                                src={c.image}
                                                alt={c.title}
                                                className="w-16 h-16 rounded-md border"
                                            />
                                        </TableCell>
                                        <TableCell>{c.name}</TableCell>
                                        <TableCell>{c.selectedColor?.name}</TableCell>
                                        <TableCell>{c.selectedSize}</TableCell>
                                        <TableCell>${c.price}</TableCell>
                                        <TableCell>{c.quantity}</TableCell>
                                        <TableCell>${(c.price * c.quantity).toFixed(2)}</TableCell>
                                        <TableCell>
                                            <button 
                                                className="text-red-500 hover:underline"
                                                onClick={() => removeFromCart(c.id)}
                                            >
                                                Remove
                                            </button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>

                    {/* Dropdowns */}
                    <div className="flex flex-col md:flex-row gap-4">
                        <ShippingDrop onChange={setSelectedShipping} />
                        <CountryDrop onChange={setSelectedCountry} />
                    </div>
                </div>

                {/* Right: Summary */}
                <div className="w-full md:w-80">
                    <CartSummary 
                        cart={cart} 
                        selectedCountry={selectedCountry} 
                        selectedShipping={selectedShipping}
                    />
                </div>

            </div>
        </div>
    );
};

export default ShoppingCart;
