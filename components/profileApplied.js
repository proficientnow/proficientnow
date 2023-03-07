import {
  Box,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Link,
  Text,
  Switch,
  Flex,
} from "@chakra-ui/react";
import Building from "./icons/building.svg";
import Location from "./icons/locations.svg";
import Money from "./icons/money.svg";
import Clock from "./icons/clock.svg";
import React from "react";

const ProfileApplied = ({
  designation,
  company,
  location,
  salary,
  shift,
  date,
}) => {
  return (
    <Box
      w={"full"}
      px={{ base: "2rem", md: "2.5rem", xl: "3rem" }}
      py={4}
      cursor={"pointer"}
      rounded={"30px"}
      shadow={"sm"}
      bg={"white"}
      borderColor={"#ECEBF3"}
      borderWidth={"1px"}
      display={"flex"}
      alignItems={"start"}
      justifyContent={"center"}
      flexDir={"column"}
    >
      <Flex
        flexDir={"column"}
        // mt={2}
        fontSize={{ base: "1rem", md: "1.1rem", xl: "1.2rem" }}
        color="#000000"
        lineHeight={"3rem"}
        fontWeight="600"
      >
        {designation}
      </Flex>
      <Flex flexDir={{ base: "column", xl: "row" }} flexWrap={"wrap"}>
        <Flex alignItems={"center"}>
          <Building />
          <Text
            color="#646464"
            px={19}
            fontSize="0.9rem"
            fontWeight="400"
            lineHeight={{ base: "1.8rem", md: "3rem" }}
          >
            {company}
          </Text>
        </Flex>
        <Flex alignItems={"center"}>
          <Location />
          <Text
            color="#646464"
            px={19}
            fontSize="0.9rem"
            fontWeight="400"
            lineHeight={{ base: "1.8rem", md: "3rem" }}
          >
            {location}
          </Text>
        </Flex>

        <Flex alignItems={"center"}>
          <Money />
          <Text
            color="#646464"
            px={19}
            fontSize="0.9rem"
            fontWeight="400"
            lineHeight={{ base: "1.8rem", md: "3rem" }}
          >
            {salary}
          </Text>
        </Flex>
        <Flex alignItems={"center"}>
          <Clock />
          <Text
            color="#646464"
            px={19}
            fontSize="0.9rem"
            fontWeight="400"
            lineHeight={{ base: "1.8rem", md: "3rem" }}
          >
            {shift}
          </Text>
        </Flex>
      </Flex>
      <Text
        color="#000"
        py={"15px"}
        fontSize="0.9rem"
        fontWeight="400"
        lineHeight={"1.5rem"}
        display={"block"}
        maxW={"70%"}
        fontStyle={"italic"}
      >
        Applied on {date}
      </Text>
    </Box>

    /* Upcoming Feature */
    /* <Box
        w={"1500px"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        flexDir={"column"}
        pt={{ base: "1rem", sm: "2rem", md: "4rem" }}
        pb={{ base: "2rem", sm: "4rem", md: "8rem" }}
        px={{ base: "1rem", sm: "2rem", md: "4rem" }}
      >
        <Box>
          <FormControl>
            <FormLabel fontSize={"0.85rem"} fontWeight={"600"} px={"7px"}>
              Name
            </FormLabel>
            <Input
              type="email"
              w={{ base: "15rem", sm: "19.3rem", md: "30rem" }}
              h={{ base: "3rem", sm: "3.3rem", md: "3.75rem" }}
              bg={"#FFFFFF"}
              borderRadius={"14px"}
              border={"1px"}
              borderColor={"#E9ECF3"}
              placeholder={"@name of the person"}
              _placeholder={{ fontWeight: "400", fontcolor: "#6E8BAE" }}
            />
          </FormControl>
          <FormControl pt={"3.125rem"} pb={"3.75rem"}>
            <FormLabel fontSize={"0.85rem"} fontWeight={"600"} px={"7px"}>
              Password
            </FormLabel>
            <Input
              type="password"
              w={{ base: "15rem", sm: "19.3rem", md: "30rem" }}
              h={{ base: "3rem", sm: "3.3rem", md: "3.75rem" }}
              bg={"#FFFFFF"}
              borderRadius={"14px"}
              border={"1px"}
              borderColor={"#E9ECF3"}
              placeholder={"***************"}
              _placeholder={{ fontWeight: "400", fontcolor: "#6E8BAE" }}
            />
            <FormHelperText textAlign="left" px={"7px"}>
              <Link color={"#003A88"} fontSize={"0.85rem"} fontWeight={"600"}>
                Forgot Password?
              </Link>
            </FormHelperText>
          </FormControl>
        </Box>
        <Box
          w={{ base: "15rem", sm: "19.3rem", md: "30rem" }}
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Box
            display={"flex"}
            flexDir={"column"}
            gap={"12px"}
            px={"3px"}
            justifyContent={"start"}
            // justifyItems={"start"}
            alignContent={"start"}
            // alignItems={"start"}
          >
            <Text color={"#17191C"} fontSize={"0.85rem"} fontWeight={"600"}>
              Email Notification
            </Text>
            <Text color={"#637E9F"} fontSize={"0.85rem"} fontWeight={"400"}>
              Get notified with emails on notifications
            </Text>
          </Box>
          <Switch size={"lg"} colorScheme={"facebook"} />
        </Box>
      </Box> */
  );
};

export default ProfileApplied;
