import React from "react";
import {
  Box,
  Text,
  FormControl,
  FormLabel,
  Field,
  Input,
} from "@chakra-ui/react";

const TwoForm = (heading, placeHolder) => {
  return (
    <FormControl my={"2rem"}>
      <FormLabel color={"#585C66"}> {heading} </FormLabel>{" "}
      <Input placeholder={placeHolder} />
    </FormControl>
  );
};

export default TwoForm;
