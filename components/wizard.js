/** @format */

import React, { useRef, useState } from "react";
// Chakra imports
import {
  Box,
  Button,
  Radio,
  RadioGroup,
  Flex,
  FormControl,
  FormLabel,
  Grid,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
  useBreakpointValue,
  Image,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  Divider,
  Link,
  chakra,
  IconButton,
} from "@chakra-ui/react";
import {
  SingleDatepicker,
  SingleDatepickerProps,
} from "chakra-dayzed-datepicker"; // Custom components
import { BsCircleFill } from "react-icons/bs";
import {
  CalendarIcon,
  AttachmentIcon,
  EmailIcon,
  PhoneIcon,
} from "@chakra-ui/icons";

import Calender  from "./icons/calendar1.svg";
import { MdModeEdit } from "react-icons/md";
import FinishedIcon from "../public/images/finishedicon.png";

import { onJobApply } from "../lib/backendCalls";

function Wizard({
  formValues,
  handleChange,
  onSubmit,
  gender,
  setGender,
  date,
  setDate,
  resume,
  onResumeChange,
}) {
  const [activeBullets, setActiveBullets] = useState({
    PersonalDetails: true,
    AddressDetails: false,
    ProfessionalDetails: false,
    ResumeDetails: false,
    FinishedDetails: false,
  });

  const PersonalDetailsTab = useRef();
  const AddressDetailsTab = useRef();
  const ProfessionalDetailsTab = useRef();
  const ResumeDetailsTab = useRef();

  // File Upload Input field:
  const hiddenFileInput = React.useRef(null);

  const handleFileClick = (event) => {
    hiddenFileInput.current.click();
  };

  const handleFileChange = (event) => {
    const fileUploaded = event.target.files[0];
    handleFile(fileUploaded);
  };

  const [confirmUpdate, setConfirmUpdate] = useState(false);

  const tabVariant = useBreakpointValue({
    base: "vertical",
    lg: "horizontal",
  });

  return (
    <Flex
      w={"80vw"}
      direction="column"
      minH="80vh"
      justifyContent={"center"}
      alignItems={{ lg: "center", base: "space-between" }}
      pt={{ sm: "1.5rem", lg: "1rem" }}
    >
      {confirmUpdate == false ? (
        <Tabs
          maxW={"1500px"}
          w={"full"}
          orientation={tabVariant}
          variant={"line"}
          display="flex"
          flexDirection={{ lg: "column", base: "row" }}
          justifyContent={{ base: "start", md: "center" }}
        >
          <TabList
            display="flex"
            alignItems={{ md: "start" }}
            justifyContent={{ base: "start", md: "center" }}
            gap={"3rem"}
          >
            <Tab
              ref={PersonalDetailsTab}
              _focus="none"
              gap={"0.5rem"}
              // w={{ sm: "5rem", md: "10rem", lg: "15rem", xl:'15rem' }}
              onClick={() =>
                setActiveBullets({
                  PersonalDetails: true,
                  AddressDetails: false,
                  ProfessionalDetails: false,
                  ResumeDetails: false,
                })
              }
            >
              <Flex
                direction="row"
                gap={"0.5rem"}
                justify="end"
                align="center"
                minH={{ base: "4rem", md: "0" }}
                position="relative"
              >
                <Icon
                  display={{ base: "none", md: "block" }}
                  as={BsCircleFill}
                  color={activeBullets.PersonalDetails ? "#000929" : "#003A88"}
                  w={activeBullets.PersonalDetails ? "16px" : "12px"}
                  h={activeBullets.PersonalDetails ? "16px" : "12px"}
                />

                <Text
                  color={activeBullets.PersonalDetails ? "#000929" : "black"}
                  fontWeight={activeBullets.PersonalDetails ? "bold" : "normal"}
                  display={{ base: "none", md: "block" }}
                  fontSize="15px"
                  textAlign={"left"}
                >
                  Personal Details
                </Text>
              </Flex>
            </Tab>
            <Tab
              ref={AddressDetailsTab}
              _focus="none"
              // w={{ sm: "120px", md: "250px", lg: "20rem" }}
              gap={"0.5rem"}
              onClick={() =>
                setActiveBullets({
                  PersonalDetails: true,
                  AddressDetails: true,
                  ProfessionalDetails: false,
                  ResumeDetails: false,
                })
              }
            >
              <Flex
                direction="row"
                gap={"0.5rem"}
                justify="center"
                align="center"
                position="relative"
                minH={{ base: "4rem", md: "0" }}
              >
                <Icon
                  display={{ base: "none", md: "block" }}
                  as={BsCircleFill}
                  color={activeBullets.AddressDetails ? "#000929" : "#003A88"}
                  w={activeBullets.AddressDetails ? "16px" : "12px"}
                  h={activeBullets.AddressDetails ? "16px" : "12px"}
                />
                <Text
                  color={activeBullets.AddressDetails ? "#000929" : "black"}
                  fontWeight={activeBullets.AddressDetails ? "bold" : "normal"}
                  // transition="all .3s ease"
                  fontSize="15px"
                  textAlign={"left"}
                  display={{ base: "none", md: "block" }}
                >
                  Contact Details
                </Text>
              </Flex>
              {/* <Divider width={'8rem'} borderColor={activeBullets.AddressDetails ? "#003A88" : "black"}/> */}
            </Tab>
            <Tab
              ref={ProfessionalDetailsTab}
              _focus="none"
              // w={{ sm: "120px", md: "250px", lg: "22rem" }}
              gap={"0.5rem"}
              onClick={() =>
                setActiveBullets({
                  PersonalDetails: true,
                  AddressDetails: true,
                  ProfessionalDetails: true,
                  ResumeDetails: false,
                })
              }
            >
              <Flex
                direction="row"
                gap={"0.5rem"}
                justify="center"
                align="center"
                position="relative"
                minH={{ base: "4rem", md: "0" }}
              >
                <Icon
                  display={{ base: "none", md: "block" }}
                  as={BsCircleFill}
                  color={
                    activeBullets.ProfessionalDetails ? "#000929" : "#003A88"
                  }
                  w={activeBullets.ProfessionalDetails ? "16px" : "12px"}
                  h={activeBullets.ProfessionalDetails ? "16px" : "12px"}
                />
                <Text
                  color={
                    activeBullets.ProfessionalDetails ? "#000929" : "black"
                  }
                  fontWeight={
                    activeBullets.ProfessionalDetails ? "bold" : "normal"
                  }
                  // transition="all .3s ease"
                  fontSize="sm"
                  _hover={{ color: "#000929" }}
                  display={{ sm: "none", md: "block" }}
                  textAlign={"left"}
                >
                  Professional Details
                </Text>
              </Flex>
              {/* <Divider width={'8rem'} borderColor={activeBullets.ProfessionalDetails ? "#003A88" : "black"}/> */}
            </Tab>
            <Tab
              ref={ResumeDetailsTab}
              _focus="none"
              // w={{ sm: "120px", md: "250px", lg: "12rem" }}
              onClick={() =>
                setActiveBullets({
                  PersonalDetails: true,
                  AddressDetails: true,
                  ProfessionalDetails: true,
                  ResumeDetails: true,
                })
              }
            >
              <Flex
                direction="row"
                gap={"0.5rem"}
                justify="center"
                align="center"
                position="relative"
                minH={{ base: "4rem", md: "0" }}
              >
                <Icon
                  display={{ base: "none", md: "block" }}
                  as={BsCircleFill}
                  color={activeBullets.ResumeDetails ? "#000929" : "#003A88"}
                  w={activeBullets.ResumeDetails ? "16px" : "12px"}
                  h={activeBullets.ResumeDetails ? "16px" : "12px"}
                />
                <Text
                  color={activeBullets.ResumeDetails ? "#000929" : "black"}
                  fontWeight={activeBullets.ResumeDetails ? "bold" : "normal"}
                  fontSize="sm"
                  display={{ base: "none", md: "block" }}
                  textAlign={"left"}
                >
                  Resume
                </Text>
              </Flex>
            </Tab>
          </TabList>
          <TabPanels mt={{ sm: "2rem", md: "6rem", lg: "8rem" }} w={"100%"}>
            <TabPanel w={"100%"}>
              <Flex direction="column" w="100%">
                <Stack
                  direction={{ sm: "column", lg: "row" }}
                  spacing={{
                    base: "1rem",
                    md: "2rem",
                    lg: "4rem",
                  }}
                  justifyContent={"space-between"}
                  mb="1rem"
                  pb={{ base: "0", lg: "2rem" }}
                >
                  <FormControl isRequired>
                    <FormLabel fontSize="xs" pl={"0.5rem"} fontWeight="bold">
                      Full Name
                    </FormLabel>
                    <Input
                      borderRadius="10px"
                      name="fullname"
                      onChange={handleChange}
                      value={formValues.firstName}
                      placeholder="Enter your full name"
                      fontSize="xs"
                      borderColor={"#DCE1EF"}
                      bgColor={"#F8F9FC"}
                      // value={`${formData.fullName}`}
                      // onChange={ ( e ) => { e.preventDefault(); setFormData( formData.fullName = e.target.value ); console.log( formData.fullName ) } }
                      p={"25px"}
                      _placeholder={{
                        color: "#AFB2BF",
                        fontWeight: "500",
                      }}
                    />
                  </FormControl>
                  <FormControl isRequired>
                    <FormLabel fontSize="xs" fontWeight="bold">
                      Date of Birth
                    </FormLabel>
                    <InputGroup>
                      <InputRightElement>
                      <Box mt={"9px"}><Calender /></Box>
                      </InputRightElement>
                        {/* <IconButton
                          // bgColor={"transparent"}
                          // justifySelf={"center"}
                          // alignSelf={"center"}
                          // display={"flex"}
                          // mt={"11px"}
                          onClick={()=>{console.log("hello")}}
                          icon={<Calender />}
                        /> */}
                        {/* <Icon viewBox="0 0 24 24" fill={"none"}>
                          <path
                            d="M8 2V5"
                            stroke="#292D32"
                            stroke-width="1.5"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M16 2V5"
                            stroke="#292D32"
                            stroke-width="1.5"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M16 3.5C19.33 3.68 21 4.95 21 9.65V15.83C21 19.95 20 22.01 15 22.01H9C4 22.01 3 19.95 3 15.83V9.65C3 4.95 4.67 3.69 8 3.5H16Z"
                            stroke="#292D32"
                            stroke-width="1.5"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M20.75 17.6001H3.25"
                            stroke="#292D32"
                            stroke-width="1.5"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M12 8.25C10.77 8.25 9.73 8.92 9.73 10.22C9.73 10.84 10.02 11.31 10.46 11.61C9.85 11.97 9.5 12.55 9.5 13.23C9.5 14.47 10.45 15.24 12 15.24C13.54 15.24 14.5 14.47 14.5 13.23C14.5 12.55 14.15 11.96 13.53 11.61C13.98 11.3 14.26 10.84 14.26 10.22C14.26 8.92 13.23 8.25 12 8.25ZM12 11.09C11.48 11.09 11.1 10.78 11.1 10.29C11.1 9.79 11.48 9.5 12 9.5C12.52 9.5 12.9 9.79 12.9 10.29C12.9 10.78 12.52 11.09 12 11.09ZM12 14C11.34 14 10.86 13.67 10.86 13.07C10.86 12.47 11.34 12.15 12 12.15C12.66 12.15 13.14 12.48 13.14 13.07C13.14 13.67 12.66 14 12 14Z"
                            fill="#292D32"
                          />
                        </Icon> */}
                      {/* </InputRightElement> */}
                      <SingleDatepicker
                        propsConfigs={{
                          dateNavBtnProps: {
                            colorScheme: "#003A88",
                            variant: "unstyled",
                            fontWeight: "medium",
                            fontFamily: "Gilroy",
                          },
                          dayOfMonthBtnProps: {
                            defaultBtnProps: {
                              color: "#2D2D2D",
                              padding: "5px",
                              margin: "2px",
                              fontWeight: "medium",
                              borderRadius: "10px",
                              fontFamily: "Gilroy",
                              _hover: {
                                background: "#DCE1EF",
                                borderRadius: "full",
                              },
                            },

                            selectedBtnProps: {
                              background: "#003A88",
                              color: "white",
                              borderRadius: "10px",
                              fontFamily: "Gilroy",
                              _hover: {
                                background: "#DCE1EF",
                                borderRadius: "full",
                                color: "black",
                              },
                            },
                            todayBtnProps: {
                              background: "white",
                              color: "black",
                              border: "0px",
                            },
                          },
                          inputProps: {
                            size: "xs",
                            borderRadius: "10px",
                            padding: "22px",
                            borderColor: "#DCE1EF",
                            bgColor: "#F8F9FC",
                            placeholder: "Select your date of Birth",
                            _placeholder: {
                              color: "#AFB2BF",
                              fontWeight: "500",
                            },
                          },

                          inputProps: {
                            size: "xs",
                            borderRadius: "10px",
                            padding: "25px",
                            borderColor: "#DCE1EF",
                            bgColor: "#F8F9FC",
                            placeholder: "Select your date of Birth",
                            _placeholder: {
                              color: "#AFB2BF",
                              fontWeight: "500",
                            },
                          },
                        }}
                        name="dateInput"
                        date={date}
                        onDateChange={setDate}
                      />
                    </InputGroup>
                  </FormControl>
                </Stack>
                <Stack
                  direction={{ sm: "column", lg: "row" }}
                  spacing={{
                    base: "1rem",
                    md: "2rem",
                    lg: "4rem",
                  }}
                  alignSelf="left"
                  justifyContent={"space-between"}
                  mb="2rem"
                  pb={{ base: "0", lg: "2rem" }}
                >
                  <FormControl gap={"0.5rem"}>
                    <FormLabel fontSize="xs" fontWeight="bold">
                      Gender
                    </FormLabel>
                    <RadioGroup
                      name={"gender"}
                      onChange={setGender}
                      value={gender}
                    >
                      <Stack direction="row" gap={"2rem"}>
                        <Radio value="Male" fontWeight={"semibold"}>
                          Male
                        </Radio>
                        <Radio value="Female">Female</Radio>
                      </Stack>
                    </RadioGroup>
                  </FormControl>
                </Stack>
                <Flex mt={"2rem"} justify="right">
                  <Button
                    variant={"navWhiteBg"}
                    color="white"
                    bgColor="#000929"
                    borderRadius={"12px"}
                    border="1px"
                    borderColor="#000929"
                    _hover={{
                      bgColor: "white",
                      color: "#000929",
                    }}
                    onClick={() => AddressDetailsTab.current.click()}
                  >
                    Next
                  </Button>
                </Flex>
              </Flex>
            </TabPanel>
            <TabPanel w={"100%"}>
              <Flex direction="column" w="100%">
                <Stack
                  direction={{ sm: "column", lg: "row" }}
                  spacing={{
                    base: "1rem",
                    md: "2rem",
                    lg: "4rem",
                  }}
                  justifyContent={"space-between"}
                  mb="1rem"
                  pb={{ base: "0", lg: "2rem" }}
                >
                  <FormControl isRequired>
                    <FormLabel fontSize="xs" fontWeight="bold">
                      Email
                    </FormLabel>
                    <InputGroup>
                      {/* <InputRightElement display={"flex"} alignItems={"center"}>
                        <EmailIcon color="#292D32" />
                      </InputRightElement> */}

                      <Input
                        name="email"
                        onChange={handleChange}
                        value={formValues.email}
                        borderRadius="10px"
                        placeholder="Select your Email"
                        fontSize="xs"
                        borderColor={"#DCE1EF"}
                        bgColor={"#F8F9FC"}
                        p={"25px"}
                        _placeholder={{
                          color: "#AFB2BF",
                          fontWeight: "500",
                        }}
                      />
                    </InputGroup>
                  </FormControl>
                  <FormControl isRequired>
                    <FormLabel fontSize="xs" fontWeight="bold">
                      Phone
                    </FormLabel>
                    <InputGroup>
                      {/* <InputRightElement>
                        <PhoneIcon color="#292D32" />
                      </InputRightElement> */}

                      <Input
                        type="tel"
                        name={"mobile"}
                        onChange={handleChange}
                        value={formValues.mobile}
                        borderRadius="10px"
                        p={"25px"}
                        _placeholder={{
                          color: "#AFB2BF",
                          fontWeight: "500",
                        }}
                        placeholder="Enter your Phone Number"
                        fontSize="xs"
                        borderColor={"#DCE1EF"}
                        bgColor={"#F8F9FC"}
                      />
                    </InputGroup>
                  </FormControl>
                  <FormControl>
                    <FormLabel fontSize="xs" fontWeight="bold">
                      Address
                    </FormLabel>
                    <Input
                      name={"line1"}
                      onChange={handleChange}
                      value={formValues.address.line1}
                      borderRadius="10px"
                      placeholder="Enter your Address "
                      borderColor={"#DCE1EF"}
                      bgColor={"#F8F9FC"}
                      fontSize="xs"
                      p={"25px"}
                      _placeholder={{
                        color: "#AFB2BF",
                        fontWeight: "500",
                      }}
                    />
                  </FormControl>
                </Stack>
                <Stack
                  direction={{ sm: "column", lg: "row" }}
                  spacing={{
                    base: "1rem",
                    md: "2rem",
                    lg: "4rem",
                  }}
                  alignSelf="left"
                  justifyContent={"space-between"}
                  mb="2rem"
                  pb={{ base: "0", lg: "2rem" }}
                >
                  {/* <FormControl>
                    <FormLabel fontSize="xs" fontWeight="bold">
                      Address Line 1
                    </FormLabel>
                    <Input
                      name={"line1"}
                      onChange={handleChange}
                      value={formValues.address.line1}
                      borderRadius="full"
                      placeholder="Enter your Address line 1"
                      borderColor={"#DCE1EF"}
                      bgColor={"#F8F9FC"}
                      fontSize="xs"
                      p={"25px"}
                      _placeholder={{
                        color: "#AFB2BF",
                        fontWeight: "500",
                      }}
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel fontSize="xs" fontWeight="bold">
                      Address Line 2
                    </FormLabel>
                    <Input
                      name={"line2"}
                      onChange={handleChange}
                      value={formValues.address.line2}
                      borderRadius="full"
                      placeholder="Enter your Address line 2"
                      borderColor={"#DCE1EF"}
                      bgColor={"#F8F9FC"}
                      fontSize="xs"
                      p={"25px"}
                      _placeholder={{
                        color: "#AFB2BF",
                        fontWeight: "500",
                      }}
                    />
                  </FormControl>
                  <FormControl isRequired>
                    <FormLabel fontSize="xs" fontWeight="bold">
                      Pincode
                    </FormLabel>
                    <Input
                      name={"pincode"}
                      onChange={handleChange}
                      // value={formValues.address.pincode}
                      borderRadius="full"
                      placeholder="Enter your Pincode"
                      fontSize="xs"
                      borderColor={"#DCE1EF"}
                      bgColor={"#F8F9FC"}
                      p={"25px"}
                      _placeholder={{
                        color: "#AFB2BF",
                        fontWeight: "500",
                      }}
                    />
                  </FormControl> */}
                  <FormControl isRequired>
                    <FormLabel fontSize="xs" fontWeight="bold">
                      Country
                    </FormLabel>
                    <Input
                      name={"country"}
                      onChange={handleChange}
                      value={formValues.address.country}
                      borderRadius="10px"
                      placeholder="Select your Country"
                      fontSize="xs"
                      borderColor={"#DCE1EF"}
                      bgColor={"#F8F9FC"}
                      p={"25px"}
                      _placeholder={{
                        color: "#AFB2BF",
                        fontWeight: "500",
                      }}
                    />
                  </FormControl>
                  <FormControl isRequired>
                    <FormLabel fontSize="xs" fontWeight="bold">
                      State
                    </FormLabel>
                    <Input
                      name={"state"}
                      onChange={handleChange}
                      value={formValues.address.state}
                      borderRadius="10px"
                      p={"25px"}
                      _placeholder={{
                        color: "#AFB2BF",
                        fontWeight: "500",
                      }}
                      placeholder="Select your State"
                      fontSize="xs"
                      borderColor={"#DCE1EF"}
                      bgColor={"#F8F9FC"}
                    />
                  </FormControl>
                  <FormControl isRequired>
                    <FormLabel fontSize="xs" fontWeight="bold">
                      City
                    </FormLabel>
                    <Input
                      name={"city"}
                      onChange={handleChange}
                      value={formValues.address.city}
                      borderRadius="10px"
                      placeholder="Enter your City"
                      fontSize="xs"
                      borderColor={"#DCE1EF"}
                      bgColor={"#F8F9FC"}
                      p={"25px"}
                      _placeholder={{
                        color: "#AFB2BF",
                        fontWeight: "500",
                      }}
                    />
                  </FormControl>
                </Stack>
                <Flex mt={"2rem"} justify="right">
                  <Button
                    variant={"navTransparentBg"}
                    rounded={"12px"}
                    color="#000929"
                    bgColor="white"
                    border="1px"
                    borderColor="#000929"
                    _hover={{
                      bgColor: "#000929",
                      color: "white",
                    }}
                    mr={"2rem"}
                    onClick={() => PersonalDetailsTab.current.click()}
                  >
                    Back
                  </Button>
                  <Button
                    variant={"navWhiteBg"}
                    color="white"
                    bgColor="#000929"
                    border="1px"
                    rounded={"12px"}
                    borderColor="#000929"
                    _hover={{
                      bgColor: "white",
                      color: "#000929",
                    }}
                    onClick={() => ProfessionalDetailsTab.current.click()}
                  >
                    Next
                  </Button>
                </Flex>
              </Flex>
            </TabPanel>
            <TabPanel>
              <Flex direction="column" w="100%">
                <Stack
                  direction={{ sm: "column", md: "row" }}
                  spacing={{
                    base: "1rem",
                    md: "2rem",
                    lg: "4rem",
                  }}
                  alignSelf="left"
                  justifyContent={"space-between"}
                  mb={"1rem"}
                  pb={{ base: "0", lg: "2rem" }}
                >
                  <FormControl>
                    <FormLabel fontSize="xs" fontWeight="bold">
                      Current CTC
                    </FormLabel>
                    <Input
                      name={"ctc"}
                      onChange={handleChange}
                      value={formValues.currentJobDetails.ctc}
                      borderRadius="10px"
                      placeholder="Enter your Current CTC"
                      fontSize="xs"
                      borderColor={"#DCE1EF"}
                      bgColor={"#F8F9FC"}
                      p={"25px"}
                      _placeholder={{
                        color: "#AFB2BF",
                        fontWeight: "500",
                      }}
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel fontSize="xs" fontWeight="bold">
                      Expected CTC
                    </FormLabel>
                    <Input
                      name={"expectedCtc"}
                      onChange={handleChange}
                      value={formValues.extectedCtc}
                      borderRadius="10px"
                      placeholder="Enter your Expected CTC"
                      fontSize="xs"
                      borderColor={"#DCE1EF"}
                      bgColor={"#F8F9FC"}
                      p={"25px"}
                      _placeholder={{
                        color: "#AFB2BF",
                        fontWeight: "500",
                      }}
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel fontSize="xs" fontWeight="bold">
                      Current Company
                    </FormLabel>
                    <Input
                      name={"company"}
                      onChange={handleChange}
                      value={formValues.currentJobDetails.company}
                      borderRadius="10px"
                      placeholder="Enter your Current Company name"
                      fontSize="xs"
                      borderColor={"#DCE1EF"}
                      bgColor={"#F8F9FC"}
                      p={"25px"}
                      _placeholder={{
                        color: "#AFB2BF",
                        fontWeight: "500",
                      }}
                    />
                  </FormControl>
                </Stack>
                <Grid
                  templateColumns={{ lg: "1fr 1fr 1fr" }}
                  gap={{
                    base: "1rem",
                    md: "2rem",
                    lg: "4rem",
                  }}
                  pb={{ base: "0", lg: "2rem" }}
                >
                  <FormControl>
                    <FormLabel
                      fontSize="xs"
                      fontWeight="bold"
                      // pt={{ sm: "20px" }}
                    >
                      Job Title
                    </FormLabel>
                    <Input
                      name={"title"}
                      onChange={handleChange}
                      value={formValues.currentJobDetails.title}
                      borderRadius="10px"
                      placeholder="Enter your Job Title"
                      fontSize="xs"
                      borderColor={"#DCE1EF"}
                      bgColor={"#F8F9FC"}
                      p={"25px"}
                      _placeholder={{
                        color: "#AFB2BF",
                        fontWeight: "500",
                      }}
                    />
                  </FormControl>
                  <FormControl maxW={"30rem"}>
                    <FormLabel
                      fontSize="xs"
                      fontWeight="bold"
                      // pt={{ sm: "20px" }}
                    >
                      Primary Skills
                    </FormLabel>
                    <Input
                      name={"skills"}
                      onChange={handleChange}
                      value={formValues.skills}
                      borderRadius="10px"
                      placeholder="Select your Primary Skills"
                      fontSize="xs"
                      borderColor={"#DCE1EF"}
                      bgColor={"#F8F9FC"}
                      p={"25px"}
                      _placeholder={{
                        color: "#AFB2BF",
                        fontWeight: "500",
                      }}
                    />
                  </FormControl>
                </Grid>

                <Flex mt={"3.5rem"} justify="right">
                  <Button
                    variant={"navTransparentBg"}
                    color="#00929"
                    bgColor="white"
                    border="1px"
                    borderRadius={"12px"}
                    borderColor="#000929"
                    _hover={{
                      bgColor: "#000929",
                      color: "white",
                    }}
                    mr={"2rem"}
                    onClick={() => AddressDetailsTab.current.click()}
                  >
                    Back
                  </Button>
                  <Button
                    variant={"navWhiteBg"}
                    color="white"
                    borderRadius={"12px"}
                    bgColor="#000929"
                    border="1px"
                    borderColor="#000929"
                    _hover={{
                      bgColor: "white",
                      color: "#000929",
                    }}
                    onClick={() => ResumeDetailsTab.current.click()}
                  >
                    Next
                  </Button>
                </Flex>
              </Flex>
            </TabPanel>
            <TabPanel>
              <Grid
                templateColumns={{ lg: "1fr 1fr 1fr" }}
                gap={{ lg: "3rem" }}
              >
                <FormControl isRequired>
                  <FormLabel
                    color={"#000929"}
                    fontSize="xs"
                    fontWeight="bold"
                    pt={{ sm: "20px" }}
                  >
                    Attach your Resume
                  </FormLabel>
                  {/* <input
										placeholder={"Attach your Resume"}
										_placeholder={{
											color: "#AFB2BF",
											fontWeight: "500",
										}}
										type={"file"}
										style={{ display: "none" }}
										value={resume}
										onChange={onResumeChange}
									/> */}
                  <Input
                    type="file"
                    // value={resume.name}
                    onChange={onResumeChange}
                  />
                  {/* <InputGroup
										// className="custom-file-input"
										border={"1px"}
										borderColor={"#DCE1EF"}
										borderRadius={"full"}
										// onClick={handleFileClick}
										p={"25px"}
										bgColor={"#F8F9FC"}
										fontSize="xs"
										cursor={"pointer"}
									>
										<InputRightElement>
											<AttachmentIcon
												w={"1rem"}
												h={"1rem"}
												color="#292D32"
											/>
										</InputRightElement>
									</InputGroup> */}
                </FormControl>
              </Grid>
              <Flex mt={"10rem"} justify="right">
                <Button
                  variant={"navTransparentBg"}
                  color="#000929"
                  borderRadius={"12px"}
                  bgColor="white"
                  border="1px"
                  borderColor="#000929"
                  _hover={{
                    bgColor: "#000929",
                    color: "white",
                  }}
                  mr={"2rem"}
                  onClick={() => ProfessionalDetailsTab.current.click()}
                >
                  Back
                </Button>
                <Button
                  variant={"navWhiteBg"}
                  color="white"
                  borderRadius={"12px"}
                  bgColor="#000929"
                  border="1px"
                  borderColor="#000929"
                  _hover={{
                    bgColor: "white",
                    color: "#000929",
                  }}
                  onClick={onSubmit}
                >
                  Send
                </Button>
              </Flex>
            </TabPanel>
          </TabPanels>
        </Tabs>
      ) : (
        <Box
          pt={{ lg: "6rem", md: "4rem", base: "2rem" }}
          display={"flex"}
          flexDir={"column"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Image
            src={"./images/finishedicon.png"}
            alt="icon"
            width={{
              xl: "7rem",
              lg: "6rem",
              md: "5rem",
              base: "4rem",
            }}
            height={{
              xl: "7rem",
              lg: "6rem",
              md: "5rem",
              base: "4rem",
            }}
          />
          <Text
            fontSize={{ lg: "34px", base: "28px" }}
            fontWeight={"550"}
            pt={"1.5rem"}
          >
            You have applied for this job
          </Text>
          <Text
            pt={"0.5rem"}
            fontSize={{ lg: "16px", base: "14px" }}
            color={"#A6A8AA"}
            fontWeight={"medium"}
          >
            We will get back to you soon!
          </Text>
          <Link
            href={"/"}
            color={"#003A88"}
            fontSize={{ lg: "15px", base: "13px" }}
            fontWeight={"medium"}
            pt={{ lg: "8rem", base: "4rem" }}
            _hover={{
              textDecoration: "underline",
              color: "#003A88",
            }}
          >
            View all jobs
          </Link>
        </Box>
      )}
    </Flex>
  );
}

export default Wizard;
