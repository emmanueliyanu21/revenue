import React, { useEffect, useState } from "react";
import { Center, Spinner, Box } from "@chakra-ui/react";

function Loader({ children, loading = false, delay }) {
  const [spinning, setSpinning] = useState(loading || !!delay);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSpinning(false);
    }, delay);
    return () => {
      clearTimeout(timeout);
    };
  }, [delay]);

  if (spinning) {
    return (
      <Center height={"100vh"}>
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blueColor"
          size="xl"
        />
      </Center>
    );
  }
  return (
    (
      <Box className="fadeInAnimation" transition={"all 1s"}>
        {children}
      </Box>
    ) || null
  );
}

export default Loader;
