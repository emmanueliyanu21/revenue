import React from "react";
import { Button } from "@chakra-ui/react";

function DateRangeButton({ key, selectedKey, handleDateSelection, value }) {
  const isActive = selectedKey === value;
  return (
    <Button
      px="15px"
      py={"17px"}
      fontSize="13px"
      variant="outline"
      borderRadius={"50px"}
      className={` ${isActive ? "selected" : ""}`}
      key={key}
      onClick={() => handleDateSelection && handleDateSelection(value)}
      size="sm"
      bg={isActive ? "lightGrey" : "transparent"}
      _hover={{ bg: "lightGrey" }}
      _focus={{ bg: "lightGrey" }}
    >
      {value}
    </Button>
  );
}

export default DateRangeButton;
