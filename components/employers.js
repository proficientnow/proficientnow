/** @format */

import { Box, Text, Button, Image, Show, Center } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const visibleVariants = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.75 } },
  hidden: { opacity: 0, scale: 1 },
};

const Employers = () => {
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
      pt={{ lg: "12rem", md: "5rem", base: "5rem" }}
      pb={{ lg: "4rem", md: "5rem", base: "3rem" }}
      display={"flex"}
      flexDir={"column"}
      justifyContent={{
        lg: "end",
        md: "center",
        sm: "center",
      }}
      bgSize={{ md: "250px 400px", base: "120px 200px" }}
      bgColor={"#E0E8F3"}
    >
      <Box
        px={{
          "2xl": "25rem",
          xl: "16rem",
          lg: "10rem",
          md: "4rem",
          sm: "2.5rem",
          base: "2rem",
        }}
        textAlign={{ md: "center", base: "justify" }}
        fontFamily={"Gilroy"}
      >
        <Image
          display={{ base: "none", lg: "block" }}
          src="/images/employer-ellipse.png"
          position={"absolute"}
          zIndex={"0"}
          opacity={"90%"}
          w={"13em"}
          top={"10rem"}
          left={"0"}
        />
        <Text
          fontSize={{ md: "36px", sm: "24px" }}
          fontWeight={"medium"}
          color={"#020D45"}
          zIndex={"20"}
        >
          Take Recruitment to next level
        </Text>
        <Center>
          <Text
            zIndex={"20"}
            py={"0.5rem"}
            fontSize={{ md: "13px", sm: "17px" }}
            lineHeight={"8"}
            fontWeight={"normal"}
            letterSpacing={"wide"}
            color={"#42485A"}
            maxWidth={"1000px"}
          >
            We believe that recruiting is a fundamental part of any successful
            business. That&apos;s why we take it to the next level, by working
            with the best businesses to find the perfect candidates for their
            needs.
          </Text>
        </Center>
        <Button
          my={"2.5rem"}
          fontSize={{ lg: "13px", sm: "16px" }}
          fontWeight={"550"}
          fontFamily={"Gilroy"}
          bgColor={"white"}
          borderRadius={"12px"}
          _hover={{
            borderColor: "white",
            bgColor: "#000929",
            color: "white",
          }}
          color={"#000929"}
          px={"2rem"}
          py={"1.6rem"}
          onClick={() => {
            router.push("/contactus");
          }}
        >
          Hire people
        </Button>
      </Box>
      <Center>
        <Box
          pr={{ lg: "10.5rem", base: "2.5rem" }}
          pl={{ lg: "12rem", base: "2.5rem" }}
          maxWidth={"1500px"}
        >
          <Show above="md">
            <Image src={"/images/Group.png"} alt="proficientnow" />
          </Show>
          <Show below="md">
            <Image src={"/images/Group1.png"} alt="proficientnow" />
          </Show>
        </Box>
      </Center>
    </Box>
  );
};

export default Employers;
