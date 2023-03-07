/** @format */

import NextLink from "next/link";

import React, { useEffect } from "react";
import { Box, Grid, GridItem, Image, Link, Text } from "@chakra-ui/react";
// import FooterContent from "./footerContent";

import LogoFooter from "../icons/logoFooter.svg";
import footerData from "../../data/static/footerData.json";
import { css } from "@emotion/css";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const visibleVariants = {
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.75 },
  },
  hidden: { opacity: 0, scale: 1 },
};

const FooterContent = ({ content }) => {
  return content.map((data, index) => {
    return (
      //footer content
      <GridItem
        key={index}
        display="flex"
        justifyContent={{ lg: "center" }}
        my={"1rem"}
      >
        <Box display={"flex"} flexDir={"column"} mt={{ lg: "3rem" }}>
          <Text
            mb={"2rem"}
            color={"white"}
            fontSize={{
              base: "1.7rem",
              md: "2.5rem",
              lg: "1.1rem",
            }}
            fontWeight="600"
          >
            {data.title}
          </Text>
          <Box display={"flex"} flexDir={"column"} gap={"0.1rem"}>
            {data.Links.map((link, index) => {
              return (
                <Text
                  my={{ base: "0.75rem", md: "1.25rem" }}
                  color={"#B9B9BB"}
                  fontWeight={"500"}
                  fontSize={{
                    base: "1.2rem",
                    md: "2rem",
                    lg: "0.8rem",
                  }}
                  key={index}
                >
                  <NextLink passHref href={link.href}>
                    {link.title}
                  </NextLink>
                </Text>
              );
            })}
          </Box>
        </Box>
      </GridItem>
    );
  });
};

