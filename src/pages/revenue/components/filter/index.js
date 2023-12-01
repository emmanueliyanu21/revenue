import React from "react";
import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  Box,
} from "@chakra-ui/react";
import FilterContent from "./FilterContent";

function Filter({ isOpen, onClose, onApplyFilters }) {
  const handleSubmit = (filterData) => {
    if (filterData.count) onClose();
    onApplyFilters(filterData);
  };

  return (
    <Box className="drawerWrapper">
      <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="sm">
        <DrawerOverlay />
        <DrawerContent borderRadius={"8px"} margin={"10px"}>
          <DrawerCloseButton />
          <DrawerHeader>Filter</DrawerHeader>

          <FilterContent handleFilter={handleSubmit} />
        </DrawerContent>
      </Drawer>
    </Box>
  );
}

export default Filter;
