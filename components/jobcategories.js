/** @format */

import { Box, Text, Button } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import heroHomeContent from "../data/static/heroHomeContent.json";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const visibleVariants = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.75 } },
  hidden: { opacity: 0, scale: 1 },
};

const Category = ({ title, description }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return (
    <Box
      w={"full"}
      bgColor={"#E0E8F3"}
      py={"1.5rem"}
      as={motion.div}
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={visibleVariants}
    >
      <Box
        maxW={"1500px"}
        borderBottom={"1px"}
        borderColor={"#8FA2BC"}
        // _hover={{ borderColor: "white" }}
        pt={"1.5rem"}
        pb={"1rem"}
        display={"flex"}
        flexDir={{ md: "row", base: "column" }}
        gap={"0.5rem"}
        justifyContent={"space-between"}
      >
        <Text
          fontSize={"14px"}
          letterSpacing={"wide"}
          color={"#00072C"}
          fontWeight={"medium"}
          pl={{ md: "1" }}
        >
          {title}
        </Text>
        <Text
          fontSize={"12px"}
          color={"#555C80"}
          fontWeight={"normal"}
          // pr={"6rem"}
          maxW={{ base: "90vw", md: "60vw", lg: "60vw", xl: "50vw" }}
        >
          {description}
        </Text>
      </Box>
    </Box>
  );
};

const JobCategories = ({ content, mainTitle, mainDescription, buttonText }) => {
  const router = useRouter();
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return (
    <Box
      as={motion.div}
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={visibleVariants}
      bgColor={"#E0E8F3"}
      w={"full"}
      alignItems={"center"}
      display={"flex"}
      justifyContent={"center"}
    >
      <Box
        w={"1500px"}
        display={"flex"}
        flexDir={"column"}
        bgColor={"#E0E8F3"}
        px={{ lg: "6.5rem", base: "2.5rem" }}
        py={"6rem"}
      >
        <Box>
          <Box>
            <Text
              fontSize={"28px"}
              letterSpacing={"wide"}
              color={"#00072C"}
              fontWeight={"semibold"}
              pb={"2"}
              pl={"1"}
            >
              {" "}
              {mainTitle}{" "}
            </Text>{" "}
            <Text
              fontSize={"12px"}
              color={"#555C80"}
              fontWeight={"normal"}
              pb={"2"}
            >
              {mainDescription}{" "}
            </Text>{" "}
          </Box>{" "}
          <Box py={"3rem"}>
            {" "}
            {content.map((category, index) => {
              return (
                <Category
                  key={index}
                  title={category.title}
                  description={category.description}
                />
              );
            })}{" "}
          </Box>{" "}
        </Box>{" "}
        <Box display={"flex"} justifyContent={{ base: "center", md: "left" }}>
          <Button
            onClick={() => {
              router.push("/contactUs");
            }}
            variant={"transparentBg"}
            w={"10rem"}
            py={"1.5rem"}
          >
            {buttonText}{" "}
          </Button>{" "}
        </Box>
      </Box>
    </Box>
  );
};

export default JobCategories;
