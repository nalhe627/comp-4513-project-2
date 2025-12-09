import React from "react";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@heroui/react";

const ShippingDrop = ({ onChange }) => {
  const [selectedKeys, setSelectedKeys] = React.useState(new Set([]));

  const handleSelect = (keys) => {
    setSelectedKeys(keys);
    
    const value = Array.from(keys)[0];
    onChange(value);
    console.log("Selected shipping:", value);
  };

  return (
    <Dropdown>
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


