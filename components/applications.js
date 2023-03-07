/** @format */

import {
  Box,
  Button,
  Center,
  Flex,
  Link,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React from "react";
import { css } from "@emotion/css";

import AdminNavbar from "./sections/adminNavbar";
import { ChevronDownIcon } from "@chakra-ui/icons";

const Applications = ({
  candidateData,
  loading,
  handleCandidatePagination,
}) => {
  return (
    <Box
      bgColor={"#F0F4FF"}
      // minH={"100vh"}
      h={"91vh"}
      w={"full"}
      //   border='1px solid black'
      display="flex"
      justifyContent="center"
    >
      <Box w={"95vw"} maxW={"1500px"}>
        <Box w={"full"} bgColor={"#F0F4FF"}>
          <Box my={"3rem"}>
            <Box
              //   border='1px solid black'
              overflow={"hidden"}
              borderRadius="12px"
              borderTopRadius={"12px"}
              overflowX={"scroll"}
              scrollBehavior={"smooth"}
              overscrollBehaviorX={"contain"}
              className={css`
                ::-webkit-scrollbar {
                  display: none;
                }
              `}
            >
              <TableContainer>
                <Table variant="striped" colorScheme={"telegram"}>
                  <Thead>
                    <Tr>
                      <Th
                        h="2rem"
                        fontFamily="gilroy"
                        textTransform="capitalize"
                        fontWeight="500"
                        fontSize={{ lg: "1.5rem", base: "18px" }}
                      >
                        Application Name
                      </Th>
                      <Th
                        fontFamily="gilroy"
                        textTransform="capitalize"
                        fontWeight="500"
                        fontSize={{ lg: "1.5rem", base: "18px" }}
                      >
                        Company
                      </Th>
                      <Th
                        fontFamily="gilroy"
                        textTransform="capitalize"
                        fontWeight="500"
                        fontSize={{ lg: "1.5rem", base: "18px" }}
                      >
                        Postion
                      </Th>
                      <Th
                        fontFamily="gilroy"
                        textTransform="capitalize"
                        fontWeight="500"
                        fontSize={{ lg: "1.5rem", base: "18px" }}
                      >
                        Expected CTC
                      </Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {candidateData.map((candidate, index) => {
                      return (
                        <Tr height="5rem" key={index} isLoaded={!loading}>
                          <Td w={"35%"}>{candidate?.name}</Td>
                          <Td w={"20%"}>
                            {candidate?.currentJobDetails.company.length === 0
                              ? "N/A"
                              : candidate?.currentJobDetails?.company}
                          </Td>
                          <Td w={"35%"}>
                            {candidate?.currentJobDetails?.title}
                          </Td>
                          <Td w={"15%"}>
                            {candidate?.expectedCtc == undefined
                              ? "N/A"
                              : candidate?.expectedCtc.length}
                          </Td>
                        </Tr>
                      );
                    })}
                  </Tbody>
                </Table>
              </TableContainer>

              {/* <Box minW={"1000px"}>
								<Box
									display={"flex"}
									px={"1rem"}
									py={"1rem"}
									flexDir={"row"}
									bgColor={"#DEE6FF"}
								>
									<Text
										w={"35%"}
										fontWeight={"500"}
										fontSize={"1.2rem"}
									>
										Application Name
									</Text>
									<Text
										w={"20%"}
										fontSize={"1.2rem"}
										fontWeight={"500"}
									>
										Company
									</Text>
									<Text
										w={"35%"}
										fontSize={"1.2rem"}
										fontWeight={"500"}
									>
										Postion
									</Text>
									<Text
										w={"15%"}
										fontSize={"1.2rem"}
										fontWeight={"500"}
									>
										Expected CTC
									</Text>
								</Box>
								<Box
									overflowY={"scroll"}
									h={"44.5rem"}
									maxH={"45rem"}
									className={css`
										::-webkit-scrollbar {
											display: none;
										}
									`}
								>
									{candidateData.map((candidate, index) => {
										return (
											<Td
												key={index}
												isLoaded={!loading}
											>
												<Box
													px={"1rem"}
													key={index}
													bgColor={"white"}
													display={"flex"}
													flexDir={"row"}
													py={"2rem"}
												>
													<Text w={"35%"}>
														{candidate?.name}
													</Text>
													<Text w={"20%"}>
														{candidate?.currentJobDetails
															.company.length === 0
															? "N/A"
															: candidate?.currentJobDetails
																	?.company}
													</Text>
													<Text w={"35%"}>
														{
															candidate?.currentJobDetails
																?.title
														}
													</Text>
													<Text w={"15%"}>
														{candidate?.expectedCtc ==
														undefined
															? "N/A"
															: candidate?.expectedCtc
																	.length}
													</Text>
												</Box>
											</Td>
										)
									})}
									
								</Box>
							</Box> */}
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
                //   isDisabled={!isButtonDisabled}
                onClick={handleCandidatePagination}
              >
                View More
              </Button>
            </Flex>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Applications;
