import { useContext, useState } from "react";
import { CartContext } from "../components/CartContext";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@heroui/react";

const ShippingDrop = ({ onChange }) => {
  const { cart } = useContext(CartContext);
  const [selectedKeys, setSelectedKeys] = useState(new Set([]));

  const handleSelect = (keys) => {
    setSelectedKeys(keys);
    
    const value = Array.from(keys)[0];
    onChange(value);
    console.log("Selected shipping:", value);
  };

  return (
    <Dropdown isDisabled={cart.length === 0}>
      <DropdownTrigger>
        <Button variant="bordered">
          {Array.from(selectedKeys)[0] || "Select Shipping"}
        </Button>
      </DropdownTrigger>

      <DropdownMenu
        selectionMode="single"
        selectedKeys={selectedKeys}
        onSelectionChange={handleSelect}
      >
        <DropdownItem key="Standard">Standard</DropdownItem>
        <DropdownItem key="Express">Express</DropdownItem>
        <DropdownItem key="Priority">Priority</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default ShippingDrop;


