import {
  Box,
  Image,
  Tooltip,
  chakra,
  useBreakpointValue,
} from "@chakra-ui/react";
import navData from "../Navbar/staticData";
const ColoredImage = chakra(Image);

function SideBar() {
  const leftValues = useBreakpointValue({ base: "5px", md: "15px" });
  const { sideMenu } = navData;

  return (
    <Box
      position="fixed"
      top={"16rem"}
      left={leftValues}
      backgroundColor="white"
      padding="15px 5px"
      borderRadius="50px"
      boxShadow="0 4px 8px rgba(0, 0, 0, 0.1)"
      zIndex="1"
      width="50px"
    >
      {sideMenu.map((item, index) => (
        <Box key={index} borderRadius="50px">
          <Tooltip label={item.label} placement="right">
            <ColoredImage
              src={item.icon}
              alt="icon"
              p="6px"
              my="8px"
              cursor="pointer"
              filter="brightness(0.8) saturate(10%)"
              transition="filter 0.3s ease-in-out"
              _hover={{
                filter: "brightness(1.0) saturate(100%)",
                transition: "filter 0.3s ease-in-out",
                borderRadius: "50px",
                padding: "6px",
                background: "#EFF1F6",
              }}
            />
          </Tooltip>
        </Box>
      ))}
    </Box>
  );
}

export default SideBar;
