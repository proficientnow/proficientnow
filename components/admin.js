/** @format */

import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Box,
  Text,
  Grid,
  Center,
  Flex,
  Checkbox,
  Button,
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
} from "@chakra-ui/react";
import { SkeletonText } from "@chakra-ui/react";

import { css } from "@emotion/css";

import React, { useEffect, useState } from "react";
import AdminJobSec from "../components/sections/adminJobSec";

const Admin = ({
  candidateData,
  documentCounts,
  countLoading,
  loadingCandidates,
  handlePagination,
  isButtonDisabled,
}) => {
  const [checkboxes, setcheckboxes] = useState({
    companyName: true,
    jobRole: true,
    expectedCTC: true,
    email: true,
    phoneNumber: true,
  });

  const [selectAll, setselectAll] = useState(true);

  const onChange = () => {
    setselectAll(!selectAll);
  };

  useEffect(() => {
    selectAll == true
      ? setcheckboxes({
          ...checkboxes,
          companyName: true,
          jobRole: true,
          expectedCTC: true,
          email: true,
          phoneNumber: true,
        })
      : setcheckboxes({
          ...checkboxes,
          companyName: false,
          jobRole: false,
          expectedCTC: false,
          email: false,
          phoneNumber: false,
        });
  }, [selectAll]);

  return (
    <Box w={"full"} maxH={"91vh"}>
      <Box
        w={"full"}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"start"}
      >
        <Box
          w={"full"}
          bgColor={"#F0F4FF"}
          display={"flex"}
          flexDir={"column"}
          minH="100vh"
        >
          <Center px={"1.7rem"} py={"3rem"}>
            <Box maxW={"1300px"} overflow={"hidden"}>
              <AdminJobSec
                loading={countLoading}
                documentCounts={documentCounts}
              />

              <Text
                color={"black"}
                fontWeight={"500"}
                fontSize={"32px"}
                lineHeight={"2.3rem"}
                mb={"3rem"}
              >
                Applications
              </Text>
              <Box
                display={{ base: "flex" }}
                flexDir={{ base: "column", lg: "row" }}
                gap={{ base: "1rem", lg: "3rem" }}
              >
                <Box
                  display={"flex"}
                  flexDir={"row"}
                  flexWrap={"wrap"}
                  justifyContent={"start"}
                  columnGap={{ base: "1rem", lg: "3rem" }}
                >
                  <Checkbox
                    isChecked={checkboxes.companyName}
                    minW={"fit-content"}
                    onChange={(e) => {
                      setcheckboxes({
                        ...checkboxes,
                        companyName: e.target.checked,
                      });
                    }}
                  >
                    Company Name
                  </Checkbox>
                  <Checkbox
                    minW={"fit-content"}
                    isChecked={checkboxes.jobRole}
                    onChange={(e) => {
                      setcheckboxes({
                        ...checkboxes,
                        jobRole: e.target.checked,
                      });
                    }}
                  >
                    Job Role
                  </Checkbox>
                  <Checkbox
                    minW={"fit-content"}
                    isChecked={checkboxes.expectedCTC}
                    onChange={(e) => {
                      setcheckboxes({
                        ...checkboxes,
                        expectedCTC: e.target.checked,
                      });
                    }}
                  >
                    Expected CTC
                  </Checkbox>
                  <Checkbox
                    minW={"fit-content"}
                    isChecked={checkboxes.email}
                    onChange={(e) => {
                      setcheckboxes({
                        ...checkboxes,
                        email: e.target.checked,
                      });
                    }}
                  >
                    Email
                  </Checkbox>
                  <Checkbox
                    minW={"fit-content"}
                    isChecked={checkboxes.phoneNumber}
                    onChange={(e) => {
                      setcheckboxes({
                        ...checkboxes,
                        phoneNumber: e.target.checked,
                      });
                    }}
                  >
                    Phone Number
                  </Checkbox>
                  <Checkbox
                    minW={"fit-content"}
                    isChecked={selectAll}
                    onChange={onChange}
                    p={"0.5rem"}
                    fontWeight={"600"}
                  >
                    Select All (Candidate Name wont be unchecked)
                  </Checkbox>
                </Box>
              </Box>

              <Box
                bgColor="white"
                h={"full"}
                maxh={"40rem"}
                borderTopRadius={"12px"}
                overflow={"hidden"}
                overflowX={"scroll"}
                overscrollBehaviorX={"contain"}
                scrollBehavior={"smooth"}
                minW={"lg"}
                maxW={"1500px"}
                className={css`
                  ::-webkit-scrollbar {
                    display: none;
                  }
                `}
              >
                <TableContainer
                  className={css`
                    ::-webkit-scrollbar {
                      display: none;
                    }
                  `}
                >
                  <Table variant="striped" colorScheme={"telegram"}>
                    <Thead>
                      <Tr height="5rem" width="100%">
                        <Th
                          w={"17rem"}
                          fontFamily="gilroy"
                          textTransform="capitalize"
                          fontSize={"20px"}
                          fontWeight={"500"}
                        >
                          Candidate Name
                        </Th>
                        <Th
                          w={checkboxes.companyName ? "17rem" : "0rem"}
                          fontSize={"20px"}
                          fontFamily="gilroy"
                          textTransform="capitalize"
                          fontWeight={"500"}
                        >
                          {" "}
                          {checkboxes.companyName ? "Company Name" : ""}
                        </Th>

                        <Th
                          w={checkboxes.expectedCTC ? "15rem" : "0rem"}
                          fontSize={"20px"}
                          fontWeight={"500"}
                          fontFamily="gilroy"
                          textTransform="capitalize"
                        >
                          {checkboxes.expectedCTC ? "Expected CTC" : ""}{" "}
                        </Th>
                        <Th
                          w={checkboxes.email ? "17rem" : "0rem"}
                          fontSize={"20px"}
                          fontWeight={"500"}
                          fontFamily="gilroy"
                          textTransform="capitalize"
                        >
                          {" "}
                          {checkboxes.email ? "Email" : ""}
                        </Th>
                        <Th
                          w={checkboxes.phoneNumber ? "15rem" : "0rem"}
                          fontSize={"20px"}
                          fontWeight={"500"}
                          fontFamily="gilroy"
                          textTransform="capitalize"
                        >
                          {checkboxes.phoneNumber ? "Phone Number" : ""}
                        </Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                      {candidateData.map((candidate, index) => {
                        if (candidate.jobsApplied?.length > 0) {
                          return (
                            <Tr
                              key={index}
                              height="5rem"
                              w={"full"}
                              px={"1rem"}
                              py={"2rem"}
                            >
                              <Td isLoaded={!loadingCandidates}>
                                <Text w={"15rem"}>{candidate.name}</Text>
                              </Td>
                              <Td isLoaded={!loadingCandidates}>
                                <Text
                                  w={checkboxes.companyName ? "15rem" : "-2rem"}
                                >
                                  {checkboxes.companyName
                                    ? candidate.currentJobDetails.company
                                        .length == 0
                                      ? "N/A"
                                      : candidate.currentJobDetails.company
                                    : ""}
                                </Text>
                              </Td>
                              <Td isLoaded={!loadingCandidates}>
                                <Text
                                  w={checkboxes.expectedCTC ? "15rem" : "-2rem"}
                                >
                                  {checkboxes.expectedCTC
                                    ? candidate?.expectedCtc == undefined
                                      ? "N/A"
                                      : candidate?.expectedCtc.length
                                    : ""}
                                </Text>
                              </Td>
                              <Td isLoaded={!loadingCandidates}>
                                <Text w={checkboxes.email ? "15rem" : "-2rem"}>
                                  {checkboxes.email ? candidate.email : ""}
                                </Text>
                              </Td>

                              <Td isLoaded={!loadingCandidates}>
                                <Text
                                  w={checkboxes.phoneNumber ? "15rem" : "-2rem"}
                                >
                                  {checkboxes.phoneNumber
                                    ? candidate.mobile
                                    : ""}
                                </Text>
                              </Td>
                            </Tr>
                          );
                        }
                      })}
                    </Tbody>
                  </Table>
                </TableContainer>

                {/* <Grid
                  w={{
                    lg: "fit-content",
                    base: "fit-content",
                  }}
                  px={"1rem"}
                  py={"2rem"}
                  bgColor={"#DEE6FF"}
                  borderTopRadius={"12px"}
                  gridAutoFlow={"row"}
                  gridTemplateColumns={"repeat(6,1fr)"}
                  columnGap={"2rem"}
                >
                  <Text w={"15rem"} fontSize={"20px"} fontWeight={"500"}>
                    Candidate Name
                  </Text>
                  <Text
                    w={checkboxes.companyName ? "15rem" : "0rem"}
                    fontSize={"20px"}
                    fontWeight={"500"}
                  >
                    {checkboxes.companyName ? "Company Name" : ""}{" "}
                  </Text>
                  <Text
                    w={checkboxes.jobRole ? "15rem" : "0rem"}
                    fontSize={"20px"}
                    fontWeight={"500"}
                  >
                    {checkboxes.jobRole ? "Job Role" : ""}
                  </Text>
                  <Text
                    w={checkboxes.expectedCTC ? "15rem" : "0rem"}
                    fontSize={"20px"}
                    fontWeight={"500"}
                  >
                    {checkboxes.expectedCTC ? "Expected CTC" : ""}{" "}
                  </Text>
                  <Text
                    w={checkboxes.email ? "15rem" : "0rem"}
                    fontSize={"20px"}
                    fontWeight={"500"}
                  >
                    {checkboxes.email ? "Email" : ""}{" "}
                  </Text>
                  <Text
                    w={checkboxes.phoneNumber ? "15rem" : "0rem"}
                    fontSize={"20px"}
                    fontWeight={"500"}
                  >
                    {checkboxes.phoneNumber ? "Phone Number" : ""}{" "}
                  </Text>
                </Grid> */}

                {/* <Flex
                  flexDir={"column"}
                  justify={"start"}
                  align={"center"}
                  overflowY={"scroll"}
                  overscrollBehaviorY={"contain"}
                  h={"fit-content"}
                  w={"fit-content"}
                  maxH={"30rem"}
                  className={css`
                    ::-webkit-scrollbar {
                      display: none;
                    }
                  `}
                >
                  {candidateData.map((candidate, index) => {
                    if (candidate.jobsApplied?.length > 0) {
                      return (
                        <Grid
                          key={index}
                          w={"full"}
                          px={"1rem"}
                          py={"2rem"}
                          gridAutoFlow={"row"}
                          gridTemplateColumns={"repeat(6,1fr)"}
                          columnGap={"2rem"}
                        >
                          <SkeletonText isLoaded={!loadingCandidates}>
                            <Text w={"15rem"}>{candidate.name}</Text>
                          </SkeletonText>
                          <SkeletonText isLoaded={!loadingCandidates}>
                            <Text
                              w={checkboxes.companyName ? "15rem" : "-2rem"}
                            >
                              {checkboxes.companyName
                                ? candidate.currentJobDetails.company.length ==
                                  0
                                  ? "N/A"
                                  : candidate.currentJobDetails.company
                                : ""}
                            </Text>
                          </SkeletonText>
                          <SkeletonText isLoaded={!loadingCandidates}>
                            <Text w={checkboxes.jobRole ? "15rem" : "-2rem"}>
                              {checkboxes.jobRole ? candidate?.designation : ""}
                            </Text>
                          </SkeletonText>
                          <SkeletonText isLoaded={!loadingCandidates}>
                            <Text
                              w={checkboxes.expectedCTC ? "15rem" : "-2rem"}
                            >
                              {checkboxes.expectedCTC
                                ? candidate?.expectedCtc == undefined
                                  ? "N/A"
                                  : candidate?.expectedCtc.length
                                : ""}
                            </Text>
                          </SkeletonText>
                          <SkeletonText isLoaded={!loadingCandidates}>
                            <Text w={checkboxes.email ? "15rem" : "-2rem"}>
                              {checkboxes.email ? candidate.email : ""}
                            </Text>
                          </SkeletonText>
                          <SkeletonText isLoaded={!loadingCandidates}>
                            <Text
                              w={checkboxes.phoneNumber ? "15rem" : "-2rem"}
                            >
                              {checkboxes.phoneNumber ? candidate.mobile : ""}
                            </Text>
                          </SkeletonText>
                        </Grid>
                      );
                    }
                  })}
                </Flex> */}
              </Box>
              <Flex
                w={"full"}
                bgColor={"white"}
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
                borderBottomRadius="12px"
              >
                <Button
                  bgColor={"transparent"}
                  fontSize={"0.85rem"}
                  fontWeight={"400"}
                  color={"#9C9C9C"}
                  textDecoration={"underline"}
                  _hover={{
                    bgColor: "transparent",
                    color: "gray.300",
                  }}
                  _focus={{
                    backgroundColor: "transparent",
                  }}
                  _active={{
                    backgroundColor: "transparent",
                  }}
                  rightIcon={<ChevronDownIcon />}
                  isDisabled={!isButtonDisabled}
                  onClick={handlePagination}
                >
                  View More
                </Button>
              </Flex>
            </Box>
          </Center>
        </Box>
      </Box>
    </Box>
  );
};

export default Admin;
