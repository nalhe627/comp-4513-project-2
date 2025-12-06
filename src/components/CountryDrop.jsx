import React from "react";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@heroui/react";

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
        <DropdownItem key="canada">Canada</DropdownItem>
        <DropdownItem key="us">United States</DropdownItem>
        <DropdownItem key="international">International</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};
export default CountryDrop;


