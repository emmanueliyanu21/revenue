import {
  Button,
  ButtonGroup,
  Text,
  useDisclosure,
  useBreakpointValue,
} from "@chakra-ui/react";
import { Flex, Spacer, Box, Heading, Divider, Badge } from "@chakra-ui/react";
import Transactiontable from "./transaction-table";
import Filter from "../filter";

import { ChevronDownIcon, DownloadIcon } from "@chakra-ui/icons";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchTransactions,
  saveFilterInput,
} from "../../../../store/actions/transactions.actions";
import { filterInitialState } from "../../../../store/reducers/transactions.reducers";
import EmptyContent from "./emptyContent";
import Loader from "../../../../commons/components/Loader";
import Utils from "../../../../commons/helpers/utils";

function Transactions() {
  const dispatch = useDispatch();
  const {
    transactions = [],
    loading,
    filter,
  } = useSelector((state) => state.transactions);
  const [data, setData] = useState(transactions);

  useEffect(() => {
    dispatch(fetchTransactions());
  }, [dispatch]);

  const handleFilter = (filterState) => {
    const filteredData = transactions.filter((item) => {
      const dateInRange = Utils.isDateWithinRange(item.date, [
        filter.startDate,
        filter.endDate,
      ]);

      const isTransactionTypeSelected = filterState.transactionTypes
        .map((type) => type.value.toLowerCase())
        .includes(item.type.toLowerCase());

      const isStatusTypeSelected = filterState.statusTypes
        .map((status) => status.value.toLowerCase())
        .includes(item.status.toLowerCase());

      return filterState.count
        ? dateInRange || isTransactionTypeSelected || isStatusTypeSelected
        : true;
    });
    setData(filteredData);

    dispatch(saveFilterInput({ ...filterState }));
  };

  useEffect(() => {
    setData(transactions);
  }, [transactions]);

  const handleClear = () => {
    handleFilter(filterInitialState);
  };

  const isMobile = useBreakpointValue({ base: true, md: false });
  const transactionsCount = data?.length || 0;

  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Loader loading={loading}>
      <Box as="div" className="wrapper" mb={"2rem"}>
        <Flex
          gap={isMobile ? "20px" : "2rem"}
          flexWrap={isMobile ? "wrap" : "nowrap"}
        >
          <Box>
            <Heading as="h4" size="md">
              {`${transactionsCount} Transactions`}
            </Heading>
            <Text fontSize="sm">Your transactions for the last 7 days</Text>
          </Box>
          <Spacer />
          <Box>
            <ButtonGroup gap="4">
              <Button
                gap="5px"
                p="25px 30px"
                className="buttonElement"
                onClick={onOpen}
              >
                Filter
                {filter.count ? (
                  <Badge
                    borderRadius={"50px"}
                    color={"#FFF"}
                    p={"2px 6px"}
                    backgroundColor={"#000"}
                  >
                    {filter.count}
                  </Badge>
                ) : (
                  ""
                )}
                <ChevronDownIcon />
              </Button>
              <Button gap="5px" p="25px 30px" className="buttonElement">
                Export List
                <DownloadIcon />
              </Button>
            </ButtonGroup>
          </Box>
        </Flex>
        <Filter
          isOpen={isOpen}
          onClose={onClose}
          onApplyFilters={handleFilter}
        />
        <Divider mb="0.5rem" orientation="horizontal" />
        {transactionsCount ? (
          <Transactiontable data={data} />
        ) : (
          <EmptyContent handleClear={handleClear} />
        )}
      </Box>
    </Loader>
  );
}

export default Transactions;
