import React from "react";
import { Button } from "@chakra-ui/react";

const ButtonForm = ( { buttonText, onClick } ) => {
  return (
    <Button
      onClick={ onClick }
      bg={ "#0D01B8" }
      fontWeight={ "600" }
      color="white"
      w={ "full" }
      //   mt={"4rem"}
      my={ { base: "1rem", md: "1rem", lg: "1.5rem", xl: "1rem" } }
      borderRadius={ "25px" }
      h={ { base: "3.2rem", lg: "3.8rem" } }
    >
      { buttonText }
    </Button>
  );
};

export default ButtonForm;
