import "./App.css";
import React from "react";
import { HelmetProvider, Helmet } from "react-helmet-async";
import theme from "./chakra-theme";
import { ChakraProvider, Box } from "@chakra-ui/react";
import Layout from "./commons/AppLayout";

function App() {
  return (
    <HelmetProvider>
      <ChakraProvider theme={theme}>
        <Box as="div">
          <Helmet titleTemplate="Mainstack - %s"></Helmet>
          <Layout />
        </Box>
      </ChakraProvider>
    </HelmetProvider>
  );
}

export default App;
