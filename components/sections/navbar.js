/** @format */

import React, { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import NextLink from "next/link";

import { useSession, signOut } from "next-auth/react";
import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Image,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Modal,
  useDisclosure,
  Text,
  Link,
} from "@chakra-ui/react";

import Menu from "../icons/menu.svg";
// import Close from "../icons/close.svg"
import { CloseIcon } from "@chakra-ui/icons";

import { useRouteContext } from "../../contexts/routeContext";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const visibleVariants = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.75 } },
  hidden: { opacity: 0, scale: 1 },
};

// a function to show an active link in the navbar depending on the path
const LinkItem = ({ href, target, children, ...props }) => {
  const router = useRouter();
  const path = router.pathname;
  const active = path === href;
  const inactiveColor = "#3E4969";
  const activeColor = "#090D18";

  return (
    <NextLink href={href} passHref scroll={false}>
      <Box display={"flex"} flexDirection={"row"} m={0} p={0}>
        <Link
          p={"0px 30px 0px 0px"}
          _hover={{ color: "#000" }}
          color={active ? activeColor : inactiveColor}
          target={target}
          {...props}
        >
          {children}
        </Link>
      </Box>
    </NextLink>
  );
};

const Navbar = ({ children, path }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  // use disclosure for mobile menu modal
  const { isOpen, onOpen, onClose } = useDisclosure();
  // const path = router.pathname
  const [isUser, setIsUser] = useState(false);

  const router = useRouter();

  // const routeContext = useContext(RouteContext);
  const { setRouteState } = useRouteContext();

  const { data: session, status } = useSession();

  useEffect(() => {
    if (session && status == "authenticated") {
      setIsUser(true);
    } else {
      setIsUser(false);
    }
  }, [session, status]);

  const handleLogin = () => {
    // setRouteState(router.asPath)
    router.push("/auth/signin");
  };

  return (
    // navbar main wrapper

    <Box
      as={motion.div}
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={visibleVariants}
      px={{ lg: "2rem" }}
      bgColor={"#E0E8F3"}
      //   bgColor={"#FFF"}
      w={"full"}
      h={"70px"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      border={"none"}
      position={"sticky"}
      top={"0"}
      //   opacity={"0.8"}
      //   sx={{
      //     backgroundFilter: "blur(5px)",
      //   }}
      className={"navbar"}
      //   backdropBlur={"90px"}
      zIndex={"50"}
    >
      <Box
        w={"full"}
        maxW={"1500px"}
        mx={{ base: "1rem", lg: "2rem" }}
        justifyContent={"space-between"}
        display={"flex"}
        flexDir={"row"}
        alignItems={"center"}
      >
        {/* Logo box*/}
        <Box>
          <Link href="/">
            <Image
              src={"/images/main-logo.png"}
              alt={"logo"}
              maxW={{ base: "40", lg: "60" }}
            />
          </Link>
        </Box>
        {/* links */}
        <Box
          display={{ base: "none", lg: "flex" }}
          w={"500px"}
          fontSize={"14px"}
          fontWeight={"500"}
          flexDir={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
          color={"#090D18"}
        >
          <LinkItem href="/"> Home </LinkItem>
          <LinkItem href="/employers"> Employers </LinkItem>
          <LinkItem href="/jobs"> Find a job </LinkItem>
          <LinkItem href="/aboutus"> About Us </LinkItem>
          <LinkItem href="/contactUs">Contact Us</LinkItem>
        </Box>
        <Box display={{ base: "block", lg: "none" }}>
          <Button onClick={onOpen} variant={"unstyled"}>
            <Menu />
          </Button>
        </Box>
        <Box
          display={{ lg: "flex", sm: "none" }}
          gap={"1.2rem"}
          flexDir={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          {isUser !== true ? (
            <Button
              px={"1.5rem"}
              fontSize={"13px"}
              fontWeight={"400"}
              bgColor={"transparent"}
              _hover={{
                bgColor: "#000929",
                color: "white",
              }}
              borderRadius={"12px"}
              color={"#000929"}
              border="1px"
              borderColor={"#000929"}
              display={{ md: "inline-block", base: "none" }}
            >
              <Link
                onClick={handleLogin}
                _hover={{
                  color: "whiteAlpha.800",
                }}
              >
                Login
              </Link>
            </Button>
          ) : (
            <>
              {/* <Button
								fontSize={"13px"}
								bgColor={"transparent"}
								_hover={{
									bgColor: "#ECECEC",
									color: "#003A88",
								}}
								borderRadius={"full"}
								color={"#ECECEC"}
								px={"1.4rem"}
								pt={"0.7rem"}
								pb={"0.8rem"}
								border="1px"
								borderColor={"#ECECEC"}
							>
								<Link href={"/profile"}> Profile</Link>
							</Button> */}
              <Button
                px={"1.5rem"}
                fontSize={"13px"}
                fontWeight={"400"}
                bgColor={"transparent"}
                _hover={{
                  bgColor: "#000929",
                  color: "white",
                }}
                borderRadius={"12px"}
                color={"#000929"}
                border="1px"
                borderColor={"#000929"}
                display={{
                  md: "inline-block",
                  base: "none",
                }}
                onClick={() => {
                  signOut();
                }}
              >
                Logout
              </Button>
            </>
          )}
          {isUser !== true ? (
            <Button
              px={"1.5rem"}
              fontSize={"13px"}
              fontWeight={"500"}
              bgColor={"#000929"}
              _hover={{
                bgColor: "#000929",
                color: "white",
              }}
              borderRadius={"12px"}
              color={"#FFF"}
              border="1px"
              borderColor={"#000929"}
              display={{ md: "inline-block", base: "none" }}
            >
              <Link
                onClick={handleLogin}
                _hover={{
                  color: "whiteAlpha.800",
                }}
              >
                Signup
              </Link>
            </Button>
          ) : (
            <>
              {/* <Button
								fontSize={"13px"}
								bgColor={"transparent"}
								_hover={{
									bgColor: "#ECECEC",
									color: "#003A88",
								}}
								borderRadius={"full"}
								color={"#ECECEC"}
								px={"1.4rem"}
								pt={"0.7rem"}
								pb={"0.8rem"}
								border="1px"
								borderColor={"#ECECEC"}
							>
								<Link href={"/profile"}> Profile</Link>
							</Button> */}
              {/* <Button
                px={"1.5rem"}
                fontSize={"13px"}
                fontWeight={"500"}
                bgColor={"#000929"}
                _hover={{
                  bgColor: "#000929",
                  color: "white",
                }}
                borderRadius={"12px"}
                color={"#FFF"}
                border="1px"
                borderColor={"#000929"}
                display={{ md: "inline-block", base: "none" }}
                onClick={() => {
                  signOut();
                }}
              >
                SignOut
              </Button> */}
            </>
          )}
        </Box>
      </Box>
      {/* mobile nav */}
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size={"full"}
        motionPreset={"slideInRight"}
      >
        <ModalOverlay />
        <ModalContent bgColor={"lightgray"} backdropFilter={"blur(1px)"}>
          <ModalBody>
            {/* Here is the mobile menu header */}
            <Grid
              gridAutoFlow={"column"}
              justifyContent={"space-between"}
              w={"full"}
              alignItems={"center"}
            >
              <Image
                src={"/images/main-logo.png"}
                alt={"mobile logo"}
                minW={"120px"}
              />
              <Button variant={"unstyled"} onClick={onClose}>
                <CloseIcon color={"#000929"} />
              </Button>
            </Grid>
            {/* links */}
            <Grid
              color={"#ffffff"}
              fontSize={"15px"}
              fontWeight={"medium"}
              rowGap={"10"}
              py={"14"}
              _hover={{ color: "#A8BEC1" }}
            >
              <LinkItem href={"/"}>Home</LinkItem>
              <LinkItem href={"/employers"}>Employers</LinkItem>
              <LinkItem href={"/jobs"}>Find a job</LinkItem>
              <LinkItem href={"/aboutus"}>About us</LinkItem>
              <LinkItem href={"/contactUs"}>Contact us</LinkItem>
              {isUser !== true ? (
                <LinkItem href={"/auth/signin"}>Login</LinkItem>
              ) : (
                <></>
                // <Button
                //   fontSize={"13px"}
                //   variant={"ghost"}
                //   borderRadius={"full"}
                //   color={"#ECECEC"}
                //   display={{
                //     md: "inline-block",
                //     base: "none",
                //   }}
                //   onClick={() => {
                //     signOut();
                //   }}
                // >
                //   SignOut
                // </Button>
              )}
            </Grid>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Navbar;
