/** @format */

import React, { useRef, useState } from "react";
import { css } from "@emotion/css";
import { Box, Stack, Text, transition } from "@chakra-ui/react";
import Reviewer from "../review";
import { motion, useAnimationFrame } from "framer-motion";
import dynamic from "next/dynamic";

const Testimonial = ({
  name,
  category,
  description,
  stars,
  inView,
  direction,
  idx,
}) => {
  return (
    <Box
      key={idx}
      bgColor={"white"}
      borderRadius={"14px"}
      display={"flex"}
      justifyContent={"start"}
      alignItems={"start"}
      px={"36px"}
      py={"25px"}
      minW={{ base: "500px", md: "600px", lg: "500px" }}
      maxW="500px"
      h={"-webkit-fit-content"}
    >
      <Box
        display={"flex"}
        flexDir={"column"}
        gap={{ md: "0.9rem" }}
        alignItems={"start"}
        justifyContent={"center"}
        minH={"max-content"}
      >
        <Reviewer name={name} stars={stars} category={category} />
        <Text
          fontFamily={"silka"}
          fontSize={{
            base: "12px",
            md: "12px",
            lg: "0.82rem",
          }}
          fontWeight={"regular"}
          lineHeight={{ base: "170%", lg: "202%" }}
          color={"#545454"}
          textAlign={"justify"}
          noOfLines={2}
        >
          {description}
        </Text>
      </Box>
    </Box>
  );
};

export default Testimonial;
