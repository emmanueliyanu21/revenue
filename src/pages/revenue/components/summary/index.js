import { Box, Text, Heading, Flex } from "@chakra-ui/react";
import { InfoOutlineIcon } from "@chakra-ui/icons";
import Utils from "../../../../commons/helpers/utils";

function Summary({ data }) {
  const summary = [
    {
      title: "Ledger balance",
      amount: data?.ledger_balance,
    },
    {
      title: "Total Payout",
      amount: data?.total_payout,
    },
    {
      title: "Total Revenue",
      amount: data?.total_revenue,
    },
    {
      title: "Pending Payout",
      amount: data?.pending_payout,
    },
  ];
  return (
    <Box minW="280px" w="100%">
      {summary.map((item, index) => (
        <Flex key={index} justifyContent={"space-between"} pr={"1rem"}>
          <Box mb={10}>
            <Text mb={3} fontSize="14px">
              {item.title}
            </Text>
            <Heading as="b" fontSize="1.57rem">
              {Utils.currencyFormatter(item.amount)}
            </Heading>
          </Box>
          <Box as="span" cursor={"pointer"}>
            <InfoOutlineIcon color="#888F95" />
          </Box>
        </Flex>
      ))}
    </Box>
  );
}

export default Summary;
