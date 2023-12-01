import React from "react";
import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Box,
  Menu,
} from "@chakra-ui/react";
import navData from "../../staticData";
import NavItem from "../../NavItem";

function MobileMenuView({ isOpen, onClose }) {
  const { centerMenu } = navData;
  return (
    <div>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="sm">
        <DrawerOverlay>
          <DrawerContent>
            <Box mb="2rem">
              <DrawerCloseButton />
            </Box>
            <Box mt="2rem">
              <Menu>
                {centerMenu.map((item, index) => (
                  <Box ml={"1rem"} key={index}>
                    <NavItem
                      handleSelect={item.path && onClose}
                      navItem={item}
                      isCenterMenu={true}
                      key={item.name}
                    />
                  </Box>
                ))}
              </Menu>
            </Box>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </div>
  );
}

export default MobileMenuView;
