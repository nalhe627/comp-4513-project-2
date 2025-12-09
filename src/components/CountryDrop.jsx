import React from "react";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@heroui/react";

const CountryDrop = ({onChange}) => {
  const [selectedKeys, setSelectedKeys] = React.useState(new Set([]));

  const handleSelect = (keys) => {
    setSelectedKeys(keys);
    const value = Array.from(keys)[0];
    onChange(value);
  };

  return (
    <Dropdown>
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


