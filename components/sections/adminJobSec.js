/** @format */

import { Box, Grid, Text, useDisclosure } from "@chakra-ui/react";
import { Skeleton } from "@chakra-ui/react";
import React from "react";

const AdminJobSec = ({ loading, documentCounts }) => {
  return (
    //Cards showing stats

    <Grid
      gridAutoFlow={"row"}
      gridTemplateColumns={{
        "2xl": "repeat(3,1fr)",
        xl: "repeat(3,1fr)",
        md: "repeat(2,1fr)",
        base: "repeat(1,1fr)",
      }}
      columnGap={"1.1rem"}
    >
      <Box my={"2.5rem"} display={"flex"} flexDir={"column"} gap={"1.1rem"}>
        {/* <Text
					color={"black"}
					fontWeight={"500"}
					fontSize={"32px"}
					lineHeight={"2.3rem"}
				>
					Jobs
				</Text> */}

        <Skeleton isLoaded={!loading}>
          <Box
            borderRadius={"0.7rem"}
            p={"2rem"}
            bgColor={"white"}
            display={"flex"}
            flexDir={"row"}
            justifyContent={"start"}
            alignItems={"center"}
            gap={"1rem"}
          >
            <Text
              fontWeight={"600"}
              fontSize={"2rem"}
              lineHeight={"2.2rem"}
              color={"#1C295E"}
            >
              {documentCounts.jobsCount}
            </Text>

            <Text
              fontWeight={"400"}
              fontSize={"1.2rem"}
              lineHeight={"1.5rem"}
              color={"#1C295E"}
            >
              Total Jobs
            </Text>
          </Box>
        </Skeleton>

        <Skeleton isLoaded={!loading}>
          <Box
            borderRadius={"0.7rem"}
            p={"2rem"}
            bgColor={"white"}
            display={"flex"}
            flexDir={"row"}
            justifyContent={"start"}
            alignItems={"center"}
            gap={"1rem"}
          >
            <Text
              fontWeight={"600"}
              fontSize={"2rem"}
              lineHeight={"2.2rem"}
              color={"#1C295E"}
            >
              {documentCounts.appliedJobsCount}
            </Text>

            <Text
              fontWeight={"400"}
              fontSize={"1.2rem"}
              lineHeight={"1.5rem"}
              color={"#1C295E"}
            >
              Total Jobs Applied
            </Text>
          </Box>
        </Skeleton>
      </Box>

      <Box my={"2.5rem"} display={"flex"} flexDir={"column"} gap={"1.1rem"}>
        {/* <Text
          color={"black"}
          fontWeight={"500"}
          fontSize={"32px"}
          lineHeight={"2.3rem"}
        >
          Candidates
        </Text> */}

        <Skeleton isLoaded={!loading}>
          <Box
            borderRadius={"0.7rem"}
            p={"2rem"}
            bgColor={"white"}
            display={"flex"}
            flexDir={"row"}
            justifyContent={"start"}
            alignItems={"center"}
            gap={"0.7rem"}
          >
            <Text
              fontWeight={"600"}
              fontSize={"2rem"}
              lineHeight={"2.2rem"}
              color={"#1C295E"}
            >
              {/* {documentCounts.usersCount}   */} 0
            </Text>

            <Text
              fontWeight={"400"}
              fontSize={"1.2rem"}
              lineHeight={"1.5rem"}
              color={"#1C295E"}
            >
              Total Users
            </Text>
          </Box>
        </Skeleton>

        <Skeleton isLoaded={!loading}>
          <Box
            borderRadius={"0.7rem"}
            p={"2rem"}
            bgColor={"white"}
            display={"flex"}
            flexDir={"row"}
            justifyContent={"start"}
            alignItems={"center"}
            gap={"1rem"}
          >
            <Text
              fontWeight={"600"}
              fontSize={"2rem"}
              lineHeight={"2.2rem"}
              color={"#1C295E"}
            >
              {documentCounts.candidatesCount}
            </Text>

            <Text
              fontWeight={"400"}
              fontSize={"1.2rem"}
              lineHeight={"1.5rem"}
              color={"#1C295E"}
            >
              Total Applications
            </Text>
          </Box>
        </Skeleton>
      </Box>

      <Box my={"2.5rem"} display={"flex"} flexDir={"column"} gap={"1.1rem"}>
        {/* <Text
          color={"black"}
          fontWeight={"500"}
          fontSize={"32px"}
          lineHeight={"2.3rem"}
        >
          Contacts
        </Text> */}

        <Skeleton isLoaded={!loading}>
          <Box
            borderRadius={"0.7rem"}
            p={"2rem"}
            bgColor={"white"}
            display={"flex"}
            flexDir={"row"}
            justifyContent={"start"}
            alignItems={"center"}
            gap={"1rem"}
          >
            <Text
              fontWeight={"600"}
              fontSize={"2rem"}
              lineHeight={"2.2rem"}
              color={"#1C295E"}
            >
              {documentCounts.contactsCount}
            </Text>

            <Text
              fontWeight={"400"}
              fontSize={"1.25rem"}
              lineHeight={"1.5rem"}
              color={"#1C295E"}
            >
              Total Jobs
            </Text>
          </Box>
        </Skeleton>

        <Skeleton isLoaded={!loading}>
          <Box
            borderRadius={"0.7rem"}
            p={"2rem"}
            bgColor={"white"}
            display={"flex"}
            flexDir={"row"}
            justifyContent={"start"}
            alignItems={"center"}
            gap={"1rem"}
          >
            <Text
              fontWeight={"600"}
              fontSize={"2rem"}
              lineHeight={"2.2rem"}
              color={"#1C295E"}
            >
              {documentCounts.contactsUnattendedCount}
            </Text>

            <Text
              fontWeight={"400"}
              fontSize={"1.2rem"}
              lineHeight={"1.5rem"}
              color={"#1C295E"}
            >
              Total Candidates
            </Text>
          </Box>
        </Skeleton>
      </Box>
    </Grid>
  );
};

export default AdminJobSec;