const Footer = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const address = [
    {
      id: 1,
      country: "USA",
      branch: "Main : ",
      address: "748 Dalton Ln, Bolingbrook, IL 60490",
      phone: "",
      email: "",
    },
    {
      id: 2,
      country: "India",
      branch: "Branch : ",
      address:
        "ProficientNow Recruitment OPC Pvt. Ltd. 5th Floor, B Block, 8-2-120/113, Road no. 2 Banjara Hills Hyderabad Telangana India 500034",
      phone: "",
      email: "",
    },
  ];

  const contact = [
    {
      id: 1,
      path: "M61.44,0A61.44,61.44,0,1,1,0,61.44,61.44,61.44,0,0,1,61.44,0ZM30.73,38,62,63.47,91.91,38Zm-2,42.89L51,58.55,28.71,40.39V80.87ZM53.43,60.55l-22.95,23H92.21l-21.94-23L63,66.71h0a1.57,1.57,0,0,1-2,0l-7.59-6.19Zm19.24-2,21.5,22.54V40.19L72.67,58.51Z",
      email: "Info@proficientnow.com",
    },
    {
      id: 2,
      path: "M61.44,0A61.44,61.44,0,1,1,0,61.44,61.44,61.44,0,0,1,61.44,0ZM30.73,38,62,63.47,91.91,38Zm-2,42.89L51,58.55,28.71,40.39V80.87ZM53.43,60.55l-22.95,23H92.21l-21.94-23L63,66.71h0a1.57,1.57,0,0,1-2,0l-7.59-6.19Zm19.24-2,21.5,22.54V40.19L72.67,58.51Z",
      email: "HR@proficientnow.com",
    },
    {
      id: 3,
      path: "M61.44,0A61.44,61.44,0,1,1,0,61.44,61.44,61.44,0,0,1,61.44,0ZM30.73,38,62,63.47,91.91,38Zm-2,42.89L51,58.55,28.71,40.39V80.87ZM53.43,60.55l-22.95,23H92.21l-21.94-23L63,66.71h0a1.57,1.57,0,0,1-2,0l-7.59-6.19Zm19.24-2,21.5,22.54V40.19L72.67,58.51Z",
      email: "Ebrown@proficientnow.com",
    },
    {
      id: 4,
      path: "M33.84,50.25c4.13,7.45,8.89,14.6,15.07,21.12c6.2,6.56,13.91,12.53,23.89,17.63c0.74,0.36,1.44,0.36,2.07,0.11 c0.95-0.36,1.92-1.15,2.87-2.1c0.74-0.74,1.66-1.92,2.62-3.21c3.84-5.05,8.59-11.32,15.3-8.18c0.15,0.07,0.26,0.15,0.41,0.21 l22.38,12.87c0.07,0.04,0.15,0.11,0.21,0.15c2.95,2.03,4.17,5.16,4.2,8.71c0,3.61-1.33,7.67-3.28,11.1 c-2.58,4.53-6.38,7.53-10.76,9.51c-4.17,1.92-8.81,2.95-13.27,3.61c-7,1.03-13.56,0.37-20.27-1.69 c-6.56-2.03-13.17-5.38-20.39-9.84l-0.53-0.34c-3.31-2.07-6.89-4.28-10.4-6.89C31.12,93.32,18.03,79.31,9.5,63.89 C2.35,50.95-1.55,36.98,0.58,23.67c1.18-7.3,4.31-13.94,9.77-18.32c4.76-3.84,11.17-5.94,19.47-5.2c0.95,0.07,1.8,0.62,2.25,1.44 l14.35,24.26c2.1,2.72,2.36,5.42,1.21,8.12c-0.95,2.21-2.87,4.25-5.49,6.15c-0.77,0.66-1.69,1.33-2.66,2.03 c-3.21,2.33-6.86,5.02-5.61,8.18L33.84,50.25L33.84,50.25L33.84,50.25z",
      phone: "+91 9347408217",
    },
    {
      id: 5,
      path: "M33.84,50.25c4.13,7.45,8.89,14.6,15.07,21.12c6.2,6.56,13.91,12.53,23.89,17.63c0.74,0.36,1.44,0.36,2.07,0.11 c0.95-0.36,1.92-1.15,2.87-2.1c0.74-0.74,1.66-1.92,2.62-3.21c3.84-5.05,8.59-11.32,15.3-8.18c0.15,0.07,0.26,0.15,0.41,0.21 l22.38,12.87c0.07,0.04,0.15,0.11,0.21,0.15c2.95,2.03,4.17,5.16,4.2,8.71c0,3.61-1.33,7.67-3.28,11.1 c-2.58,4.53-6.38,7.53-10.76,9.51c-4.17,1.92-8.81,2.95-13.27,3.61c-7,1.03-13.56,0.37-20.27-1.69 c-6.56-2.03-13.17-5.38-20.39-9.84l-0.53-0.34c-3.31-2.07-6.89-4.28-10.4-6.89C31.12,93.32,18.03,79.31,9.5,63.89 C2.35,50.95-1.55,36.98,0.58,23.67c1.18-7.3,4.31-13.94,9.77-18.32c4.76-3.84,11.17-5.94,19.47-5.2c0.95,0.07,1.8,0.62,2.25,1.44 l14.35,24.26c2.1,2.72,2.36,5.42,1.21,8.12c-0.95,2.21-2.87,4.25-5.49,6.15c-0.77,0.66-1.69,1.33-2.66,2.03 c-3.21,2.33-6.86,5.02-5.61,8.18L33.84,50.25L33.84,50.25L33.84,50.25z",
      phone: "+1 331-231-3581",
    },
  ];

  const mediahandles = [
    {
      key: 1,
      href: "https://www.facebook.com/ProficientNow",

      path: "M15,3C8.373,3,3,8.373,3,15c0,6.016,4.432,10.984,10.206,11.852V18.18h-2.969v-3.154h2.969v-2.099c0-3.475,1.693-5,4.581-5 c1.383,0,2.115,0.103,2.461,0.149v2.753h-1.97c-1.226,0-1.654,1.163-1.654,2.473v1.724h3.593L19.73,18.18h-3.106v8.697 C22.481,26.083,27,21.075,27,15C27,8.373,21.627,3,15,3z",
    },
    {
      key: 2,
      href: "https://www.instagram.com/proficientnow",
      path: "M 9.9980469 3 C 6.1390469 3 3 6.1419531 3 10.001953 L 3 20.001953 C 3 23.860953 6.1419531 27 10.001953 27 L 20.001953 27 C 23.860953 27 27 23.858047 27 19.998047 L 27 9.9980469 C 27 6.1390469 23.858047 3 19.998047 3 L 9.9980469 3 z M 22 7 C 22.552 7 23 7.448 23 8 C 23 8.552 22.552 9 22 9 C 21.448 9 21 8.552 21 8 C 21 7.448 21.448 7 22 7 z M 15 9 C 18.309 9 21 11.691 21 15 C 21 18.309 18.309 21 15 21 C 11.691 21 9 18.309 9 15 C 9 11.691 11.691 9 15 9 z M 15 11 A 4 4 0 0 0 11 15 A 4 4 0 0 0 15 19 A 4 4 0 0 0 19 15 A 4 4 0 0 0 15 11 z",
    },
    {
      key: 3,
      href: "https://www.linkedin.com/company/proficientnow-inc/",
      path: "M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.105,4,24,4z M10.954,22h-2.95 v-9.492h2.95V22z M9.449,11.151c-0.951,0-1.72-0.771-1.72-1.72c0-0.949,0.77-1.719,1.72-1.719c0.948,0,1.719,0.771,1.719,1.719 C11.168,10.38,10.397,11.151,9.449,11.151z M22.004,22h-2.948v-4.616c0-1.101-0.02-2.517-1.533-2.517 c-1.535,0-1.771,1.199-1.771,2.437V22h-2.948v-9.492h2.83v1.297h0.04c0.394-0.746,1.356-1.533,2.791-1.533 c2.987,0,3.539,1.966,3.539,4.522V22z",
    },
    {
      key: 4,
      href: "https://twitter.com/ProficientNow",
      path: "M28,6.937c-0.957,0.425-1.985,0.711-3.064,0.84c1.102-0.66,1.947-1.705,2.345-2.951c-1.03,0.611-2.172,1.055-3.388,1.295 c-0.973-1.037-2.359-1.685-3.893-1.685c-2.946,0-5.334,2.389-5.334,5.334c0,0.418,0.048,0.826,0.138,1.215 c-4.433-0.222-8.363-2.346-10.995-5.574C3.351,6.199,3.088,7.115,3.088,8.094c0,1.85,0.941,3.483,2.372,4.439 c-0.874-0.028-1.697-0.268-2.416-0.667c0,0.023,0,0.044,0,0.067c0,2.585,1.838,4.741,4.279,5.23 c-0.447,0.122-0.919,0.187-1.406,0.187c-0.343,0-0.678-0.034-1.003-0.095c0.679,2.119,2.649,3.662,4.983,3.705 c-1.825,1.431-4.125,2.284-6.625,2.284c-0.43,0-0.855-0.025-1.273-0.075c2.361,1.513,5.164,2.396,8.177,2.396 c9.812,0,15.176-8.128,15.176-15.177c0-0.231-0.005-0.461-0.015-0.69C26.38,8.945,27.285,8.006,28,6.937z",
    },
  ];

  function Phone({ phone, ...props }) {
    return <a href={`tel:${phone}`}>{props.children}</a>;
  }

  function Mailto({ email, subject, body, ...props }) {
    return (
      <a href={`mailto:${email}?subject=${subject || ""}&body=${body || ""}`}>
        {props.children}
      </a>
    );
  }

  return (
    //overall foooter layout
    <Box>
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
        bg="#100F1F"
      >
        <Box
          w={"1500px"}
          bg="#100F1F"
          mx={{ base: "1rem", md: "2rem", lg: "1.6rem" }}
          flexDir={"column"}
        >
          <Grid
            gridAutoFlow={{ lg: "column", sm: "row" }}
            // h={"auto"}
            gridTemplateColumns={{
              lg: "repeat(1,2fr 1fr 1fr 2fr)",
              // sm: "repeat(1,2fr 1fr 1fr 1fr 1fr 2fr)",
            }}
            gap={3}
          >
            <GridItem
              // w="100%"
              py={{
                base: "4.2rem",
                md: "4rem",
                lg: "3.1rem",
              }}
              display={"flex"}
              // alignItems="center"
              justifyContent={{
                base: "flex-start",
                lg: "start",
              }}
            >
              <Box mx={{ md: "5rem", lg: "1.6rem" }}>
                <LogoFooter
                  className={css`
                    transform: scale(1);
                  `}
                />
              </Box>
            </GridItem>
            <FooterContent content={footerData[0].content} />
            <GridItem
              display="flex"
              justifyContent={{ lg: "center" }}
              my={"1rem"}
            >
              <Box display={"flex"} flexDir={"column"} mt={{ lg: "3rem" }}>
                <Text
                  mb={"2rem"}
                  color={"white"}
                  fontSize={{
                    base: "1.7rem",
                    md: "2.5rem",
                    lg: "1.1rem",
                  }}
                  fontWeight="600"
                >
                  Get In Touch
                </Text>
                {contact.map((data) => {
                  return (
                    <Box
                      key={data.id}
                      display={"flex"}
                      alignItems={"center"}
                      gap={"0.5rem"}
                    >
                      <Box
                        as="svg"
                        fill="#C2D8DF"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 130 130"
                        width={{ base: "15px", lg: "20px" }}
                        height={{
                          base: "15px",
                          lg: "20px",
                        }}
                      >
                        {" "}
                        <path d={data.path} />
                      </Box>
                      <Text
                        my={{
                          base: "0.75rem",
                          md: "1.25rem",
                        }}
                        color={"#B9B9BB"}
                        fontWeight={"500"}
                        fontSize={{
                          base: "1.2rem",
                          md: "2rem",
                          lg: "0.8rem",
                        }}
                      >
                        <Mailto
                          fontWeight={"450"}
                          email={data.email}
                          subject=""
                          body=""
                        >
                          {data.email}
                        </Mailto>

                        <Phone phone={data.phone}> {data.phone} </Phone>
                      </Text>
                    </Box>
                  );
                })}
              </Box>
            </GridItem>
            <GridItem
              display="flex"
              justifyContent={{ lg: "center" }}
              my={"1rem"}
            >
              <Box
                py={{
                  base: "3.5rem",
                  md: "4rem",
                  lg: "3.1rem",
                }}
                pb={{ base: "2rem", md: "0" }}
                display={"flex"}
                gap={"1em"}
                flexDir={"column"}
                justifyContent={{
                  base: "flex-start",
                  lg: "start",
                }}
              >
                <Text
                  mb={"1rem"}
                  color={"white"}
                  fontSize={{
                    base: "1.6rem",
                    md: "2.5rem",
                    lg: "1.1rem",
                  }}
                  fontWeight="600"
                >
                  Office Locations
                </Text>
                {address.map((data) => {
                  return (
                    <Box
                      key={data.id}
                      color={"#B9B9BB"}
                      fontWeight={"500"}
                      fontSize={{
                        base: "0.8rem",
                        md: "1.5rem",
                        lg: "0.9rem",
                      }}
                      mt={"1rem"}
                      display={"flex"}
                      flexDir={"column"}
                      gap={"0.4em"}
                    >
                      <Text
                        pb={"0.4rem"}
                        color={"#FFFF"}
                        fontWeight={"600"}
                        fontSize={"1.1rem"}
                      >
                        {data.country}
                      </Text>
                      <Text fontWeight={"600"} w={"35ch"}>
                        {data.branch}
                        <Text
                          as={"span"}
                          color={"#FFFFFF80"}
                          fontWeight={"450"}
                        >
                          {data.address}
                        </Text>
                      </Text>
                      {/* <Text>
                        Phone :{" "}
                        <Text as={"span"} fontWeight={"450"}>
                          {data.phone}
                        </Text>
                      </Text>
                      <Text>
                        Email :{" "}
                        <Text as={"span"} fontWeight={"450"}>
                          {data.email}
                        </Text>
                      </Text> */}
                    </Box>
                  );
                })}
              </Box>
            </GridItem>
          </Grid>
        </Box>
      </Box>
      <Box
        // mt={"2rem"}
        bg={"#1D1D26"}
        w={"100%"}
        py={{ base: "0.25rem", lg: "0" }}
        h={"3.8rem"}
        display={"flex"}
        flexDirection={{ base: "column", lg: "row" }}
        alignItems={"center"}
        justifyContent={"space-between"}
        px={{ lg: "3rem" }}
      >
        <Box
          fontWeight={"500"}
          color={"#284955"}
          display={"flex"}
          // flexDir={{ base: "column",' lg: "row" }}
          gap={"0.75rem"}
          alignItems={"center"}
        >
          <Text color={"#FFF"}>ProficientNow © 2022</Text>
          {mediahandles.map((media) => {
            return (
              <Link key={media.key} target={"_blank"} href={media.href}>
                <Box
                  as="svg"
                  fill="lightblue"
                  // display={{base:"hidden",lg:"flex"}}
                  _hover={{
                    fill: "white",
                    transition: "ease",
                    transitionDuration: "0.5s",
                  }}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 30 30"
                  width={{ base: "20px", lg: "28px" }}
                  height={{ base: "20px", lg: "28px" }}
                >
                  {" "}
                  <path d={media.path} />
                </Box>
              </Link>
            );
          })}
        </Box>
        <Box
          width="fit-content"
          display={"flex"}
          flexDir={"row"}
          justifyContent="center"
        >
          <Text color={"white"}>Built by the folks at</Text>
          <NextLink href={"https://www.websleak.com"}>
            <Text
              color={"lightblue"}
              fontWeight={"500"}
              pl={"1"}
              cursor={"pointer"}
              _before={{
                textUnderlineOffset: "10px",
              }}
              _hover={{
                color: "white",
                textDecoration: "underline",
                textUnderlineOffset: "3px",
                transition: "ease",
                transitionDuration: "1.15s",
              }}
            >
              Websleak
            </Text>
          </NextLink>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
