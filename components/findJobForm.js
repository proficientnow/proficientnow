import { Box, Center, Text, Button } from "@chakra-ui/react";
import React from "react";
import ButtonForm from "./sections/buttonForm";
import FormText from "./sections/formControl";

const JobForm = ( { title, button, children } ) => {
  return (
    <Box
      w={ "100%" }
      // mx={"1rem"}
      display={ "flex" }
      flexDir={ "column" }
      alignItems={ "center" }
      justifyContent={ "center" }
      bg={ "white" }
      borderRadius={ "25px" }
    >
      <Center mt={ "2rem" } mx={ "1.5rem" }>
        <Text fontSize={ "1.25rem" } fontWeight={ "600" } lineHeight="1.3rem">
          { " " }
          { title }{ " " }
        </Text>{ " " }
      </Center>{ " " }
      <Box w={ "full" } mt={ "rem" } mx={ "1.5rem" }>
        { " " }
        { children }
      </Box>{ " " }
      <ButtonForm buttonText={ button } />
    </Box>
  );
};

export default JobForm;
