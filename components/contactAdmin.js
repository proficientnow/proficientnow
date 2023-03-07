/** @format */

import {
  Box,
  Button,
  Center,
  Flex,
  Skeleton,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { Link } from "@mui/icons-material";
import React from "react";
import AdminNavbar from "./sections/adminNavbar";

import { css } from "@emotion/css";
import { ChevronDownIcon } from "@chakra-ui/icons";

const ContactAdmin = ({ contacts, loading, handleContactsPagination }) => {
  return (
    <Center bgColor={"#F0F4FF"} w={"full"}>
      <Box
        w={"90vw"}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"start"}
        maxW={"1500px"}
      >
        <Box
          // overflowY={"scroll"}
          w={"full"}
          bgColor={"#F0F4FF"}
          h={"91vh"}
          display={"flex"}
          flexDir={"column"}
        >
          {/* <AdminNavbar
            title={"Contacts"}
            // image={user.image} email={user.email}
          /> */}

          <Box
            display={"flex"}
            // flexDir={{ base: "column", xl: "row" }}
            mb={"3rem"}
            gap={"5rem"}
          >
            <Box display={"flex"} flexDir={"column"} w={"full"}>
              <Text my={"2rem"} fontSize={"40px"} fontWeight={"600"}>
                Contacts
              </Text>
              <TableContainer
                className={css`
                  ::-webkit-scrollbar {
                    display: none;
                  }
                `}
              >
                <Table variant="striped" colorScheme={"telegram"}>
                  <Thead>
                    <Tr>
                      <Th fontFamily='gilroy' textTransform='capitalize' fontSize={"1.2rem"} fontWeight={"500"} height='4rem'>
                        Name
                      </Th>
                      <Th fontFamily='gilroy' textTransform='capitalize' fontSize={"1.2rem"} fontWeight={"500"} height='4rem'>
                        Email
                      </Th>
                      <Th fontFamily='gilroy' textTransform='capitalize' fontSize={"1.2rem"} fontWeight={"500"} height='4rem'>
                        Mobile Number
                      </Th>
                      <Th  fontFamily='gilroy' textTransform='capitalize' fontSize={"1.2rem"} fontWeight={"500"} height='4rem'>
                        {" "}
                        Company Name
                      </Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {contacts.map((contact, index) => {
                      return (
                        <Tr key={index} px={"1rem"} height="5rem">
                          <Td isLoaded={!loading}>
                            <Text w={"35rem"}>{contact.name}</Text>
                          </Td>
                          <Td isLoaded={!loading}>
                            <Text w={"30rem"}>{contact.email}</Text>
                          </Td>
                          <Td isLoaded={!loading}>
                            <Text w={"30rem"}>{contact.mobile}</Text>
                          </Td>
                          <Td isLoaded={!loading}>
                            <Text w={"30rem"}>{contact.companyName}</Text>
                          </Td>
                        </Tr>
                      );
                    })}
                  </Tbody>
                </Table>
              </TableContainer>
              {/* <Box
								overflow={"hidden"}
								overflowX={"scroll"}
								scrollBehavior={"smooth"}
								borderTopRadius={"12px"}
								overscrollBehaviorX={"contain"}
								className={css`
									::-webkit-scrollbar {
										display: none;
									}
								`}
							>
								<Box minW={"900px"}>
									<Box
										display={"flex"}
										px={"1rem"}
										py={"1rem"}
										flexDir={"row"}
										bgColor={"#DEE6FF"}
									>
										<Text
											w={"35rem"}
											fontWeight={"600"}
											fontSize={"1.2rem"}
										>
											Name
										</Text>
										<Text
											w={"30rem"}
											fontSize={"1.2rem"}
											fontWeight={"600"}
										>
											Email
										</Text>
										<Text
											w={"30rem"}
											fontSize={"1.2rem"}
											fontWeight={"600"}
										>
											Mobile Number
										</Text>
										<Text
											w={"30rem"}
											fontSize={"1.2rem"}
											fontWeight={"600"}
										>
											Company Name
										</Text>
									</Box>
									<Box
										overflowY={"scroll"}
										h={"40rem"}
										maxH={"40rem"}
										className={css`
											::-webkit-scrollbar {
												display: none;
											}
										`}
									>
										{contacts.map((contact, index) => {
											return (
												<Box
													key={index}
													px={"1rem"}
													bgColor={"white"}
													display={"flex"}
													flexDir={"row"}
													py={"2rem"}
												>
													<Skeleton isLoaded={!loading}>
														<Text w={"35rem"}>
															{contact.name}
														</Text>
													</Skeleton>
													<Skeleton isLoaded={!loading}>
														<Text w={"30rem"}>
															{contact.email}
														</Text>
													</Skeleton>
													<Skeleton isLoaded={!loading}>
														<Text w={"30rem"}>
															{contact.mobile}
														</Text>
													</Skeleton>
													<Skeleton isLoaded={!loading}>
														<Text w={"30rem"}>
															{contact.companyName}
														</Text>
													</Skeleton>
													
              									 </Box>
											)
										})}
										
									</Box>
								</Box>
							</Box>  */}
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
                  onClick={handleContactsPagination}
                >
                  View More
                </Button>
              </Flex>
            </Box>
          </Box>
        </Box>
      </Box>
    </Center>
  );
};

export default ContactAdmin;
