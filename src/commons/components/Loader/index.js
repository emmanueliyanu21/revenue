import React from "react";
import { Center, Spinner } from "@chakra-ui/react";

function Loader({ children, loading = true }) {
  if (loading) {
    return (
      <Center height={"100vh"}>
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      </Center>
    );
  }

  return children || null;
}

export default Loader;
