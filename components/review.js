/** @format */

import { Avatar, Box, Center, Stack, Text } from "@chakra-ui/react";
import { css } from "@emotion/css";
import Star from "./icons/star.svg";
import React from "react";

const Reviewer = ({ name, stars, category }) => {
  let starsRow = [];
  for (let i = 0; i != stars; i++) {
    starsRow.push(
      <Box key={i + 1} display={{ lg: "flex", sm: "none" }}>
        <Star />
      </Box>
    );
  }
  const colors = [
    "#8FB2DB",
    "#8FC9DB",
    "#FF485E",
    "#A47C7E",
    "#EADCD3",
    "#FFC876",
    "#373C58",
  ];

  const selectElement = () => {
    const number = Math.ceil(Math.random() * colors.length);
    return number;
  };

  return (
    <Stack
      direction={"row"}
      spacing={"18px"}
      justifyContent={"start"}
      alignItems={"center"}
    >
      <Avatar bg={`${colors[selectElement()]}`} />
      <Stack
        direction={"column"}
        spacing={{ lg: "4px", sm: "5px" }}
        justifyContent={"center"}
        alignItems={"start"}
      >
        <Stack direction={"row"} spacing={"3px"}>
          {starsRow}
        </Stack>
        <Box display={"flex"} flexDir={"row"} gap={"0"} alignItems={"end"}>
          <Text
            fontFamily={"silka"}
            fontWeight={"medium"}
            fontSize={{ lg: "14px", sm: "14px" }}
            color={"black"}
          >
            {name} /
          </Text>
          <Text
            fontSize={"12px"}
            color={"#545454"}
            fontWeight={"medium"}
            pl={"1"}
          >
            {category}
          </Text>
        </Box>
      </Stack>
    </Stack>
  );
};

export default Reviewer;
