/** @format */

import { Box, Text, Image, Center } from "@chakra-ui/react";
import React, { useEffect } from "react";
import Star from "./icons/star.svg";
import Img from "./icons/recruiter.svg";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const visibleVariants = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.75 } },
  hidden: { opacity: 0, scale: 1 },
};

const Recuriter = ({ title, description, boxDescription }) => {
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
      bgColor="#E7E6F8"
    >
      <Box
        // fontFamily={"Gilroy"}
        w={"1500px"}
        display={"flex"}
        flexDir={{ base: "column-reverse", md: "row" }}
        height={"auto"}
      >
        <Box
          bgColor={"#E7E6F8"}
          w={"full"}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          maxWidth={{ md: "70%", lg: "50%", xl: "42.5%" }}
        >
          <Box
            // my={{ base: "3rem", lg: "3.5rem", xl: "7rem" }}
            mx={{
              base: "1.5rem",
              lg: "4rem",
              xl: "4rem",
              "2xl": "5rem",
            }}
            pr={{ lg: "4rem" }}
          >
            <Text
              fontWeight={"600"}
              fontSize={{
                base: "1.8rem",
                md: "1.3rem",
                lg: "1.5rem",
                xl: "1.8rem",
                "2xl": "2.2rem",
              }}
            >
              Recommended recruiter{" "}
            </Text>{" "}
            <Text
              py={"2rem"}
              fontWeight={500}
              fontSize={{
                base: "0.9rem",
                lg: "0.7rem",
                xl: "0.8rem",
                "2xl": "1.2rem",
              }}
              lineHeight={{
                base: "1.4rem",
                md: "1rem",
                lg: "1.8rem",
                "2xl": "2.2rem",
              }}
              color={"#8F8EA5"}
            >
              Don&apos;t have an internal hiring team? We&apos;ve got you
              covered! Our recommended recruiter feature suggests freelance
              recruiters you can book to help you find your dream candidate.
            </Text>{" "}
            <Box
              borderRadius={"20px"}
              color={"#24205C"}
              bg={"#D0CDFC"}
              py={{ base: "0.5rem", xl: "1.5rem" }}
              my={{ base: "1rem", xl: "1.5rem" }}
              display={"flex"}
            >
              <Center
                p={"0.25rem"}
                borderRadius={"full"}
                borderWidth={"1.5px"}
                borderColor={"#24205C"}
                h={"2rem"}
                mx={{ base: "1rem", lg: "1.5rem" }}
                my={"1rem"}
              >
                <Star />
              </Center>
              <Text
                mr={{ base: "1.5rem", lg: "2rem" }}
                color={"#24205C"}
                fontWeight={"500"}
                lineHeight={{
                  base: "2rem",
                  md: "1rem",
                  lg: "1rem",
                  xl: "1.8rem",
                  "2xl": "2.2rem",
                }}
                fontSize={{
                  base: "0.9rem",

                  "2xl": "1.2rem",
                }}
              >
                Trust ProficientNow, a premier hiring company, to provide expert
                and efficient service in sourcing, screening and placing top
                talent for your business. Let us be your hiring partner and
                elevate your team to new heights.
              </Text>{" "}
            </Box>{" "}
          </Box>{" "}
        </Box>{" "}
        <Box h={"100%"}>
          <Image
            display={{ md: "inline-block", base: "none" }}
            alt="hello"
            src="/images/recommended.png"
            h={"100%"}
          />
          <Image
            display={{ md: "none", base: "inline-block" }}
            alt="hello"
            w={"full"}
            src="/images/recommendedSM.png"
          />
        </Box>{" "}
      </Box>
    </Box>
  );
};

export default Recuriter;
