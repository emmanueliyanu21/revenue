import React from "react";
import { Box, Container } from "@chakra-ui/react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "../components/Navbar";
import SideBar from "../components/SideBar";
import Routes from "../AppRoutes";

function Layout() {
  return (
    <Router>
      <Navbar />
      <SideBar />
      <Container className="container" maxW="7xl">
        <Box ml={"2rem"} mt={"8rem"}>
          <Routes />
        </Box>
      </Container>
    </Router>
  );
}

export default Layout;
