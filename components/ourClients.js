import { Flex, Image, Box, Text } from "@chakra-ui/react";
import Marquee from "react-fast-marquee";
import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const visibleVariants = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.75 } },
  hidden: { opacity: 0, scale: 1 },
};

export const OurClients = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  const clients = [
    {
      id: 1,
      src: "/images/clientsLogo/1.png",
      h: "35px",
      invert: "grayscale(1)",
    },
    {
      id: 2,
      src: "/images/clientsLogo/2.png",
      h: "30px",
      invert: "grayscale(1)",
    },
    {
      id: 3,
      src: "/images/clientsLogo/3.png",
      h: "30px",
      invert: "grayscale(1)",
    },
    {
      id: 4,
      src: "/images/clientsLogo/4.png",
      h: "30px",
      invert: "grayscale(1)",
    },
    {
      id: 5,
      src: "/images/clientsLogo/5.png",
      h: "35px",
      invert: "grayscale(1)",
    },
    {
      id: 6,
      src: "/images/clientsLogo/6.png",
      h: "30px",
      invert: "grayscale(1)",
    },
    {
      id: 7,
      src: "/images/clientsLogo/7.png",
      h: "35px",
      invert: "grayscale(1)",
    },
    {
      id: 8,
      src: "/images/clientsLogo/8.png",
      h: "30px",
      invert: "grayscale(1)",
    },
    {
      id: 9,
      src: "/images/clientsLogo/9.png",
      h: "30px",
      invert: "grayscale(1)",
    },
    {
      id: 10,
      src: "/images/clientsLogo/10.png",
      h: "50px",
      invert: "grayscale(1)",
    },
    {
      id: 11,
      src: "/images/clientsLogo/11.png",
      h: "30px",
      invert: "grayscale(1)",
    },
    {
      id: 12,
      src: "/images/clientsLogo/12.png",
      h: "30px",
      invert: "grayscale(1)",
    },
    {
      id: 13,
      src: "/images/clientsLogo/13.png",
      h: "30px",
      invert: "grayscale(1)",
    },
    {
      id: 14,
      src: "/images/clientsLogo/14.png",
      h: "30px",
      invert: "grayscale(1)",
    },
    {
      id: 15,
      src: "/images/clientsLogo/15.png",
      h: "30px",
      invert: "grayscale(1)",
    },
    // {
    //   id: 16,
    //   src: "/images/clientsLogo/16.png",
    //   h: "40px",
    //   invert: "grayscale(1)",
    // },
    {
      id: 17,
      src: "/images/clientsLogo/17.png",
      h: "30px",
      invert: "grayscale(1)",
    },
    {
      id: 18,
      src: "/images/clientsLogo/18.png",
      h: "30px",
      invert: "grayscale(1)",
    },
    {
      id: 19,
      src: "/images/clientsLogo/19.png",
      h: "50px",
      invert: "grayscale(1)",
    },
    {
      id: 20,
      src: "/images/clientsLogo/20.png",
      h: "25px",
      invert: "grayscale(1)",
    },
  ];

  return (
    <Flex
      as={motion.div}
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={visibleVariants}
      alignItems={"center"}
      justifyContent={"center"}
      flexDir={"column"}
      bgColor={"#000929"}
      py={{ base: "2.5rem", lg: "6rem" }}
      gap={"5rem"}
    >
      <Text
        color={"white"}
        fontSize={{ base: "0.75rem", sm: "1.25rem", md: "1.5rem" }}
        fontWeight={"500"}
      >
        Happy matches: ProficientNow&quot;s valued clients
      </Text>
      <Marquee pauseOnHover={true} speed={15} gradient={false}>
        <Flex
          // flexWrap={"wrap"}
          mx={"2.5rem"}
          gap={{ base: "2.5rem", lg: "5rem" }}
          justifyContent={"center"}
          alignItems={"center"}
        >
          {clients.map((client) => {
            return (
              <Image
                key={client.id}
                style={{
                  aspectRatio: "auto",
                  filter: "brightness(3.00) ",
                  mixBlendMode: "hard-light",
                }}
                src={client.src}
                h={client.h}
              />
            );
          })}
        </Flex>
      </Marquee>
    </Flex>
  );
};
