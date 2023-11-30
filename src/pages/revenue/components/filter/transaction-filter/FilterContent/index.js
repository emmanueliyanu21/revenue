import {
  DrawerBody,
  Flex,
  Button,
  Box,
  MenuButton,
  MenuList,
  Stack,
  Heading,
  Text,
  Menu,
  Checkbox,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import DatePicker from "../datePicker";
import staticData from "./staticData";
import { actionTypes } from "../../../../../../store/reducers/filter.reducer";

function FilterContent({ state, dispatch }) {
  const { filterRanges, transactionTypes, statusTypes } = staticData;

  const handleFilterRangeClick = (item) => {
    dispatch({ type: actionTypes.SET_SELECTED_FILTER_RANGES, payload: [item] });
  };

  const handleTransactionTypeClick = (item) => {
    dispatch({
      type: actionTypes.SET_SELECTED_TRANSACTION_TYPES,
      payload: state.selectedTransactionTypes.includes(item)
        ? state.selectedTransactionTypes.filter((selected) => selected !== item)
        : [...state.selectedTransactionTypes, item],
    });
  };

  const handleStatusTypeClick = (item) => {
    const updatedStatusTypes = state.selectedStatusTypes.includes(item)
      ? state.selectedStatusTypes.filter((selected) => selected !== item)
      : [...state.selectedStatusTypes, item];

    dispatch({
      type: actionTypes.SET_SELECTED_STATUS_TYPES,
      payload: updatedStatusTypes,
    });
  };

  return (
    <DrawerBody>
      <Stack>
        <Flex mb="15px" gap="15px">
          {filterRanges.map((item, index) => (
            <Button
              px="15px"
              py={"17px"}
              fontSize="13px"
              variant="outline"
              borderRadius={"50px"}
              className={` ${
                state.selectedFilterRanges.includes(item) ? "selected" : ""
              }`}
              key={index}
              onClick={() => handleFilterRangeClick(item)}
              size="sm"
              bg={
                state.selectedFilterRanges.includes(item)
                  ? "lightGrey"
                  : "transparent"
              }
              _hover={{ bg: "lightGrey" }}
              _focus={{ bg: "lightGrey" }}
            >
              {item}
            </Button>
          ))}
        </Flex>

        <Box mb="15px">
          <Heading as="h6" size="xs" mb="10px" color="#131316">
            Date range
          </Heading>
          <Box>
            <Flex gap="5px">
              <DatePicker
                startDate={state.startDate}
                selectDate={(date) =>
                  dispatch({ type: actionTypes.SET_START_DATE, payload: date })
                }
              />
              <DatePicker
                startDate={state.endDate}
                selectDate={(date) =>
                  dispatch({ type: actionTypes.SET_END_DATE, payload: date })
                }
              />
            </Flex>
          </Box>
        </Box>

        <Box mb="15px">
          <Menu mb="15px" gap="10px" w="100%">
            <Heading mb="10px" as="h6" size="xs" color="#131316">
              Transaction Type
            </Heading>
            <MenuButton
              as={Button}
              rightIcon={<ChevronDownIcon />}
              backgroundColor="#EFF1F6"
              variant="outline"
              maxWidth="100%"
              w="100%"
              justifyContent="flex-start"
            >
              <Text
                maxW="100%"
                whiteSpace="nowrap"
                overflow="hidden"
                display="flex"
                justifyContent="flex-start"
                textOverflow="ellipsis"
                fontSize="12px"
                color="#131316"
              >
                {state.selectedTransactionTypes.length > 0 ? (
                  <>
                    {state.selectedTransactionTypes.map((item, index) => (
                      <>
                        {index > 0 && ", "}
                        {item}
                      </>
                    ))}
                  </>
                ) : (
                  "Store Transactions"
                )}
              </Text>
            </MenuButton>
            <MenuList
              minWidth={"400px"}
              maxWidth={"600px"}
              w="100%"
              fontSize="12px"
              px="15px"
            >
              {transactionTypes.map((item, index) => (
                <Flex gap="15px" key={index} py="15px" px="10px">
                  <Checkbox
                    className="custom-checkbox"
                    colorScheme="blackColor"
                    isChecked={state.selectedTransactionTypes.includes(item)}
                    onChange={() => handleTransactionTypeClick(item)}
                  ></Checkbox>
                  <Heading as="h5" size="sm">
                    {item}
                  </Heading>
                </Flex>
              ))}
            </MenuList>
          </Menu>
        </Box>

        <Box mb="15px">
          <Menu mb="15px" gap="10px" w="100%">
            <Heading mb="10px" as="h6" size="xs" color="#131316">
              Transaction Status
            </Heading>
            <MenuButton
              as={Button}
              rightIcon={<ChevronDownIcon />}
              w="100%"
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
                fontSize="12px"
              >
                {state.selectedStatusTypes.length > 0 ? (
                  <>
                    {state.selectedStatusTypes.map((item, index) => (
                      <>
                        {index > 0 && ", "}
                        {item}
                      </>
                    ))}
                  </>
                ) : (
                  "Successful"
                )}
              </Text>
            </MenuButton>
            <MenuList
              minWidth={"400px"}
              maxWidth={"600px"}
              w="100%"
              fontSize="12px"
              px="15px"
            >
              {statusTypes.map((item, index) => (
                <Flex gap="15px" key={index} py="10px" px="10px">
                  <Checkbox
                    className="custom-checkbox"
                    colorScheme="blackColor"
                    isChecked={state.selectedStatusTypes.includes(item)}
                    onChange={() => handleStatusTypeClick(item)}
                  ></Checkbox>
                  <Heading as="h5" size="sm">
                    {item}
                  </Heading>
                </Flex>
              ))}
            </MenuList>
          </Menu>
        </Box>
      </Stack>
    </DrawerBody>
  );
}

export default FilterContent;
