import {
  Box,
  FormControl,
  Flex,
  FormLabel,
  Input,
  Select,
  Text,
  Button,
  ButtonGroup,
  IconButton,
  InputRightElement,
  InputGroup,
  InputLeftElement,
  Link,
  value,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import Gpss from "../components/icons/location-icon.svg";
// import { IconButton } from "@chakra-ui/react";
import EastIcon from "@mui/icons-material/East";
import Location2 from "./icons/location-main.svg";
import { ArrowForwardIcon, EastOutlined } from "@mui/icons-material";
// import { ArrowForwardIcon } from "@mui/icons-material";

import Gps from "./icons/gps.svg";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const visibleVariants = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.75 } },
  hidden: { opacity: 0, scale: 1 },
};

const Hero = ({
  jobData,
  locationValue,
  jobTextValue,
  valueLoc,
  valueTitle,
  onClick,
  onChange,
  value,
  onLocClick,
}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return (
    <Box
      as={motion.div}
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={visibleVariants}
      w={"full"}
      bgColor={"#E0E8F3"}
      // bgImage={{ base: "none", md: "/images/ellipse2.png" }}
      bgRepeat="no-repeat"
      backgroundPosition={"right"}
      display={"flex"}
      p={"0"}
      // px={{ base: "1rem", xl: "3rem" }}
      justifyContent={{ base: "center", md: "center" }}
      alignItems={"center"}
    >
      <Box
        w={"1500px"}
        // p={"1rem"}
        display={"flex"}
        alignItems={{ base: "center", md: "start" }}
        justifyContent={{ base: "center", md: "center" }}
        flexDir={{ base: "row", md: "column" }}
      >
        <Box
          ml={{ base: "0", md: "2.5rem", lg: "3rem", xl: "3.65rem" }}
          py={"1rem"}
        >
          <Text
            color={"#020D45"}
            w={{ base: "300px", sm: "350px", md: "550px", lg: "750px" }}
            py={{ base: "1rem", md: "2rem" }}
            fontSize={{ sm: "1rem", md: "1.8rem", lg: "2.6rem" }}
            fontWeight={"600"}
            display={"flex"}
            alignContent={"center"}
            justifyContent={"center"}
          >
            Find more than 1000+ job vacancies every day
          </Text>
          <Box py={"2rem"}>
            <FormControl
              gap={"2rem"}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"left"}
              // w={{ base: "100%", md: "none" }}
              flexDir={{ base: "column-reverse", md: "row" }}
            >
              <InputGroup
                className="Location"
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
                w={{ base: "80vw", md: "40vw", lg: "20vw" }}
                maxW={{ base: "25rem", lg: "20rem" }}
                h={{ base: "3rem", md: "3.4rem", lg: "4.125rem" }}
                // w={{ base: "100%", sm: "322px", md: "190px", lg: "310px" }}
              >
                {/* <InputLeftElement
                  pointerEvents={"none"}
                  top={{ base: "4px", sm: "5px", md: "9px", lg: "15px" }}
                  left={{ base: "4px", sm: "5px", md: "9px", lg: "15px" }}
                >
                  <IconButton
                    colorScheme={"whiteAlpha"}
                    rounded={"3xl"}
                    aria-label="Location"
                    icon={<Location2 />}
                  />
                </InputLeftElement> */}

                {/* <Field
                  placeHolder={"Enter your location"}
                  type={"select"}
                  location={location}
                  value={
                    showLocation == true
                      ? `${location.city}`
                      : formdata.location
                  }
                  onChange={onLocationChange}
                  onClick={() => setshowLocation(true)}
                /> */}

                <Input
                  name="location"
                  value={valueLoc}
                  onChange={onChange}
                  h={{ base: "3rem", md: "3.4rem", lg: "4.125rem" }}
                  color={"#AAAFBD"}
                  bgColor={"#FFFFFF"}
                  rounded={"12px"}
                  placeholder={"Enter Location"}
                  // value={locationValue}
                  _placeholder={{
                    paddingLeft: { base: "2px" },
                    fontSize: "13px",
                  }}
                />
                <InputRightElement
                  justifySelf={"center"}
                  alignSelf={"center"}
                  display={"flex"}
                  bgColor={"transparent"}
                >
                  <IconButton
                    top={{ base: "4px", sm: "5px", md: "9px", lg: "13px" }}
                    right={{ base: "2px", sm: "3px", md: "4px", lg: "5px" }}
                    bgColor={"transparent"}
                    justifySelf={"center"}
                    alignSelf={"center"}
                    display={"flex"}
                    onClick={onLocClick}
                    icon={<Gpss />}
                  />
                </InputRightElement>
              </InputGroup>
              {/* <InputGroup
                className="Job"
                h={{ base: "3rem", md: "3.4rem", lg: "4.125rem" }}
                // w={{ base: "100%", sm: "322px", md: "310px", lg: "461px" }}
              >
                <InputRightElement
                  pointerEvents={"none"}
                  top={{ base: "4px", sm: "4px", md: "7px", lg: "12px" }}
                  size={{ base: "md", sm: "md", md: "md", lg: "lg" }}
                  right={{ base: "4px", sm: "4px", md: "7px", lg: "12px" }}
                >
                  <IconButton
                    as={Button}
                    size={{ base: "md", md: "md", lg: "lg" }}
                    bgColor={"#003A88"}
                    colorScheme={"whiteAlpha"}
                    rounded={"3xl"}
                    aria-label="Search database"
                    onClick={onClick}
                    icon={<EastOutlined />}
                  />
                </InputRightElement>

                <Input
                  name="designation"
                  value={value.designation}
                  onChange={onChange}
                  h={{ base: "3rem", md: "3.4rem", lg: "4.125rem" }}
                  // w={{ base: "100%", sm: "322px", md: "310px", lg: "461px" }}
                  bgColor={"#FFFFFF"}
                  color={"#AAAFBD"}
                  rounded={"6.25rem"}
                  // value={jobTextValue}
                  placeholder=" Search for Job"
                  _placeholder={{ paddingLeft: " 2px ", fontSize: "14px" }}
                />
              </InputGroup> */}
              <Box
                display={"flex"}
                justifyContent={"space-between"}
                alignItems={"center"}
                px={"5px"}
                h={{ base: "3rem", md: "3.4rem", lg: "4.125rem" }}
                // w={"auto"}
                bgColor={"white"}
                borderRadius={"12px"}
                w={{ base: "80vw", md: "40vw", lg: "30vw" }}
                maxW={"25rem"}
              >
                <Input
                  name="designation"
                  value={valueTitle}
                  onChange={onChange}
                  h={{ base: "3rem", md: "3.4rem", lg: "4.125rem" }}
                  // w={{ base: "100%", sm: "322px", md: "310px", lg: "461px" }}
                  bgColor={"#FFFFFF"}
                  color={"#AAAFBD"}
                  rounded={"12px"}
                  _focusVisible={false}
                  border={"none"}
                  // value={jobTextValue}
                  placeholder=" Search for Job"
                  _placeholder={{ paddingLeft: " 2px ", fontSize: "13px" }}
                />
                <IconButton
                  as={Button}
                  _hover={{
                    bgColor: "white",
                    color: "#000929",
                  }}
                  // size={{ base: "md", md: "md", lg: "lg" }}
                  w={{ base: "2.9em", md: "3.25rem", lg: "3.5rem" }}
                  h={{ base: "2.4rem", md: "3rem", lg: "3.2rem" }}
                  border={"1px"}
                  borderColor={"#000929"}
                  bgColor={"#000929"}
                  colorScheme={"whiteAlpha"}
                  rounded={"12px"}
                  aria-label="Search database"
                  onClick={onClick}
                  icon={<EastOutlined />}
                />
              </Box>
            </FormControl>
            {/* <Flex
              flexDir={"row"}
              px={"0.5rem"}
              alignItems={"center"}
              justifyContent={"start"}
            >
              <Gps />
              <Link
                color="#020D45"
                px={"0.75rem"}
                fontSize="16px"
                fontWeight="400"
                lineHeight={{ base: "2.5rem", sm: "3rem" }}
                onClick={onLocClick}
              >
                Auto detect location
              </Link>
            </Flex> */}
          </Box>
          <Box
            pt={"2rem"}
            display={{ base: "flex", md: "flex" }}
            justifyContent={{ base: "center", md: "start" }}
          >
            <Text
              color={"#000000"}
              fontSize={{ base: "0.875rem", md: "1.75rem" }}
              fontWeight={"600"}
            >
              {jobData.length} jobs found for you
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
