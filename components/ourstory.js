/** @format */

import { Box, Text, Button, Center } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const visibleVariants = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.75 } },
  hidden: { opacity: 0, scale: 1 },
};

const OurStory = () => {
  const router = useRouter();
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return (
    <Center
      as={motion.div}
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={visibleVariants}
      bgColor="#060F32"
    >
      <Box
        maxW={"2500px"}
        display={"flex"}
        flexDir={{ md: "row", base: "column" }}
        bgColor="#060F32"

        // h={"40rem"}
      >
        <Box
          // h={{
          // 	xl: "38rem",
          // 	lg: "43rem",
          // 	md: "52rem",
          // 	base: "35rem",
          // }}
          w={{ md: "48vw" }}
          backgroundImage="images/ourstory.jpg"
          bgPosition={"center"}
          bgSize={"cover"}
          bgRepeat={"no-repeat"}
        >
          {/* <Image  src="images/ourstory.jpg" alt="Our story"/> */}
        </Box>
        <Box
          w={{ md: "47vw" }}
          pl={{ md: "3rem", base: "2rem" }}
          pt={{ md: "3.3rem", base: "2rem" }}
          pb={{ base: "4rem" }}
          pr={{ md: "1rem", base: "2rem" }}
          fontFamily={"Gilroy"}
          textAlign={{ md: "left", base: "center" }}
        >
          <Text
            fontSize={{ md: "34px", sm: "26px" }}
            fontWeight={"semibold"}
            py={"2rem"}
            color={"#E0E8F3"}
          >
            Our Story
          </Text>
          <Text
            fontSize={"18px"}
            fontWeight={"medium"}
            color={"#C2CCF2"}
            py={"1rem"}
          >
            Here to help great businesses find great people
          </Text>
          <div
            style={{
              color: "#8089A9",
              fontSize: "13px",
              fontWeight: "500",
              lineHeight: "1.8rem",
              textAlign: "left",
            }}
          >
            <span style={{ fontWeight: "bold", color: "#E0E8F3" }}>P</span>
            &#45; PACE model (Performance, Ability, Culture and Experience)
            <br />
            <span style={{ fontWeight: "bold", color: "#E0E8F3" }}>I</span>{" "}
            &#45; Innovative methodologies <br />
            <span style={{ fontWeight: "bold", color: "#E0E8F3" }}>L</span>{" "}
            &#45; Leadership by example
            <br />{" "}
            <span style={{ fontWeight: "bold", color: "#E0E8F3" }}>O</span>{" "}
            &#45; Onus and Opportune
            <br />{" "}
            <span style={{ fontWeight: "bold", color: "#E0E8F3" }}>T</span>{" "}
            &#45; Tutelage <br />
            According to our founder, Omair Hasan Farooq, &quot;we bring you
            talent like icing on the cake because I believe in the fight against
            xenophobes and discriminatory employment procedures, and that&apos;s
            when I decided to start this company.&quot; work on principles, with
            five PILOT principles guiding the team Our dedication and commitment
            to these principles has enabled us to achieve our objectives in a
            more timely and straightforward manner.
          </div>
          <Button
            mt={"3rem"}
            fontSize={{ lg: "13px", sm: "16px" }}
            fontWeight={"550"}
            fontFamily={"Gilroy"}
            bgColor={"transparent"}
            border={"1px"}
            borderColor={"#E0E8F3"}
            borderRadius={"12px"}
            _hover={{
              borderColor: "white",
              bgColor: "#01081A",
              color: "white",
            }}
            color={"#E0E8F3"}
            px={"1.8rem"}
            py={"1.5rem"}
            onClick={() => {
              router.push("/contactUs");
            }}
          >
            Contact Us
          </Button>
        </Box>
      </Box>
    </Center>
  );
};

export default OurStory;
