import { Box, Center, Divider, Flex, Stack, Text, transition } from "@chakra-ui/react";
import { duration } from "@mui/material";
import { motion } from "framer-motion";
import React from "react";

export const ExploreRecords = () => {
  const records = [
    {
      id: 1,
      number: "100K+",
      title: "Monthly Visitors",
      description: "Over 1 lakh unique visitors come to Proficientnow.",
    },
    {
      id: 2,
      number: "400K+",
      title: "Candidates Hired",
      description:
        "Meet our successful hires, job seekers turned top performers.",
    },
    {
      id: 3,
      number: "100K+",
      title: "Vacancies open",
      description: "Open positions, kickstart your career with Proficientnow.",
    },
    {
      id: 4,
      number: "50+",
      title: "Partnered Companies",
      description: "Successful collaborations: Meet our partner companies.",
    },
  ];


  const parentVariants ={
    hidden:{
      opacity:0,
       x:'-200px'
    },
    visible:{
      opacity:1,
      x:'0',
      transition:{
          stype:'spring',
          duration:'0.2',
          staggerChildren:0.2

      }
    }
  }
  const childVariants ={
    hidden:{
      opacity:0,
       x:'-30px'
    },
    visible:{
      opacity:1,
      x:'0',
      transition:{
          stype:'spring',
          duration:'0.5',
        delay:0.2
      }
    }
  }
  return (
    <Center w={"full"} bgColor={"#E0E8F3"}>
      <Center
        flexDir={"column"}
        maxW={"1500px"}
        w={"full"}
        py={"6rem"}
        px={"3rem"}
        gap={"8rem"}
      >
        <Text fontWeight={"600"} fontSize={"1.75rem"} letterSpacing={"4%"}>
          Explore our track record of success through the numbers. See the
          impact of our business.
        </Text>
        <Box display={"flex"} gap={"2rem"} flexWrap={"wrap"}   as={motion.div}
              variants={parentVariants}
              initial='hidden'
              whileInView='visible'>
          {records.map((record) => {
            return (
              <Flex
              as={motion.div}
              variants={childVariants}
           
                key={record.id}
                flexDir={"column"}
                alignItems={"start"}
                justifyContent={"start"}
                gap={"1rem"}
                fontWeight={"600"}
              >
                <Stack
                  direction="row"
                  h="75px"
                  p={4}
                  alignItems={"center"}
                  gap={"0.5rem"}
                  borderLeft={"3px solid #FF0000"}
                >
                  <Text fontSize={"2.5rem"}>{record.number}</Text>
                </Stack>
                <Text fontSize={"1.25rem"}>{record.title}</Text>
                <Text
                  fontSize={"1.25rem"}
                  letterSpacing={"6%"}
                  fontWeight={"500"}
                  color={"#42485A"}
                  maxW={"22ch"}
                  mt={{ base: "0.5rem", lg: "1rem" }}
                >
                  {record.description}
                </Text>
              </Flex>
            );
          })}
        </Box>
      </Center>
    </Center>
  );
};
