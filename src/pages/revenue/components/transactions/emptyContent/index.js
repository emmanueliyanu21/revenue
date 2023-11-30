import { Box, Heading, Text, Button, Flex, Image } from "@chakra-ui/react";
import Receipt from "../../../../../assets/svgs/receipt.svg";

function EmptyContent({ handleClear }) {
  return (
    <Flex justifyContent={"center"} alignItems={"center"}>
      <Box pt={30} pb="40px">
        <Button py={"20px"}>
          <Image src={Receipt} alt="receipt" />
        </Button>
        <Heading maxWidth={"420px"} pb={"10px"} as="h3" size="lg">
          No matching transaction found for the selected filter
        </Heading>
        <Text pb={"10px"} maxWidth={"380px"} fontSize="md">
          Change your filter to see more result, or add a new product
        </Text>
        <Button p="25px 30px" onClick={handleClear} className="buttonElement">
          Clear Filter
        </Button>
      </Box>
    </Flex>
  );
}

export default EmptyContent;
