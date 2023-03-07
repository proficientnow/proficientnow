/** @format */

import React, { useState } from "react";
import {
  Box,
  color,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftAddon,
  Link,
  Select,
  Text,
  Value,
  onClick,
  InputRightElement,
  IconButton,
} from "@chakra-ui/react";
import Gpss from "../icons/location-icon.svg";

const Field = ({
  type,
  selectOptions,
  placeHolder,
  children,
  onChange,
  onClick,
  inputType,
  value,
  location,
}) => {
  //form elements

  switch (type) {
    case "textField":
      return (
        <Input
          mb={"1.5rem"}
          fontSize={"0.7rem"}
          h={{ base: "3.2rem", lg: "3.25rem" }}
          color={"#848484"}
          bg={"white"}
          borderRadius="10px"
          placeholder={placeHolder}
          onChange={onChange}
          type={inputType}
          value={value}
        />
      );

    case "select":
      return (
        <Box>
          <InputGroup display={"flex"}>
            <Input
              fontSize={"0.7rem"}
              h={{ base: "3.2rem", lg: "3.25rem" }}
              color={"#AAAFBD"}
              bg={"white"}
              borderRadius="10px"
              placeholder="Enter your location"
              onChange={onChange}
              value={value}
            />
            <InputRightElement
              justifySelf={"center"}
              alignSelf={"center"}
              display={"flex"}
              bgColor={"transparent"}
            >
              <IconButton
                bgColor={"transparent"}
                justifySelf={"center"}
                alignSelf={"center"}
                display={"flex"}
                mt={"11px"}
                onClick={onClick}
                icon={<Gpss />}
              />
            </InputRightElement>
          </InputGroup>
          {/* <Box mt={"10px"} display={"flex"}>
            <Link
              color={"#000929"}
              _hover={{ color: "#00092940" }}
              fontWeight={"500"}
              display={"flex"}
              flexDir={"row"}
              onClick={onClick}
            >
              <Box mr={"5px"} mt={"2px"}>
              <Gpss />
              </Box>
              Auto detect location
            </Link>
          </Box> */}
        </Box>
      );
    case "select":
      return (
        <Box>
          <Select
            fontSize={"0.7rem"}
            h={{ base: "3.2rem", lg: "3.8rem" }}
            color={"#AAAFBD"}
            bg={"#E7EDFF"}
            borderRadius="full"
            placeholder="Select city"
            onChange={onChange}
          />
        </Box>
      );
    case "number":
      return (
        <InputGroup>
          <InputLeftAddon
            borderRadius="full"
            h={{ base: "3.2rem", lg: "3.8rem" }}
            color={"#AAAFBD"}
          ></InputLeftAddon>
          <Input
            fontSize={"0.7rem"}
            h={{ base: "3.2rem", lg: "3.8rem" }}
            color={"#AAAFBD"}
            bg={"#E7EDFF"}
            borderRadius="full"
            type="tel"
            placeholder={placeHolder}
            onChange={onChange}
          />
        </InputGroup>
      );

    default:
      break;
  }
};

const FormText = ({
  heading,
  placeHolder,
  type,
  selectOptions,
  onChange,
  onClick,
}) => {
  return (
    <FormControl mt={{ base: "0.5rem", md: "1.2rem" }}>
      <FormLabel color={"#585C66"}> {heading} </FormLabel>
      <Field
        placeHolder={placeHolder}
        selectOptions={selectOptions}
        type={type}
        onChange={onChange}
        onClick={onClick}
      />
    </FormControl>
  );
};

export default Field;
