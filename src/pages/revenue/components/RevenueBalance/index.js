import {
  Flex,
  Text,
  Box,
  Heading,
  Button,
  useBreakpointValue,
} from "@chakra-ui/react";
import Utils from "../../../../commons/helpers/utils";

function RevenueBalance({ data }) {
  const isMobile = useBreakpointValue({ base: true, md: false });
  return (
    <Flex
      gap={isMobile ? "20px" : "5rem"}
      alignItems={"flex-end"}
      flexWrap={isMobile ? "wrap" : "nowrap"}
    >
      <Box>
        <Text mb={1} fontSize="14px" color="#56616B">
          Available balance
        </Text>
        <Heading as="h1" size="xl" fontWeight="900">
          {Utils.currencyFormatter(data)}
        </Heading>
      </Box>
      <Box>
        <Button px="3rem" py="1.5rem" mb={1} className="activeButton">
          <Text as="h6" size="xs" letterSpacing="0.8px">
            Withdraw
          </Text>
        </Button>
      </Box>
    </Flex>
  );
}

export default RevenueBalance;
