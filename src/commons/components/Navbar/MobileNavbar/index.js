import {
  Menu,
  MenuButton,
  useDisclosure,
  Flex,
  IconButton,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import MobileMenuDrawer from "./MobileMenuDrawer";
import NavItem from "../NavItem";
import navData from "../staticData";

function MobileNavBar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { rightMenu } = navData;

  return (
    <div>
      <Flex>
        <Menu>
          {rightMenu.map((item, index) => (
            <NavItem navItem={item} isMobile={true} key={index} />
          ))}
          <MenuButton
            border={"none"}
            cursor={"pointer"}
            onClick={onOpen}
            as={IconButton}
            aria-label="Options"
            icon={<HamburgerIcon />}
            variant="outline"
          />
        </Menu>
      </Flex>
      <MobileMenuDrawer isOpen={isOpen} onClose={onClose} />
    </div>
  );
}

export default MobileNavBar;
