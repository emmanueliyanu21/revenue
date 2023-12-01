import "./App.css";
import React from "react";
import { HelmetProvider, Helmet } from "react-helmet-async";
import theme from "./chakra-theme";
import { ChakraProvider } from "@chakra-ui/react";
import Layout from "./commons/AppLayout";

function App() {
  return (
    <HelmetProvider>
      <ChakraProvider theme={theme}>
        <Helmet titleTemplate="Mainstack - %s"></Helmet>
        <Layout />
      </ChakraProvider>
    </HelmetProvider>
  );
}

export default App;
