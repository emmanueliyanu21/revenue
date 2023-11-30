import {
  Button,
  ButtonGroup,
  Text,
  useDisclosure,
  useBreakpointValue,
} from "@chakra-ui/react";
import { Flex, Spacer, Box, Heading, Divider, Badge } from "@chakra-ui/react";
import Transactiontable from "./transaction-table";
import Filter from "../filter/transaction-filter";

import { ChevronDownIcon, DownloadIcon } from "@chakra-ui/icons";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTransactions } from "../../../../store/actions/transactions.actions";
import EmptyContent from "./emptyContent";
import Loader from "../../../../commons/components/Loader";

function Transactions() {
  const dispatch = useDispatch();
  const { transactions, loading } = useSelector((state) => state.transactions);

  useEffect(() => {
    dispatch(fetchTransactions());
  }, [dispatch]);

  const [filteredData, setFilteredData] = useState(transactions);
  const handleFilterChange = (filterState) => {
    const filteredData = transactions.filter((item) => {
      const dateInRange =
        new Date(item.date) >= new Date(filterState.startDate) &&
        new Date(item.date) <= new Date(filterState.endDate);

      const isTransactionTypeSelected = filterState.selectedTransactionTypes
        .map((type) => type.toLowerCase())
        .includes(item.metadata?.type.toLowerCase());

      const isStatusTypeSelected = filterState.selectedStatusTypes
        .map((status) => status.toLowerCase())
        .includes(item.status.toLowerCase());

      return dateInRange && isTransactionTypeSelected && isStatusTypeSelected;
    });

    setFilteredData(filteredData);
  };

  useEffect(() => {
    setFilteredData(transactions);
  }, [transactions]);

  const submitClear = () => {
    dispatch(fetchTransactions());
  };

  const isMobile = useBreakpointValue({ base: true, md: false });
  const transactionsCount = filteredData?.length || 0;

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
              {`${filteredData?.length || 0} Transactions`}
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
                {filteredData?.length > 0 ? (
                  <Badge
                    borderRadius={"50px"}
                    color={"#FFF"}
                    p={"2px 6px"}
                    backgroundColor={"#000"}
                  >
                    {filteredData?.length > 0 && `${filteredData.length}`}
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
          onApplyFilters={handleFilterChange}
        />
        <Divider mb="0.5rem" orientation="horizontal" />
        {transactionsCount > 0 ? (
          <Transactiontable data={filteredData} />
        ) : (
          <EmptyContent handleClear={submitClear} />
        )}
      </Box>
    </Loader>
  );
}

export default Transactions;
