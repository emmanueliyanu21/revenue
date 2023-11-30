import React, { useReducer } from "react";
import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  Box,
  DrawerFooter,
  Button,
  Flex,
} from "@chakra-ui/react";
import FilterContent from "./FilterContent";
import {
  initialState,
  filterReducer,
} from "../../../../../store/reducers/filter.reducer";

function Filter({ isOpen, onClose, btnRef, onApplyFilters }) {
  const [state, dispatch] = useReducer(filterReducer, initialState);
  const firstField = React.useRef();

  const handleSubmit = () => {
    onClose();
    onApplyFilters(state);
  };

  return (
    <Box className="drawerWrapper">
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        size="sm"
        initialFocusRef={firstField}
      >
        <DrawerOverlay />
        <DrawerContent borderRadius={"8px"} margin={"10px"}>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">Filter</DrawerHeader>
          <FilterContent state={state} dispatch={dispatch} />
          <DrawerFooter>
            <Flex maxWidth="100%" w="100%">
              <Button
                maxWidth="100%"
                w="100%"
                borderRadius={"25px"}
                variant="outline"
                mr={3}
                onClick={onClose}
              >
                Clear
              </Button>
              <Button
                maxWidth="100%"
                w="100%"
                borderRadius={"25px"}
                colorScheme="blackColor"
                onClick={handleSubmit}
              >
                Apply
              </Button>
            </Flex>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}

export default Filter;
