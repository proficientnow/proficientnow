/** @format */

import React, { useEffect, useState } from "react";
import { Box, Text, Button } from "@chakra-ui/react";
import NextLink from "next/link";
import { useRouter } from "next/router";

import ArrowRight from "./icons/arrowRight.svg";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const visibleVariants = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.75 } },
  hidden: { opacity: 0, scale: 1 },
};

const ChatUs = ({ title, description, buttonText }) => {
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
      w={"full"}
      alignItems={"center"}
      display={"flex"}
      justifyContent={"center"}
    >
      <Box
        maxW="1500px"
        py={{ base: "8rem", lg: "11rem" }}
        mx={{
          base: "1rem",
          md: "1.5rem",
          lg: "2rem",
          xl: "3rem",
          "2xl": "4rem",
        }}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Box
          borderRadius="12px"
          // h="440px"
          bg={"#00072C"}
          display="flex"
          flexDirection="column"
          justifyContent={{
            base: "center",
            md: "flex-start",
          }}
        >
          <Box
            mx={{ base: "2rem", md: "3rem", lg: "rem" }}
            mt={{
              base: "2rem",
              md: "3rem",
              lg: "4rem",
              "2xl": "5rem",
            }}
            display={"flex"}
            flexDir={"column"}
            justifyContent={{
              base: "center",
              md: "flex-start",
            }}
            alignItems={{
              base: "center",
              md: "flex-start",
            }}
            maxWidth={{ md: "80%", lg: "55%", xl: "55%" }}
          >
            <Text
              fontWeight={"600"}
              fontSize={{
                base: "1.4rem",
                lg: "1.5rem",
                xl: "1.7rem",
                "2xl": "2rem",
              }}
              lineHeight={{ base: "1rem", xl: "2rem" }}
              color="#FFFFFF"
              fontFamily={"Gilroy"}
            >
              Want to chat with Us?
            </Text>{" "}
            <Text
              my={{
                base: "1.5rem",
                lg: "2.4rem",
                "2xl": "4rem",
              }}
              fontWeight={"400"}
              fontSize={{
                base: "0.8rem",
                lg: "1rem",
                xl: "0.8rem",
                "2xl": "1rem",
              }}
              // w={"100%"}
              lineHeight={"2rem"}
              color="#FFFFFF"
            >
              At Proficient Now we are ready to help you take your business to
              the next level with our global talent solutions. Our company is
              great because of our people. We promise to work hard and care
              about your business and career more than anyone else.
            </Text>{" "}
            <Box
              mb={{
                base: "1.2rem",
                md: "2rem",
                lg: "3rem",
              }}
            >
              <Button
                color="#000929"
                as={"Box"}
                variant="solid"
                borderRadius={"12px"}
                w={"11rem"}
                rightIcon={<ArrowRight />}
                // px={"3rem"}
                py={"1.5rem"}
                cursor={"pointer"}
                fontSize={"0.9rem"}
                fontWeight={"600"}
                onClick={() => {
                  router.push("/contactUs");
                }}
              >
                Contact Us
              </Button>{" "}
            </Box>{" "}
          </Box>{" "}
        </Box>{" "}
      </Box>
    </Box>
  );
};

export default ChatUs;
