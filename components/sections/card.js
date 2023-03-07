import { Box, Text } from "@chakra-ui/react";
import React from "react";

const ProcessCard = ({ title, align, fontWeight, subTitle }) => {
  return (

    //card used in ourTeam and ourProcess
    <Box borderRadius={"10px"} w={{ base: "12rem" }}>
      <Box
        bg={"white"}
        maxWidth={{ base: "12rem", lg: "20.5rem" }}
        h={{
          base: "16rem",
        }}
        borderRadius={"10px"}
      ></Box>{" "}
      <Text
        pt={"0.5rem"}
        display={"flex"}
        justifyContent={align}
        fontWeight={fontWeight}
      >
        {title}{" "}
      </Text>{" "}
      <Text> {subTitle} </Text>{" "}
    </Box>
  );
};

export default ProcessCard;
