import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

export default function ProfileHero() {
  return (
    <Box
      w={"full"}
      backgroundColor={"#003A88"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Box
        w={{ base: "90vw", md: "80vw", xl: "70vw" }}
        maxW={"1500px"}
        display={"flex"}
        alignItems={{ base: "center", sm: "start" }}
        justifyContent={"start"}
        flexDir={"column"}
        px={"2.5vw"}
        py={"6rem"}
      >
        <Text
          fontSize={{ base: "1.5rem", md: "1.65rem", xl: "1.75rem" }}
          fontWeight={"600"}
          py={"0.65rem"}
          color={"#FFFFFF"}
        >
          Hey, @Username
        </Text>
        <Text
          fontSize={{ base: "0.7rem", md: "0.8rem", xl: "0.9rem" }}
          fontWeight={"600"}
          py={"0.65rem"}
          color={"#D0D0D0"}
        >
          Welcome to your profile
        </Text>
      </Box>
    </Box>
  );
}
