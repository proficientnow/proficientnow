import { Box, Text, Button, Flex, Show } from "@chakra-ui/react";
import { bgcolor } from "@mui/system";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const visibleVariants = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.75 } },
  hidden: { opacity: 0, scale: 1 },
};

const WhyProficientNow = ({
  title,
  description,
  sideDescription,
  buttonText,
  candidatesHired,
  happyEmployers,
}) => {
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
      justifyContent={"Center"}
      bgColor={"#060F32"}
    >
      <Flex
        maxWidth={"1500px"}
        mx={{ lg: "6.5rem", md: "2.5rem", base: "2.5rem" }}
        my={{ md: "10rem" }}
        mt={{ base: "7rem" }}
        mb={{ base: "3rem" }}
        flexDir={{ md: "row", base: "column" }}
        gap={"2rem"}
        justifyContent={"space-between"}
        alignItems={"start"}
      >
        <Box w={{ xl: "46%", lg: "70%", md: "70%", base: "full" }}>
          <Text
            color={"white"}
            fontSize={"1.8rem"}
            fontWeight={"semibold"}
            fontFamily={"Gilroy"}
            pb={"1.2rem"}
          >
            {title}{" "}
          </Text>{" "}
          <Text
            color={"#D1D2D6"}
            fontSize={{ md: "13px", base: "1.2rem" }}
            fontWeight={"medium"}
            fontFamily={"Gilroy"}
            pb={"1.2rem"}
            lineHeight={{ md: "7", base: "10" }}
            textAlign={{ base: "justify" }}
          >
            {description}{" "}
          </Text>{" "}
          <Show above={"md"}>
            <Button
              onClick={() => {
                router.push("/contactUs");
              }}
              // variant={"blueBg"}
              w={{ lg: "10rem" }}
              py={"1.5rem"}
              bgColor={"transparent"}
              border={"1px"}
              borderColor={"white"}
              color={"white"}
              borderRadius={"12px"}
              _hover={{
                color: "#000929",
                bgColor: "white",
              }}
            >
              {buttonText}{" "}
            </Button>{" "}
          </Show>{" "}
        </Box>{" "}
        <Box
          w={{ xl: "46%", lg: "70%", md: "70%", base: "full" }}
          display={"flex"}
          flexDir={"column"}
          alignSelf={"center"}
        >
          {/* <Text
            fontSize={{ md: "13px", base: "1.2rem" }}
            fontWeight={"medium"}
            fontFamily={"Gilroy"}
            color={"#828AA0"}
            pb={"1.2rem"}
            lineHeight={{ md: "7", base: "10" }}
          >
            Our founder - Omair Hasan Farooq states that We bring you talent
            just like the icing on the cake I believe in the fight against
            xenophobes and discriminatory employment procedures and that’s when
            I decided to work on principles, guiding the team by five PILOT
            principles. <br></br> P – PACE model (Performance, Ability, Culture
            and Experience)
            <br /> I – Innovative methodologies <br />L – Leadership by example
            <br />O – Onus and Opportune
            <br />T – Tutelage <br />
            Our dedication and commitment to these principles have led us to
            achieve the targeted goals in a quicker and simpler way.,
          </Text> */}
          <Box
            w={{ base: "full" }}
            justifyContent={{ base: "space-between", md: "space-around" }}
            alignItems={"center"}
            textAlign={"left"}
            display={"flex"}
          >
            <Box mx={{ base: "1.5rem", "2xl": "1.8rem" }}>
              <Text
                pb={{ base: "1rem", md: "0.2rem" }}
                color={"white"}
                fontSize={{ base: "1.6rem", xl: "2rem" }}
                fontWeight={"semibold"}
                fontFamily={"Gilroy"}
              >
                {candidatesHired}{" "}
              </Text>{" "}
              <Text
                color={"#D1D2D6"}
                fontSize={{ md: "14px", base: "1.15rem" }}
                fontWeight={"medium"}
                fontFamily={"Gilroy"}
              >
                Candidates Hired{" "}
              </Text>{" "}
            </Box>{" "}
            <Box mx={"1.5rem"}>
              <Text
                pb={{ base: "1rem", md: "0.2rem" }}
                color={"white"}
                fontSize={{ base: "1.6rem", xl: "2rem" }}
                fontWeight={"semibold"}
                fontFamily={"Gilroy"}
              >
                {happyEmployers}{" "}
              </Text>{" "}
              <Text
                color={"#D1D2D6"}
                fontSize={{ md: "14px", base: "1.15rem" }}
                fontWeight={"medium"}
                fontFamily={"Gilroy"}
              >
                Happy Employers{" "}
              </Text>{" "}
            </Box>{" "}
          </Box>{" "}
        </Box>
        <Show below={"md"} textAlign={"left"}>
          <Button
            onClick={() => {
              router.push("/contactUs");
            }}
            // variant={"blueBg"}
            w={"10rem"}
            py={"1.5rem"}
            bgColor={"transparent"}
            border={"1px"}
            borderColor={"white"}
            color={"white"}
            borderRadius={"12px"}
            _hover={{
              bgcolor: "black",
            }}
          >
            {buttonText}{" "}
          </Button>{" "}
        </Show>{" "}
      </Flex>
    </Box>
  );
};

export default WhyProficientNow;
