import {
  Table,
  Tbody,
  Tr,
  Td,
  TableContainer,
  Heading,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { Box, Flex } from "@chakra-ui/react";
import MainStackIcon from "../../../../../commons/icons";
import Utils from "../../../../../commons/helpers/utils";

function Transactiontable({ data }) {
  const tableMargin = useBreakpointValue({ base: "0", sm: "0rem" });
  const tdPadding = useBreakpointValue({ base: "0", sm: "0" });
  const isSmallerScreen = useBreakpointValue({ base: true, md: false });

  return (
    <>
      <TableContainer
        mt={tableMargin}
        overflowX="auto"
        sx={{ "&::-webkit-scrollbar": { display: "none" } }}
      >
        <Table variant="simple" overflow="hidden">
          <Tbody>
            {data.map((transaction, index) => (
              <Tr key={index} borderBottom="none">
                <Td pl={tdPadding} pr="3rem" borderBottom="none">
                  <Flex alignItems="center" gap="2">
                    {transaction?.type === "withdrawal" ? (
                      <MainStackIcon type={"arrowOut"} />
                    ) : (
                      <MainStackIcon type={"arrowIn"} />
                    )}
                    <Box>
                      {isSmallerScreen ? (
                        <Text
                          className="textHeading"
                          maxW="150px"
                          whiteSpace="nowrap"
                          overflow="hidden"
                          textOverflow="ellipsis"
                        >
                          {transaction?.metadata?.product_name || "--"}
                        </Text>
                      ) : (
                        <Heading className="textHeading" as="h5" size="sm">
                          {transaction?.metadata?.product_name || "--"}
                        </Heading>
                      )}
                      <Text pt="6px" fontSize="14px">
                        {transaction?.metadata?.name || "--"}
                      </Text>
                    </Box>
                  </Flex>
                </Td>
                <Td pr={tdPadding} borderBottom="none">
                  <Box textAlign="end">
                    <Heading as="h5" size="sm">
                      {Utils.currencyFormatter(transaction.amount)}
                    </Heading>
                    <Text pt="6px" fontSize="14px">
                      {Utils.dateFormatter(transaction.date)}
                    </Text>
                  </Box>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
}

export default Transactiontable;
