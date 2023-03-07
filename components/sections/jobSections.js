/** @format */

import { useRouter } from "next/router";
import React from "react";
import { Box, Text, Button, List, ListItem, Link } from "@chakra-ui/react";
import JobTitle from "../jobTitle";
import ListBullets from "../icons/listicon.svg";

const JobSections = ({ Jobdetails }) => {
  const router = useRouter();
  const HandleClick = () => {
    router.push({
      pathname: "/apply",
      query: {
        id: Jobdetails._id,
      },
    });
  };
  return (
    <div>
      <Box
        w={"full"}
        px={{
          xl: "6.5rem",
          lg: "4rem",
          md: "3rem",
          sm: "3.5rem",
        }}
        bgColor={"#E0E8F3"}
      >
        <JobTitle
          designation={`${Jobdetails.designation}`}
          company={`${Jobdetails.company}`}
          location={`${Jobdetails.location.city}, ${Jobdetails.location.country}`}
          salary={`${Jobdetails.salary.min} - ${Jobdetails.salary.max} LPA`}
          shift={`${Jobdetails.shift}`}
          designationColor={"#020D45"}
          InfoElementColor={"#020D45"}
          stroke={"#979EB2"}
        />

        <Button
          mt={"1rem"}
          mb={"3rem"}
          fontWeight={"550"}
          fontSize={{ lg: "12px", sm: "16px" }}
          fontFamily={"Gilroy"}
          bgColor={"#000929"}
          borderRadius={"12px"}
          _hover={{
            borderColor: "#000929",
            bgColor: "white",
            color: "#000929",
          }}
          color={"white"}
          px={"1.5rem"}
          py={"1rem"}
          onClick={HandleClick} //Add click function
        >
          Apply
        </Button>
      </Box>
      <Box
        px={{
          xl: "6.5rem",
          lg: "4rem",
          md: "3rem",
          sm: "3.5rem",
        }}
        bg={"#FBFBFB"}
        pt={{ md: "3rem", base: "3rem" }}
        display={"flex"}
        flexDir={"row"}
        gap={"2rem"}
        justifyContent={{
          xl: "start",
          lg: "center",
          md: "center",
          sm: "center",
        }}
        alignItems={"start"}
      >
        <Box
          w={{
            "2xl": "30vw",
            xl: "40vw",
            lg: "40vw",
            md: "40vw",
          }}
          pl={"2rem"}
          bgColor={"white"}
          py={"1.5rem"}
          border={"1px"}
          borderColor={"#ECEBF3"}
          borderRadius={"15px"}
          display={{
            "2xl": "flex",
            xl: "flex",
            lg: "flex",
            md: "flex",
            sm: "none",
          }}
          flexDir={"column"}
          justifyContent={"center"}
          alignItems={"left"}
        >
          <Box
            display={"flex"}
            flexDir={"column"}
            justifyContent={"start"}
            alignItems={"start"}
          >
            <Text
              ml={"1rem"}
              mt={"1rem"}
              mb={"1rem"}
              fontWeight={"bold"}
              fontSize={"16px"}
              color={"#2B2D33"}
            >
              Summary
            </Text>
            <Box>
              <Box
                h={"2.5rem"}
                p={"1rem"}
                alignItems={"center"}
                display={"flex"}
                as={Link}
                href={"/"}
                _hover={{ textDecoration: "none" }}
              >
                {/* <IconButton aria-label='Search database' icon={<Iconbutton />} /> */}
                <Text fontWeight={"medium"} fontSize={"14px"} color={"#747780"}>
                  Job Headlines
                </Text>
              </Box>
              <Box
                h={"2.5rem"}
                p={"1rem"}
                alignItems={"center"}
                display={"flex"}
                justifyContent={"start"}
                as={Link}
                href={"/"}
                _hover={{ textDecoration: "none" }}
              >
                <Text fontWeight={"medium"} fontSize={"14px"} color={"#747780"}>
                  Job Description
                </Text>
              </Box>
              <Box
                h={"2.5rem"}
                p={"1rem"}
                alignItems={"center"}
                display={"flex"}
                justifyContent={"start"}
                as={Link}
                href={"/"}
                _hover={{ textDecoration: "none" }}
              >
                <Text fontWeight={"medium"} fontSize={"14px"} color={"#747780"}>
                  Qualifications
                </Text>
              </Box>
              <Box
                h={"2.5rem"}
                p={"1rem"}
                alignItems={"center"}
                display={"flex"}
                justifyContent={"start"}
                as={Link}
                href={"/"}
                _hover={{ textDecoration: "none" }}
              >
                <Text fontWeight={"medium"} fontSize={"14px"} color={"#747780"}>
                  Apply
                </Text>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box mb={"10vh"}>
          <Box
            w={{
              "2xl": "65vw",
              xl: "60vw",
              lg: "60vw",
              md: "60vw",
              sm: "80vw",
            }}
            p={{ sm: "2rem", md: "3rem" }}
            bgColor={"white"}
            border={"1px"}
            borderRadius={"15px"}
            borderColor={"#ECEBF3"}
          >
            <JobTitle
              designation={`${Jobdetails.designation}`}
              company={`${Jobdetails.company}`}
              location={`${Jobdetails.location.city}, ${Jobdetails.location.country}`}
              salary={`${Jobdetails.salary.min} - ${Jobdetails.salary.max} LPA`}
              shift={`${Jobdetails.shift}`}
              designationColor={"#01081A"}
              InfoElementColor={"#B6B3B3"}
              stroke={"#B6B3B3"}
            />
            <Box pb={"4rem"}>
              <Text
                my={"1rem"}
                textAlign={"justify"}
                fontWeight={"medium"}
                fontSize={{ lg: "14px", sm: "14px" }}
                lineHeight={"1.8rem"}
                color={"#838383"}
              >{`${Jobdetails.jobDescription}`}</Text>
            </Box>
            <Text
              fontSize={"34px"}
              color={"#01081A"}
              fontWeight={"500"}
              pb={"1.5rem"}
            >
              Qualifications
            </Text>

            <List
              pb={"2rem"}
              color={"#838383"}
              textAlign={"justify"}
              fontWeight={"medium"}
              fontSize={{ lg: "14px", sm: "12px" }}
              lineHeight={"2.5rem"}
            >
              {Jobdetails.qualifications.map(function (data, index) {
                return (
                  <ListItem key={index}>
                    <Box
                      display={"flex"}
                      flexDir={"row"}
                      flexWrap={"wrap"}
                      alignItems={"center"}
                      gap={"1rem"}
                    >
                      <ListBullets />
                      <Text>{data}</Text>
                    </Box>
                  </ListItem>
                );
              })}
            </List>
            <Button
              mt={"1rem"}
              mb={"2rem"}
              fontWeight={"500"}
              fontSize={{ lg: "14px", sm: "16px" }}
              fontFamily={"Gilroy"}
              bgColor={"#000929"}
              border="1px"
              borderColor="#000929"
              borderRadius={"12px"}
              _hover={{
                border: "1px",
                borderColor: "#000929",
                bgColor: "white",
                color: "#000929",
              }}
              color={"white"}
              px={"2.5rem"}
              py={"1.4rem"}
              onClick={HandleClick} //Add click function
            >
              Apply
            </Button>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default JobSections;
