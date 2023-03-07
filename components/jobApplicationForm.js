import {
  Box,
  Button,
  Center,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
  Text,
  Toast,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useToast } from "@chakra-ui/react"

import AdminNavbar from "./sections/adminNavbar";

const JobApplicationForm = () => {
    const toast = useToast()

  const [form, setform] = useState({
    companyName: "",
    jobTitle: "",
    location: {
      country: "",
      city: "",
    },
    salary: "",
    qualification: "",
    description: "",
  });

  useEffect(() => {
    console.log(form)
  
  
  }, [form])
const onCancel=()=>{
    setform({
        companyName: "",
        jobTitle: "",
        location: {
          country: "",
          city: "",
        },
        salary: "",
        qualification: "",
        description: "",
    })
}

  const onPost = async () => {
    {
        form.name === "" ||
        form.jobTitle === "" ||
        form.location.country === "" ||
        form.location.city === ""||
        form.qualification === ""||
        form.description === ""
            ? toast({
                    title: "Error!",
                    description: "Enter all fields",
                    status: "error",
                    position: "top",
                    duration: 9000,
                    isClosable: true,
              })
            :
                    toast({
                        title: "Posted Successfully",
                        
                        status: "success",
                        position: "top",

                        duration: 9000,
                        isClosable: true,
                    })
                    setform({
                        companyName: "",
                        jobTitle: "",
                        location: {
                          country: "",
                          city: "",
                        },
                        salary: "",
                        qualification: "",
                        description: "",
                    })
              }
    }


  

  return (
    <Center bgColor={"#F0F4FF"} w={"full"} h={{ base: "full", lg: "100vh" }}>
      <Box
        w={"95vw"}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"start"}

        // maxW={"1500px"}
      >
        <Box
          // overflowY={"scroll"}
          w={"full"}
          bgColor={"#F0F4FF"}
          // h={"100vh"}
          display={"flex"}
          flexDir={"column"}
        >
          <AdminNavbar
            title={"Jobs"}
            // image={user.image} email={user.email}
          />
          <Box
            display={"flex"}
            flexDir={{ base: "column", lg: "row" }}
            my={"2rem"}
            mx={"2rem"}
            bgColor={"white"}
            borderRadius={"15px"}
          >
            <Box
              w={{ base: "full", lg: "50%" }}
              px={"2rem"}
              py={"3rem"}
              display={"flex"}
              gap={"2rem"}
              flexDir={"column"}
            >
              <FormControl w="full">
                <FormLabel fontWeight={"500"} fontSize={"1.5rem"}>
                  Company
                </FormLabel>
                <Input
                  borderRadius={"full"}
                  p={"1.5rem"}
                  value={form.companyName}
                  onChange={(e) => {
                    setform({
                      ...form,
                      companyName: e.target.value,
                    });
                  }}
                  placeholder="Enter your company name"
                />
              </FormControl>
              <FormControl w="full">
                <FormLabel fontWeight={"500"} fontSize={"1.5rem"}>
                  Job title
                </FormLabel>
                <Input
                  borderRadius={"full"}
                  p={"1.5rem"}
                  value={form.jobTitle}
                  onChange={(e) => {
                    setform({
                      ...form,
                      jobTitle: e.target.value,
                    });
                  }}
                  placeholder="Enter your job title"
                />
              </FormControl>
              <Box
                display={"flex"}
                flexDir={{ base: "column", lg: "row" }}
                w="full"
                gap={{ lg: "1rem" }}
              >
                <FormControl w="full">
                  <FormLabel fontWeight={"500"} fontSize={"1.5rem"}>
                    Location
                  </FormLabel>
                  <Input
                    borderRadius={"full"}
                    p={"1.5rem"}
                    value={form.location.country}
                    onChange={(e) => {
                        setform({
                      ...form,
                      location: {
                        ...form.location,
                        country:e.target.value}
                    });
                  }}
                    placeholder="Enter your country"
                  />
                </FormControl>
                <FormControl w="full">
                  <FormLabel
                    fontWeight={"500"}
                    fontSize={"1.5rem"}
                    color={"white"}
                  >
                    dda
                  </FormLabel>

                  <Input
                    borderRadius={"full"}
                    p={"1.5rem"}
                    value={form.location.city}
                    onChange={(e) => {
                    setform({
                      ...form,
                      location: {
                        ...form.location,
                        city:e.target.value}
                    });
                  }}
                    placeholder="Enter your city"
                  />
                </FormControl>
              </Box>
              <Text fontWeight={"500"} fontSize={"1.5rem"}>
                Salary
              </Text>
              <RangeSlider
                w={{base:"full",lg:"50%"}}
                defaultValue={[120, 240]}
                min={0}
                max={300}
                step={30}
              >
                <RangeSliderTrack bg="red.100">
                  <RangeSliderFilledTrack bg="tomato" />
                </RangeSliderTrack>
                <RangeSliderThumb boxSize={6} index={0} />
                <RangeSliderThumb boxSize={6} index={1} />
              </RangeSlider>
              <FormControl w="full">
                <FormLabel fontWeight={"500"} fontSize={"1.5rem"}>
                  Qualifications
                </FormLabel>
                <Input
                  borderRadius={"full"}
                  p={"1.5rem"}
                  value={form.qualification}
                  onChange={(e) => {
                    setform({
                      ...form,
                      qualification: e.target.value,
                    });
                  }}
                  placeholder="Enter your qualifications"
                />
              </FormControl>
            </Box>
            <Box
              w={{ base: "full", lg: "50%" }}
              px={"2rem"}
              py={"3rem"}
              display={"flex"}
              gap={"2rem"}
              flexDir={"column"}
            >
              <FormControl w="full">
                <FormLabel fontWeight={"500"} fontSize={"1.5rem"}>
                  Description
                </FormLabel>
                <Input
                  value={form.description}
                  onChange={(e) => {
                    setform({
                      ...form,
                      description: e.target.value,
                    });
                  }}
                  h={"25rem"}
                  borderRadius={"10px"}
                  p={"1.5rem"}
                />
              </FormControl>
              <Box
                display={"flex"}
                flexDir={"row"}
                mt={"4rem"}
                alignItems={"flex-end"}
                justifyContent={"flex-end"}
                gap={"1rem"}
              >
                <Button
                  borderRadius={"full"}
                  bgColor={"white"}
                  border={"1px"}
                  color={"black"}
                  w={"8rem"}
                  onClick={onCancel}
                >
                  Cancel
                </Button>
                <Button
                  borderRadius={"full"}
                  bgColor={"#002E6C"}
                  color={"white"}
                  w={"8rem"}
                  onClick={onPost}
                >
                  Post
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Center>
  );
};

export default JobApplicationForm;
