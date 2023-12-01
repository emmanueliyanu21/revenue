import React from "react";
import {
  Flex,
  Menu,
  MenuButton,
  Image,
  Text,
  Box,
  Divider,
  Center,
  useMediaQuery,
} from "@chakra-ui/react";
import MainStackIcon from "../../../icons";
import "./styles.css";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { NavLink, useLocation } from "react-router-dom";
import SubMenu from "./SubMenu";
import { useSelector } from "react-redux";

function Index({ navItem, isCenterMenu, activeItem = "", handleSelect }) {
  const { userData } = useSelector((state) => state.user);
  const { pathname } = useLocation();

  const isActive = navItem.path
    ? pathname === navItem.path
    : activeItem === navItem.name;
  const [isDesktop] = useMediaQuery("(min-width: 1180px)");

  function UserInitials({ userData }) {
    if (userData?.email) {
      const { first_name, last_name } = userData;
      return `${first_name?.charAt(0) || ""}${last_name?.charAt(0) || ""}`;
    }
  }

  return (
    <Flex
      gap={1}
      key={navItem.name}
      justifyContent={isDesktop && "center"}
      alignItems={"center"}
    >
      {navItem.hasSubMenu ? (
        <Menu>
          <MenuButton
            px={isCenterMenu && "15px"}
            border={!isDesktop && "none"}
            onClick={() => handleSelect && handleSelect(navItem.name)}
            className={`${
              isActive && isCenterMenu && "activeButton"
            } menu-item`}
          >
            <Flex
              gap={1}
              justifyContent={"center"}
              alignItems={"center"}
              className={`${isDesktop ? "desktop" : "mobile"} `}
            >
              {navItem.name === "settings" ? (
                <Flex
                  gap={1}
                  justifyContent={"center"}
                  alignItems={"center"}
                  className={`${navItem.name}`}
                >
                  <Box className="usericon">
                    {userData?.img ? (
                      <Image src={userData.img} alt="profile" />
                    ) : (
                      <Text fontSize="1xl">
                        <UserInitials userData={userData} />
                      </Text>
                    )}
                  </Box>
                  {isDesktop && <MainStackIcon type={navItem.icon} />}
                </Flex>
              ) : (
                <MainStackIcon
                  type={navItem.icon}
                  color={isActive ? "#FFF" : null}
                />
              )}
              {isCenterMenu && (
                <Center gap={1} className="submenu-container" height="40px">
                  {navItem.name}

                  {isDesktop && isActive && (
                    <Center
                      height={"100%"}
                      alignItems={"center"}
                      w={"120px"}
                      className={`${
                        isActive && "active-widget"
                      } inactive-widget`}
                    >
                      <Divider orientation="vertical" ml={3} />
                      {"   "}
                      <Center as="span" pl={3}>
                        {navItem.subMenu[0].name}
                        <ChevronDownIcon ml={2} />
                      </Center>
                    </Center>
                  )}
                </Center>
              )}
            </Flex>
          </MenuButton>
          <SubMenu menuList={navItem.subMenu} />
        </Menu>
      ) : (
        <NavLink to={navItem.path} className={"navlink"}>
          <MenuButton
            border={"none"}
            px={isCenterMenu && "15px"}
            height={"40px"}
            className={isActive ? "activeButton" : "menuClass"}
            onClick={() => handleSelect && handleSelect(navItem.name)}
          >
            <Flex gap={1} justifyContent={"center"} alignItems={"center"}>
              <MainStackIcon
                type={navItem.icon}
                color={isActive ? "#FFF" : null}
              />
              {isCenterMenu && navItem.name}
            </Flex>
          </MenuButton>
        </NavLink>
      )}
    </Flex>
  );
}

export default Index;
