import { useContext, useState } from "react";
import { CartContext } from "../components/CartContext";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@heroui/react";

const CountryDrop = ({onChange}) => {
  const { cart } = useContext(CartContext);
  const [selectedKeys, setSelectedKeys] = useState(new Set([]));

  const handleSelect = (keys) => {
    setSelectedKeys(keys);
    const value = Array.from(keys)[0];
    onChange(value);
  };

  return (
    <Dropdown isDisabled={cart.length === 0}>
      <DropdownTrigger>
        <Button variant="bordered">
          {Array.from(selectedKeys)[0] || "Select Country"}
        </Button>
      </DropdownTrigger>

      <DropdownMenu
        selectionMode="single"
        selectedKeys={selectedKeys}
        onSelectionChange={handleSelect}
      >
        <DropdownItem key="Canada">Canada</DropdownItem>
        <DropdownItem key="United States">United States</DropdownItem>
        <DropdownItem key="International">International</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};
export default CountryDrop;


