import {
  DrawerBody,
  DrawerFooter,
  Button,
  Flex,
  Box,
  Stack,
  Heading,
  Menu,
} from "@chakra-ui/react";
import DatePicker from "../../../../../commons/components/DatePicker";
import staticData from "./staticData";
import { useSelector, useDispatch } from "react-redux";
import { saveFilterInput } from "../../../../../store/actions/transactions.actions";
import { filterInitialState } from "../../../../../store/reducers/transactions.reducers";
import Utils from "../../../../../commons/helpers/utils";
import DateRangeButton from "../../../../../commons/components/DateRangeButton";
import DropDownWithCheckBox from "../../../../../commons/components/DropDownWithCheckBox";

function FilterContent({ handleFilter }) {
  const dispatch = useDispatch();
  const { filterRanges, transactionTypes, statusTypes, START_DATE, END_DATE } =
    staticData;
  const { filter } = useSelector((state) => state.transactions);

  const handleDateSelection = (label, date) => {
    let updatedFilter = { ...filter };
    if (date) {
      updatedFilter = { ...filter, [label]: date, range: label };
    } else {
      const { startDate, endDate } = Utils.getDateRange(label);
      updatedFilter = {
        ...updatedFilter,
        range: label,
        startDate,
        endDate,
      };
    }
    const count = Utils.getFilterCount(updatedFilter);
    dispatch(saveFilterInput({ ...updatedFilter, activeCount: count }));
  };

  const handleTransactionTypeClick = (item, label) => {
    if (label && filter[label]) {
      const transactionTypes = filter[label];
      const res = transactionTypes
        .map((type) => type.value)
        .includes(item.value)
        ? transactionTypes.filter((selected) => selected.value !== item.value)
        : [...transactionTypes, item];
      const updatedFilter = { ...filter, [label]: res };
      const count = Utils.getFilterCount(updatedFilter);
      dispatch(saveFilterInput({ ...updatedFilter, activeCount: count }));
    }
  };

  const handleClear = () => {
    handleFilter(filterInitialState);
  };

  const handleSubmit = () => {
    const count = Utils.getFilterCount(filter);
    handleFilter({ ...filter, count });
  };

  return (
    <>
      <DrawerBody>
        <Stack>
          <Flex mb="15px" gap="15px">
            {filterRanges.map((item, index) => (
              <DateRangeButton
                key={index}
                value={item}
                handleDateSelection={handleDateSelection}
                selectedKey={filter.range}
              />
            ))}
          </Flex>

          <Box mb="15px">
            <Heading as="h6" size="xs" mb="10px" color="#131316">
              Date range
            </Heading>
            <Box>
              <Flex gap="5px">
                <DatePicker
                  id={"start"}
                  selectedDate={filter.startDate}
                  handleChange={(date) => handleDateSelection(START_DATE, date)}
                />
                <DatePicker
                  id={"end"}
                  selectedDate={filter.endDate}
                  handleChange={(date) => handleDateSelection(END_DATE, date)}
                />
              </Flex>
            </Box>
          </Box>

          <Box mb="15px">
            <Menu mb="15px" gap="10px" w="100%">
              <Heading mb="10px" as="h6" size="xs" color="#131316">
                Transaction Type
              </Heading>
              <DropDownWithCheckBox
                data={transactionTypes}
                selectedItems={filter.transactionTypes}
                placeholder={"Store Transaction"}
                handleCheck={handleTransactionTypeClick}
                groupLabel={"transactionTypes"}
              />
            </Menu>
          </Box>

          <Box mb="15px">
            <Menu mb="15px" gap="10px" w="100%">
              <Heading mb="10px" as="h6" size="xs" color="#131316">
                Transaction Status
              </Heading>
              <DropDownWithCheckBox
                data={statusTypes}
                selectedItems={filter.statusTypes}
                placeholder={"Successful"}
                handleCheck={handleTransactionTypeClick}
                groupLabel={"statusTypes"}
              />
            </Menu>
          </Box>
        </Stack>
      </DrawerBody>
      <DrawerFooter>
        <Flex maxWidth="100%" w="100%">
          <Button
            maxWidth="100%"
            w="100%"
            h={"48px"}
            borderRadius={"25px"}
            variant="outline"
            mr={3}
            onClick={handleClear}
          >
            Clear
          </Button>
          <Button
            maxWidth="100%"
            w="100%"
            borderRadius={"25px"}
            h={"48px"}
            colorScheme={"blackColor"}
            onClick={handleSubmit}
            isDisabled={!filter.activeCount}
          >
            Apply
          </Button>
        </Flex>
      </DrawerFooter>
    </>
  );
}

export default FilterContent;
