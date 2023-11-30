import {
  Box,
  Heading,
  Text,
  Flex,
  MenuList,
  MenuItem,
  useMediaQuery,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import MainStackIcon from "../../../../icons";
import { NavLink } from "react-router-dom";

function SubMenu({ menuList = [] }) {
  const [isMobile] = useMediaQuery("(max-width: 800px)");
  return (
    <MenuList className={`${isMobile && "mobile-submenu"} submenu`}>
      {menuList.map((item, index) => (
        <NavLink to={item.path} key={item.name}>
          <MenuItem className="submenu-item-wrap">
            <Flex
              className="submenu-item"
              gap="15px"
              key={index}
              cursor={"pointer"}
              padding={
                !isMobile && (item.text ? "15px 20px 15px 10px" : "0 5px")
              }
              maxW={500}
              minW={isMobile ? 250 : 320}
              // w={100}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Flex gap="15px" alignItems={"center"}>
                <Box as="span" className="dropDownImage">
                  <MainStackIcon type={item.icon} />
                </Box>
                <Box>
                  <Heading as="h6" size="xs">
                    {item.name}
                  </Heading>
                  {item.text && <Text fontSize="xs">{item.text}</Text>}
                </Box>
              </Flex>
              <ChevronRightIcon
                className="chevron-right"
                visibility={"hidden"}
                opacity={0}
              />
            </Flex>
          </MenuItem>
        </NavLink>
      ))}
    </MenuList>
  );
}

export default SubMenu;
