import { useContext } from "react";
import { CartContext } from "../components/CartContext";
import { addToast } from "@heroui/toast";
import { Button } from "@heroui/button";

const CartSummary = ({ selectedCountry, selectedShipping }) => {
  const { cart, clearCart } = useContext(CartContext);
  
  const merchandiseTotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  
  let shippingCost = 0;

  if (selectedCountry && selectedShipping) {
    if (merchandiseTotal <= 500) {
      const rates = {
        Canada: { Standard: 10, Express: 25, Priority: 35 },
        "United States": { Standard: 15, Express: 25, Priority: 50 },
        International: { Standard: 20, Express: 30, Priority: 50 },
      };

      shippingCost = rates[selectedCountry][selectedShipping];
    }
  }

  let total = merchandiseTotal + shippingCost;

  let tax = 0;
  if (selectedCountry === "Canada") {
    tax = total * 0.05;
    total += tax;
  }

  /**
   * Handles when the user clicks the checkout button.
   */
  const handleCheckout = () => {
    addToast({
      title: "Successfully Checked Out",
      color: "success",
    })
    clearCart();
  }

  return (
    <div className="border p-4 w-64 rounded-md shadow-md mt-4 bg-white">
      <h3 className="font-bold mb-3 text-lg">Summary</h3>

      <div className="flex justify-between mb-1">
        <span>Merchandise</span>
        <span>${merchandiseTotal.toFixed(2)}</span>
      </div>

      <div className="flex justify-between mb-1">
        <span>Shipping</span>
        <span>${shippingCost.toFixed(2)}</span>
      </div>

      <div className="flex justify-between mb-1">
        <span>Tax</span>
        <span>${tax.toFixed(2)}</span>
      </div>

      <hr className="my-2" />

      <div className="flex justify-between font-bold text-xl">
        <span>Total</span>
        <span>${total.toFixed(2)}</span>
      </div>

      <Button 
        onPress={handleCheckout}
        className="mt-5"
        color="primary"
        fullWidth
        isDisabled={cart.length === 0}
      >
        Checkout
      </Button>
    </div>
  );
};

export default CartSummary;
