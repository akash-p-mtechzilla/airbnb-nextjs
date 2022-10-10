import { Text, Box } from "@chakra-ui/react";
import { BiSearch } from "react-icons/bi";
import { MdOutlineMenu } from "react-icons/md";

import { BsPersonCircle } from "react-icons/bs";
import { SiAirbnb } from "react-icons/si";
import { FiGlobe } from "react-icons/fi";
import TabSection from "./TabSection";

const NavbarLarge = () => {
  return (
    <Box position="fixed" bg="white">
      <Box
        px="5%"
        h="10vh"
        width="100vw"
        borderBottom="1px"
        color="gray.300"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        style={{ fontFamily: "Roboto" }}
      >
        <Box
          display="flex"
          color="#ff385c"
          fontWeight="semibold"
          fontSize="2rem"
          alignItems="center"
          justifyContent="space-between"
          px="5"
        >
          <SiAirbnb m="0.5rem" />
          <Text fontWeight="bold" fontSize="1.5rem">
            airbnb
          </Text>
        </Box>

        {/* =============== */}

        <Box
          h={["40%", "40%", "40%", "60%", "60%"]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          border="1px"
          color="gray.300"
          className="shadow"
          borderRadius="2rem"
          w={["40%", "40%", "40%", "28%", "28%"]}
        >
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-around"
            h="100%"
            w="100%"
            pl="1rem"
          >
            <Text
              fontSize={[null, null, "0.8rem", "0.9rem", "0.9rem"]}
              // fontSize="0.9rem"
              color="black"
              fontWeight="400"
            >
              Any where
            </Text>
            |
            <Text
              fontSize={[null, null, "0.8rem", "0.9rem", "0.9rem"]}
              color="black"
              fontWeight="400"
            >
              Any week
            </Text>
            |
            <Text
              fontSize={[null, null, "0.8rem", "0.9rem", "0.9rem"]}
              color="gray.400"
              fontWeight="400"
            >
              Any guest
            </Text>
            <Box
              bg="#ff385c"
              borderRadius="50%"
              h="2rem"
              w="2rem"
              display="flex"
              alignItems="center"
              color="white"
              justifyContent="center"
            >
              <BiSearch />
            </Box>
          </Box>
        </Box>

        {/* =============== */}

        <Box
          display="flex"
          alignItems="center"
          w={["30%", "30%", "30%", "15%", "15%"]}
          justifyContent="space-between"
        >
          <Text fontSize="0.9rem" color="black" fontWeight="400">
            Become a host
          </Text>
          <FiGlobe color="black" />
          <Box
            border="1px"
            borderRadius="2rem"
            display="flex"
            alignItems="center"
            justifyContent="space-evenly"
            h="2rem"
            w="3.5rem"
          >
            <MdOutlineMenu color="black" />
            <BsPersonCircle color="black" />
          </Box>
        </Box>
      </Box>

      <TabSection />
    </Box>
  );
};

export default NavbarLarge;
