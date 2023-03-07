import React, { useRef, useState } from "react";
import fetch from "isomorphic-unfetch";
import {
  Heading,
  InputGroup,
  Box,
  Image,
  Stack,
  Input,
  InputRightElement,
  Button,
  Text,
  useToast,
  useColorMode,
} from "@chakra-ui/react";
import Logo from "./icons/logo.svg";

const Subscribe = () => {
  const [email, setEmail] = useState("");
  const inputEl = useRef(null);
  const toast = useToast();
  const { colorMode } = useColorMode();
  const bgColor = {
    light: "blue.50",
    dark: "blue.900",
  };
  const borderColor = {
    light: "blue.200",
    dark: "blue.900",
  };

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const subscribe = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/subscribe", {
      body: JSON.stringify({
        email: inputEl.current.value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const { error } = await res.json();

    if (error) {
      toast({
        title: "Oopsie 🙊 Did Something Go Wrong?.",
        description: error,
        status: "error",
        duration: 5000,
        isClosable: true,
      });

      return;
    }

    inputEl.current.value = "";
    toast({
      title: "Success!",
      description: `Subscribed 🎉 ! We'll Definitely Let You Know When We Go Live!`,
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <Box px={"16"} py={"12"} h={"100vh"}>
      <Box>
        {" "}
        {/* <Image src='/logo.svg' alt='logo' /> */} <Logo />
      </Box>{" "}
      <Box
        w={"full"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        flexDir={"column"}
        h={"80vh"}
      >
        <Text
          color={"#898989"}
          fontFamily={"sans-serif"}
          fontSize={"16px"}
          fontWeight={"medium"}
        >
          Coming Soon{" "}
        </Text>{" "}
        <Text
          fontSize={"46"}
          fontWeight={"semibold"}
          fontFamily={"sans-serif"}
          bgGradient="linear(to-r, black, gray.500)"
          bgClip={"text"}
        >
          We are building something great{" "}
        </Text>{" "}
        <Text
          color={"#888888"}
          fontSize={"14"}
          fontWeight={"medium"}
          fontFamily={"sans-serif"}
        >
          Our brand new website is getting ready{" "}
        </Text>{" "}
        <Stack
          py={"12px"}
          w={"710px"}
          borderColor={"#EEEEEE"}
          bgColor={"#F8F8F8"}
          display={"flex"}
          direction={"row"}
          px={"10px"}
          my={"4"}
          borderRadius={"full"}
          justifyContent={"space-between"}
        >
          <Input
            ref={inputEl}
            value={email}
            onChange={handleChange}
            type="email"
            border={"none"}
            _focusVisible={"none"}
            placeholder="Enter your email address"
            pl={"4"}
          />{" "}
          <Button
            onClick={subscribe}
            _hover={{ bgColor: "black" }}
            bgColor={"#2056F3"}
            borderRadius={"full"}
            color={"#ffffff"}
            fontWeight={"medium"}
            px={"8"}
            py={"6"}
          >
            Get notified{" "}
          </Button>{" "}
        </Stack>{" "}
        <Text
          fontFamily={"sans-serif"}
          fontSize={"14"}
          fontWeight={"medium"}
          color={"#808080"}
        >
          Till then tell us how your business is going{" "}
        </Text>{" "}
      </Box>{" "}
    </Box>
  );
};

export default Subscribe;
