import React from "react";
import { Box, Container, useMediaQuery } from "@chakra-ui/react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "../components/Navbar";
import SideBar from "../components/SideBar";
import Routes from "../AppRoutes";
import Loader from "../components/Loader";

function Layout() {
  const [isLg, isMd] = useMediaQuery([
    "(min-width: 1200px)",
    "(min-width: 700px) and (max-width: 1180px)",
  ]);
  return (
    <Router>
      <Box className="fadeInAnimation">
        <Navbar />
        <SideBar />
        <Loader delay={800}>
          <Container className="container" maxW="7xl">
            <Box
              ml={isLg ? "1.8rem" : isMd ? "3.5rem" : "2.5rem"}
              mt={"8rem"}
              mr={"1rem"}
            >
              <Routes />
            </Box>
          </Container>
        </Loader>
      </Box>
    </Router>
  );
}

export default Layout;
