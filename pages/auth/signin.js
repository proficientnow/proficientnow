/** @format */

import React, { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Box, Button, Heading, Center, Text, Spinner } from "@chakra-ui/react";
import { useSession, signIn } from "next-auth/react";
// import Google from "next-auth/providers/google"
// import Facebook from "next-auth/providers/facebook"
// import LinkedIn from "next-auth/providers/linkedin"

import ScrollImg from "../../components/sections/scrollImg";
import Proficentnowlogo from "../../components/icons/profientnowlogo.svg";

import { useRouteContext } from "../../contexts/routeContext";

const Signin = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const { routeState } = useRouteContext();

  // const {routeState, setRouteState,user,setUser} = useContext(RouteContext);

  console.log(routeState);

  useEffect(() => {
    if (session) {
      console.log(session);
      setUser({
        user,
        session: {
          ...session,
        },
      });
    }
  }, [session]);

  if (status == "loading") {
    return (
      <Box
        bgColor={"#003A88"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        w={"100vw"}
        h={"100vh"}
        columnGap={"2rem"}
      >
        <Box
          bgColor={"whiteAlpha.400"}
          borderRadius={"lg"}
          borderWidth={"1px"}
          borderColor={"whiteAlpha.500"}
          backdropBlur={"3xl"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          w={"50%"}
          py={"5rem"}
          columnGap={"2rem"}
        >
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="primary"
            size="xl"
          />
          <Heading color={"black"}>Checking Authentication...</Heading>
        </Box>
      </Box>
    );
  }

  if (session) {
    setTimeout(() => {
      router.push(routeState);
      // router.push('/')
    }, 2000);

    return (
      <Box
        bgColor={"#003A88"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        w={"100vw"}
        h={"100vh"}
        columnGap={"2rem"}
      >
        <Box
          bgColor={"whiteAlpha.400"}
          borderRadius={"lg"}
          borderWidth={"1px"}
          borderColor={"whiteAlpha.500"}
          backdropBlur={"3xl"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          w={"50%"}
          py={"5rem"}
          columnGap={"2rem"}
        >
          <Spinner
            thickness="4px"
            speed="0.75s"
            emptyColor="gray.200"
            color="primary"
            size="xl"
          />
          <Heading color={"black"}>
            You are signed in let&apos;s head back
          </Heading>
        </Box>
      </Box>
    );
  }

  const handleOAuthSignIn = (provider) => () =>
    // signIn(provider, {
    // 	callBackUrl: user,
    // })
    signIn(provider, {
      callbackUrl: routeState,
    });

  return (
    <Center bgColor={"#00092"}>
      <Box
        maxWidth={"2000px"}
        h={"full"}
        display={"flex"}
        // alignItems={"center"}
        flexDir={{ base: "column", lg: "row" }}
      >
        <Box
          //   h={{ lg: "100vh" }}
          px={{ base: "1rem", lg: "2.8rem" }}
          pt={{ base: "2rem", lg: "2rem" }}
          display={"flex"}
          flexDir={"column"}
          w={{ base: "full", lg: "50%" }}
        >
          <Box>
            <Proficentnowlogo />
          </Box>
          <Box
            minWidth={{ base: "90%", md: "70%", lg: "70%" }}
            justifySelf={"center"}
            alignSelf={"center"}
            // mx={{ md: "5rem", lg: "6rem" }}
            mt={{ base: "2rem", lg: "3rem" }}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            flexDir={"column"}
          >
            <Text fontWeight={"600"} fontSize={"1.8rem"} lineHeight={"2.3rem"}>
              Hey! Let&apos;s sign in
            </Text>
            <Text
              color={"#636C7E"}
              fontSize={"1rem"}
              fontWeight={"400"}
              lineHeight={"1.8rem"}
              my={"0.5rem"}
            >
              It&apos;s free and easy
            </Text>
            <Button
              borderRadius={"1rem"}
              onClick={handleOAuthSignIn("google")}
              my={"2.3rem"}
              h={"3.9rem"}
              w={"full"}
            >
              Sign in with Google
            </Button>
            <Button
              disabled={true}
              borderRadius={"1rem"}
              my={"2.3rem"}
              h={"3.9rem"}
              w={"full"}
            >
              Sign in with Facebook
            </Button>
            <Button
              disabled={true}
              borderRadius={"1rem"}
              my={"2.3rem"}
              h={"3.9rem"}
              w={"full"}
            >
              Sign in with Linkedin
            </Button>
          </Box>
        </Box>
        <Box w={{ base: "full", lg: "60%" }} bgColor={"#000929"}>
          <Center display={"flex"} flexDir={"column"}>
            <Box pt={"7rem"}>
              <Text
                color={"white"}
                fontWeight={"700"}
                fontSize={"1.8rem"}
                lineHeight={"3rem"}
              >
                Login to your workplace
              </Text>
              <Text
                textAlign={"center"}
                color={"#B4CBFF"}
                fontWeight={"500"}
                fontSize={"1rem"}
              >
                Get curated jobs
              </Text>
            </Box>
            <ScrollImg />
          </Center>
        </Box>
      </Box>
    </Center>
  );
};

export default Signin;
// onClick={handleOAuthSignIn("google")}
