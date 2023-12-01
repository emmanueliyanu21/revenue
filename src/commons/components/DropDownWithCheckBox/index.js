import React from "react";
import {
  MenuButton,
  Text,
  MenuList,
  Flex,
  Checkbox,
  Heading,
  Button,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

function DropDownWithCheckBox({
  data,
  selectedItems,
  placeholder = "",
  groupLabel,
  handleCheck,
}) {
  return (
    <>
      <MenuButton
        as={Button}
        rightIcon={<ChevronDownIcon />}
        w="100%"
        h={"48px"}
        borderRadius={"12px"}
        justifyContent="flex-start"
        backgroundColor="#EFF1F6"
        variant="outline"
      >
        <Text
          maxW="100%"
          whiteSpace="nowrap"
          display="flex"
          justifyContent="flex-start"
          overflow="hidden"
          textOverflow="ellipsis"
          fontSize="14px"
        >
          {selectedItems.length
            ? selectedItems.map((item, index) => (
                <>
                  {index > 0 && ", "}
                  {item.label}
                </>
              ))
            : placeholder}
        </Text>
      </MenuButton>
      <MenuList
        minWidth={"400px"}
        maxWidth={"600px"}
        w="100%"
        fontSize="12px"
        px="15px"
      >
        {data.map((item, index) => (
          <Flex gap="15px" key={index} py="10px" px="10px">
            <Checkbox
              className="custom-checkbox"
              colorScheme="blackColor"
              isChecked={
                selectedItems.filter((elem) => elem.value === item.value).length
              }
              onChange={() => handleCheck && handleCheck(item, groupLabel)}
            >
              <Heading as="h5" size="sm">
                {item.label}
              </Heading>
            </Checkbox>
          </Flex>
        ))}
      </MenuList>
    </>
  );
}

export default DropDownWithCheckBox;
