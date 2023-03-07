import { Box, Center, Text, Grid, GridItem } from "@chakra-ui/react";
import React, { useEffect } from "react";
import ProcessCard from "./sections/card";
import { css } from "@emotion/css";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const visibleVariants = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.75 } },
  hidden: { opacity: 0, scale: 1 },
};

const OurEasy = () => {
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
      w={"full"}
      // alignItems={"center"}
      // display={"flex"}
      justifyContent={"center"}
      flexDirection={"column"}
      bg={"#EEF2FE"}
      fontFamily={"Gilroy"}
      overflow={"hidden"}
      //   bgColor={"blue"}
    >
      {/* <Box maxW={"1500px"}> */}
      <Center mx={{ base: "3rem", md: "2rem", lg: "2.25rem", xl: "4.25rem" }}>
        <Text
          mt={"6.25rem"}
          fontWeight={"500"}
          fontSize={{ base: "1.5rem", md: "2rem", lg: "2.5rem" }}
          lineHeight={"1.5rem"}
          textAlign="center"
        >
          Our Easy Process{" "}
        </Text>{" "}
      </Center>{" "}
      <Center
        mt={"1.5rem"}
        mx={{ base: "3rem", md: "2rem", lg: "2.25rem", xl: "4.25rem" }}
      >
        <Text>
          To find you a perfect candidate for your company and excel you way to
          moon!
        </Text>{" "}
      </Center>{" "}
      <Box
        px={{ base: "1rem", md: "2rem", lg: "2.25rem", xl: "4.25rem" }}
        py={"6.6rem"}
        // overflowX={{ base: "auto" }}
        overflow={"hidden"}
        // w={{ base: "full", md: "90vw" }}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}

        // w="full"
      >
        <Box
          w={{ lg: "60vw", base: "full" }}
          maxW={"1500px"}
          overflowX={"scroll"}
          overscrollBehaviorX={"contain"}
          scrollBehavior={"smooth"}
          className={css`
            ::-webkit-scrollbar {
              display: none;
            }
          `}
        >
          {" "}
          <Grid
            gridAutoFlow={"column"}
            alignItems={"start"}
            templateColumns={{
              base: "repeat(1, 3fr)",

              md: "repeat(1,1fr 1fr 1fr)",

              lg: "repeat(3, 1fr)",
            }}
            w={"full"}
            maxWidth={{ xl: "1500px" }}
            gap={{ base: "10%", md: "8%", lg: "7%", xl: "10%" }}
          >
            <GridItem display={"flex"} justifyContent={"center"}>
              <ProcessCard
                title={"Our Easy Process"}
                align={"center"}
                fontWeight={"600"}
              />{" "}
            </GridItem>{" "}
            <GridItem display={"flex"} justifyContent={"center"}>
              <ProcessCard
                title={"Our Easy Process"}
                align={"center"}
                fontWeight={"600"}
              />{" "}
            </GridItem>{" "}
            <GridItem display={"flex"} justifyContent={"center"}>
              <ProcessCard
                title={"Our Easy Process"}
                align={"center"}
                fontWeight={"600"}
              />{" "}
            </GridItem>{" "}
          </Grid>{" "}
        </Box>{" "}
      </Box>
      {/* </Box> */}
    </Box>
  );
};

export default OurEasy;
