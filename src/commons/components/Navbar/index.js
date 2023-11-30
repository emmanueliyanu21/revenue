import { useEffect, useState } from "react";
import {
  Flex,
  Menu,
  Image,
  Card,
  CardBody,
  Box,
  useMediaQuery,
} from "@chakra-ui/react";
import MainstackLogo from "../../../assets/svgs/mainstack-logo.svg";
import NavItem from "./NavItem";
import "./style.css";
import MobileNavBar from "./MobileNavbar";
import navData from "./staticData";

import { useDispatch } from "react-redux";
import { fetchUser } from "../../../store/actions/user.actions";

function Navbar() {
  const dispatch = useDispatch();

  const [activeMenu, setActiveMenu] = useState("Revenue");

  const [isMobileView] = useMediaQuery("(max-width: 800px)");

  const { centerMenu, rightMenu } = navData;

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  const navLogoComponent = () => (
    <Box as="button">
      <Image src={MainstackLogo} alt="icon" />
    </Box>
  );

  const handleMenuClick = (activeItem) => {
    setActiveMenu(activeItem);
  };

  return (
    <>
      <Card className={`card sticky`} position="sticky">
        <CardBody className="cardBody">
          {isMobileView ? (
            <Flex justifyContent={"space-between"}>
              {navLogoComponent()}
              <Box h="20px">
                <MobileNavBar />
              </Box>
            </Flex>
          ) : (
            <Flex justifyContent={"space-between"}>
              {navLogoComponent()}
              <Flex maxW={"500px"}>
                <Menu>
                  <Flex gap={5}>
                    {centerMenu.map((item, index) => (
                      <NavItem
                        navItem={item}
                        isCenterMenu={true}
                        activeItem={activeMenu}
                        handleSelect={handleMenuClick}
                        key={index}
                      />
                    ))}
                  </Flex>
                </Menu>
              </Flex>
              <Menu>
                <Flex gap={1} alignItems={"center"}>
                  {rightMenu.map((item, index) => (
                    <NavItem
                      navItem={item}
                      handleSelect={handleMenuClick}
                      key={index}
                    />
                  ))}
                </Flex>
              </Menu>
            </Flex>
          )}
        </CardBody>
      </Card>
    </>
  );
}

export default Navbar;
