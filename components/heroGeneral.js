/** @format */

import Asana from "./icons/Asana.svg";
import { Box, Center, Image, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const visibleVariants = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.75 } },
  hidden: { opacity: 0, scale: 1 },
};

const HeroGeneral = ({ children, title, description, someOfOurCLients }) => {
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
      bg="#E0E8F3"
      w={"full"}
      //   backgroundPosition={"left"}
      alignItems={"center"}
      display={"flex"}
      justifyContent={"center"}
      // overflow={"hidden"}
    >
      <Box
        maxWidth={"1500px"}
        w={"full"}
        //   can delete this later

        // mx={{ base: "2.5rem", md: "2rem", lg: "0rem" }}
        display={"flex"}
        justifyContent={"space-between"}
        flexDir={{
          base: "column",
          md: "column",
          lg: "row",
        }}
        ml={{ lg: "5.25rem" }}
        mr={{ lg: "1.75rem" }}
        // h={{ md: "fit-content", base: "fit-content" }}
        px={{ base: "2.5rem", md: "2rem", lg: "0rem" }}
      >
        <Image
          position={"absolute"}
          display={{ base: "none", lg: "block" }}
          left={"0"}
          src="/images/hero-ellipse.png"
          w={"26.5em"}
          zIndex={"0"}
        />
        <Box
          pt={{
            base: "2rem",
            md: "2rem",
            lg: "10rem",
            xl: "11rem",
            "2xl": "13rem",
          }}
          maxWidth={"1500px"}
          w={{ base: "100%", md: "100%", lg: "100%" }}
          display={"flex"}
          flexDir={"column"}
        >
          <Box w={"100%"}>
            <Text
              maxW={"90%"}
              fontWeight={{ base: "550", md: "600" }}
              fontSize={{
                base: "1.7rem",
                md: "3rem",
                lg: "2rem",
                xl: "2rem",
              }}
              color="#020D45"
              variant={"heading"}
            >
              {title}{" "}
            </Text>{" "}
            <Text
              maxW={"90%"}
              fontWeight={"500"}
              fontSize={{
                base: "0.9rem ",
                md: "1.5rem",
                lg: "1rem",
              }}
              color={"#42485A"}
              my={{ base: "2rem", md: "3rem" }}
              letterSpacing={"1px"}
            >
              {description}{" "}
            </Text>{" "}
            <Box
              display={{ md: "inline-block", base: "none" }}
              my={{ base: "3rem", lg: "9.5rem" }}
            >
              <Text color={"#0F233E"} mb={"1.3rem"}>
                Some of our clients{" "}
              </Text>{" "}
              <Box display={{ md: "flex", base: "none" }} gap={"1rem"}>
                <Image
                  h={"30px"}
                  filter="invert(0.5)"
                  src="/images/clientsLogo/3.png"
                />
                <Image
                  h={"30px"}
                  filter="invert(0.5)"
                  src="/images/clientsLogo/11.png"
                />
              </Box>
            </Box>
          </Box>{" "}
        </Box>{" "}
        {/* Form box */}
        {children}{" "}
      </Box>
    </Box>
  );
};

export default HeroGeneral;
