
const CartSummary = ({ cart, selectedCountry, selectedShipping }) => {
  
  const merchandiseTotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  
  let tax = 0;
  if (selectedCountry === "canada") {
    tax = merchandiseTotal * 0.05;
  }

  
  let shippingCost = 0;

  if (selectedCountry && selectedShipping) {
    if (merchandiseTotal <= 500) {
      const rates = {
        Canada: { Standard: 10, Express: 25, Priority: 35 },
        "United States": { Standard: 15, Express: 25, Priority: 35 },
        International: { Standard: 20, Express: 30, Priority: 50 },
      };

      shippingCost = rates[selectedCountry][selectedShipping];
    }
  }

  
  const total = merchandiseTotal + tax + shippingCost;

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

      <button className="bg-blue-600 text-white w-full mt-4 py-2 rounded cursor-pointer">
        Checkout
      </button>
    </div>
  );
};

export default CartSummary;
