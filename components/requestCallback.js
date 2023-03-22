/** @format */

import {
  Box,
  Text,
  Button,
  Image,
  FormLabel,
  Input,
  InputGroup,
  InputLeftAddon,
  Select,
} from "@chakra-ui/react";
import React, { useState } from "react";
import JobForm from "./findJobForm";
import CallIcon from "./icons/call.svg";
import FormText from "./sections/formControl";
import TwoForm from "./sections/twoForm";
import ButtonForm from "./sections/buttonForm";
// import MuiPhoneNumber from "material-ui-phone-number";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { createContact } from "../lib/backendCalls";
import { useToast } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { RouteContext, useRouteContext } from "../contexts/routeContext";

const RequestCall = ({ title, description }) => {
  const { routeState, setRouteState, user, setUser } = useRouteContext();

  const router = useRouter();
  const toast = useToast();
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    // companyName: "",
    mobile: "",
    attendedTo: false,
  });

  console.log(contactForm);
  const [submit, setSubmit] = useState(false);

  const onNameChange = (e) => {
    setContactForm({
      ...contactForm,
      name: e.target.value,
    });
  };
  // console.log(contactForm);

  const onMailChange = (e) => {
    setContactForm({
      ...contactForm,
      email: e.target.value,
    });
  };
  const onNumberChange = (e) => {
    setContactForm({
      ...contactForm,
      mobile: e.target?.value,
    });
  };
  const errorMsg = () => {
    alert("Enter all fields");
  };

  const onSubmit = async () => {
    {
      contactForm.name === "" ||
      contactForm.email === "" ||
      contactForm.mobile === ""
        ? toast({
            title: "Error!",
            description: "Enter all fields",
            status: "error",
            position: "top",
            duration: 9000,
            isClosable: true,
          })
        : createContact(contactForm).then((res) => {
            toast({
              title: "Submitted Successfully",
              description: "We will contact you soon",
              status: "success",
              position: "top",

              duration: 9000,
              isClosable: true,
            });
            setContactForm({
              name: "",
              email: "",
              // companyName: "",
              mobile: "",
            });
          });
    }
  };
  return (
    <Box
      w={"full"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}

      //   flexFlow={{ md: "column", base: "row" }}
    >
      <Box
        maxWidth={"1500px"}
        w={"full"}
        display={"flex"}
        gap={{ base: "1rem", lg: "4rem" }}
        flexDir={{
          base: "column",
          md: "column",
          lg: "row",
        }}
        px={{ base: "2.2rem", md: "6rem" }}
        py={{
          base: "3rem",
          md: "2rem",
          lg: "5rem",
        }}
      >
        <Box
          //   w={{ base: "100%", md: "100%" }}
          w={{ base: "100%", lg: "50%" }}
          py={{ base: "3rem", md: "5rem" }}
          display={"flex"}
          flexDir={"column"}
          // justifyContent="center"
        >
          <Image
            display={{ base: "none", lg: "block" }}
            src="/images/request.png"
            position={"absolute"}
            zIndex={"0"}
            w={"6em"}
            left={"0"}
          />
          {/* <
            bg={"#E2F5FF"}
            borderRadius={"full"}
            p={{ base: "0.8rem", md: "2rem", lg: "1rem" }}
            w={"fit-content"}
            my={"0.5rem"}
          > */}
          <Image w={"55px"} src="/request.png" />
          <Text
            fontWeight={"500"}
            fontSize={{ base: "1.8rem", md: "2.5rem" }}
            lineHeight={{ base: "3.5rem", md: "4rem" }}
          >
            {"Request a call back"}{" "}
          </Text>{" "}
          <Text
            color={"#757575"}
            fontSize={{ base: "1rem" }}
            lineHeight={{ base: "1rem", md: "2rem" }}
            letterSpacing={"2%"}
          >
            Share your details and we&apos;d love to connect.{" "}
          </Text>{" "}
        </Box>{" "}
        <Box
          w={{ base: "100%", lg: "50%" }}
          my={{ base: "2rem", md: "5rem" }}
          display={"flex"}
          flexDir={"column"}
          alignItems={"center"}
          justifyContent={"end"}
        >
          <Box
            w={{ base: "100%" }}
            mx={"8rem"}
            display={"flex"}
            flexDir={"column"}
            alignItems={"start"}
            justifyContent={"center"}
          >
            <FormLabel
              pl={"0.25rem"}
              fontWeight={"500"}
              fontSize={"0.8rem"}
              textAlign={"left"}
            >
              Full Name
            </FormLabel>
            <Input
              heading={"Name"}
              h={"3.25rem"}
              placeHolder={"Enter your full name"}
              _placeholder={{
                fontSize: "0.7rem",
              }}
              type={"text"}
              borderRadius={"10px"}
              border={"1px solid #DCE1EF"}
              bgColor={"#F8F9FC"}
              onChange={onNameChange}
              value={contactForm.name}
            />{" "}
            <Box
              mt={{ base: "1rem", md: "2rem" }}
              w={"full"}
              display={"flex"}
              flexDir={{ base: "column", md: "row" }}
              justifyContent={"space-between"}
            >
              <Box
                w={{ base: "100%", md: "48%" }}
                display={"flex"}
                flexDir={"column"}
              >
                <FormLabel
                  pl={"0.25rem"}
                  fontWeight={"500"}
                  fontSize={"0.8rem"}
                  textAlign={"left"}
                >
                  Email
                </FormLabel>
                <Input
                  heading={"Email"}
                  h={"3.25rem"}
                  placeHolder={"Enter your email"}
                  _placeholder={{
                    fontSize: "0.7rem",
                  }}
                  type={"email"}
                  borderRadius={"10px"}
                  border={"1px solid #DCE1EF"}
                  bgColor={"#F8F9FC"}
                  onChange={onMailChange}
                  value={contactForm.email}
                />
              </Box>
              <Box
                mt={{ base: "1rem", md: "0rem" }}
                w={{ base: "100%", md: "48%" }}
                display={"flex"}
                flexDir={"column"}
              >
                <FormLabel
                  pl={"0.25rem"}
                  fontWeight={"500"}
                  fontSize={"0.8rem"}
                  textAlign={"left"}
                >
                  Phone
                </FormLabel>
                <Input
                  style={{
                    width: "100%",
                    fontSize: "0.8rem",
                    backgroundColor: "#F8F9Fc",
                    height: "3.25rem",
                    alignSelf: "end",
                    border: "1px solid #DCE1EF",
                    borderRadius: "10px",
                  }}
                  _placeholder={{
                    fontSize: "0.7rem",
                  }}
                  placeholder={"Enter your phone number"}
                  onChange={onNumberChange}
                  value={contactForm.mobile}
                />

                {/* <PhoneInput
                  inputStyle={{
                    width: "100%",
                    fontSize: "0.8rem",
                    backgroundColor: "#F8F9Fc",
                    height: "3.25rem",
                    alignSelf: "end",
                    border: "1px solid #DCE1EF",
                    borderRadius: "10px",
                  }}
                  country="in"
                  enableAreaCodes={false}
                  enableSearch={true}
                  disabled={false}
                  // onChange={onNumberChange}
                  value={contactForm.mobile}
                /> */}
              </Box>
            </Box>{" "}
            <Box
              w={"full"}
              my={{ base: "1rem", md: "3rem" }}
              textAlign="center"
            >
              <Button
                onClick={onSubmit}
                bg={"#000929"}
                fontWeight={"600"}
                color="white"
                _hover={{
                  color: "#000929",
                  background: "white",
                  border: "1px solid #000929",
                }}
                w={"full"}
                //   mt={"4rem"}
                my={{
                  base: "1rem",
                  md: "1rem",
                }}
                borderRadius={"10px"}
                h={{ base: "3.2rem", lg: "3.8rem" }}
              >
                Submit
              </Button>
              <Text
                //   mt={"1rem"}
                fontWeight={"500"}
                fontSize={"0.8rem"}
                color={"#757575"}
                textAlign={"left"}
              >
                Please note: This form is only for companies looking to hire
                roles.{" "}
              </Text>{" "}
            </Box>{" "}
            {/* <Button
                                                mt={{ base: "2rem", md: "4rem" }}
                                                bg={"#0D01B8"}
                                                fontWeight={"600"}
                                                color="white"
                                                w={"full"}
                                                // mt={"2rem"}
                                                borderRadius={"25px"}
                                                h={"3.2rem"}
                                              >
                                                {buttonText}
                                              </Button> */}{" "}
          </Box>{" "}
        </Box>{" "}
      </Box>
    </Box>
  );
};

export default RequestCall;
