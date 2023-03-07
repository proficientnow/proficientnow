/** @format */

import {
  Box,
  Text,
  Button,
  Grid,
  GridItem,
  Image,
  Flex,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const visibleVariants = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.75 } },
  hidden: { opacity: 0, scale: 1 },
};

const TwoColumns = ({ title, desc, imgSrc, textOrder, buttonText }) => {
  const router = useRouter();
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return (
    <Box>
      <Box
        as={motion.div}
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={visibleVariants}
        w={"full"}
        px={{ lg: "6.5rem", base: "2rem" }}
        py={{ lg: "5rem", base: "3rem" }}
        display={"flex"}
        justifyContent={"center"}
      >
        <Flex
          flexDir={{
            md: textOrder,
            base: "column-reverse",
          }}
          gap={"2rem"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Box
            w={{ md: "50%", base: "100%" }}
            pt={{ lg: "5rem", md: "3rem", base: "2rem" }}
          >
            <Text
              pb={"1.2rem"}
              color={"black"}
              fontSize={{
                xl: "36px",
                lg: "28px",
                base: "20px",
              }}
              letterSpacing={"wide"}
              fontWeight={"semibold"}
              fontFamily={"Gilroy"}
            >
              {title}{" "}
            </Text>{" "}
            <Text
              pr={{ md: "3rem", base: "0rem" }}
              pb={"1.2rem"}
              color={"#757575"}
              lineHeight={{ md: "7", base: "10" }}
              fontSize={{ lg: "14px", base: "14px" }}
              textAlign={"justify"}
              fontWeight={"medium"}
              fontFamily={"Gilroy"}
            >
              {desc}{" "}
            </Text>{" "}
            <Button
              variant={"transparentBg"}
              onClick={() => {
                router.push("/contactUs");
              }}
            >
              {buttonText}{" "}
            </Button>{" "}
          </Box>{" "}
          <Box
            w={{
              lg: "50%",
              md: "50%",
              sm: "100%",
              base: "100%",
            }}
          >
            <Image objectFit="cover" src={imgSrc} alt="image" />
          </Box>{" "}
        </Flex>{" "}
      </Box>{" "}
    </Box>
  );
};

export default TwoColumns;
