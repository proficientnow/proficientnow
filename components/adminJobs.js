/** @format */

import {
  Box,
  Button,
  ButtonGroup,
  Center,
  Editable,
  EditableInput,
  EditablePreview,
  Flex,
  Grid,
  IconButton,
  Input,
  Link,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Skeleton,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useDisclosure,
  useEditableControls,
} from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import { css } from "@emotion/css";

import { deleteCandidateById, getAllCandidates } from "../lib/backendCalls";
import View from "../public/view.svg";
import { PostJobContext } from "../pages/admin/jobs";
import { AddBox } from "@mui/icons-material";
import LocationCity from "@mui/icons-material/LocationCity";
import AdminJobSec from "./sections/adminJobSec";
import {
  CheckIcon,
  ChevronDownIcon,
  CloseIcon,
  EditIcon,
} from "@chakra-ui/icons";

const CandidateLink = ({
  name,
  position,
  company,
  id,
  deleteFun,
  email,
  number,
  dob,
  skills,
  currentCompany,
  currentCtc,
  currenttitle,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Modal isOpen={isOpen} size={"xl"} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Candidate Application</ModalHeader>
          <ModalCloseButton
            border={"2px solid #000929"}
            _hover={{ opacity: "70%" }}
          />
          <ModalBody fontFamily={"Gilroy"} fontSize={"1.2rem"}>
            <Box display={"flex"} flexDir={"column"} gap={"1.5rem"}>
              <Box display={"flex"}>
                {" "}
                <Text w={"50%"}>Candidate Name:</Text>
                <Text>{name}</Text>
              </Box>
              <Box display={"flex"}>
                {" "}
                <Text w={"50%"}>Candidate Eamil:</Text>
                <Text>{email}</Text>
              </Box>
              <Box display={"flex"}>
                {" "}
                <Text w={"50%"}>Phone number:</Text>
                <Text>{number}</Text>
              </Box>
              <Box display={"flex"}>
                {" "}
                <Text w={"50%"}>Skills:</Text>
                <Text>{skills}</Text>
              </Box>
              <Box display={"flex"}>
                {" "}
                <Text w={"50%"}>Current working company:</Text>
                <Text>{currentCompany}</Text>
              </Box>
              <Box display={"flex"}>
                {" "}
                <Text w={"50%"}>Current working ctc:</Text>
                <Text>{currentCtc}</Text>
              </Box>
              <Box display={"flex"}>
                {" "}
                <Text w={"50%"}>Current working title:</Text>
                <Text>{currenttitle}</Text>
              </Box>
            </Box>
          </ModalBody>

          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>{" "}
      {/* <Button
        onClick={onOpen}
        bg={"transparent"}
        fontWeight={"500"}
        _hover={{ color: "gray" }}
        rightIcon={<View />}
      >
        View
      </Button> */}
      <Link
        onClick={onOpen}
        display={"flex"}
        alignItems={"center"}
        gap={"0.25rem"}
        _hover={{ color: "gray" }}
      >
        <Text>View</Text>
        <Box
          as="svg"
          fill="transparent"
          _hover={{
            transition: "ease",
            transitionDuration: "0.5s",
          }}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          width={"16px"}
          height={"16px"}
        >
          {" "}
          <Box
            as="path"
            d="M1.35684 8.21493C1.31078 8.07676 1.31074 7.92716 1.35671 7.78895C2.28229 5.00648 4.907 3 8.00035 3C11.0923 3 13.716 5.00462 14.6427 7.78507C14.6887 7.92325 14.6888 8.07285 14.6428 8.21105C13.7172 10.9935 11.0925 13 7.99918 13C4.90727 13 2.28356 10.9954 1.35684 8.21493Z M9.99981 8C9.99981 9.10457 9.10437 10 7.9998 10C6.89524 10 5.9998 9.10457 5.9998 8C5.9998 6.89543 6.89524 6 7.9998 6C9.10437 6 9.99981 6.89543 9.99981 8Z"
            stroke="#0F172A"
            _hover={{
              stroke: "gray",
            }}
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </Box>
      </Link>
    </>
  );
};

const JobsLink = ({
  company,
  designation,
  industry,
  shift,
  country,
  city,
  salarymin,
  salarymax,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const postJobContext = useContext(PostJobContext);
  const editJob = () => {
    if (postJobContext.openModal)
      postJobContext.openModal({
        designation: designation,
        industry: industry,
        location: {
          city: city,
          country: country,
        },
        company: company,
        salary: {
          min: salarymin,
          max: salarymax,
        },
        shift: shift,
        jobDescription: "",
        qualifications: [],
      });
  };

  function EditableControls() {
    const {
      isEditing,
      getSubmitButtonProps,
      getCancelButtonProps,
      getEditButtonProps,
    } = useEditableControls();

    return isEditing ? (
      <ButtonGroup size="sm">
        <IconButton icon={<CheckIcon />} {...getSubmitButtonProps()} />
        <IconButton icon={<CloseIcon />} {...getCancelButtonProps()} />
      </ButtonGroup>
    ) : (
      <Flex justifyContent="center">
        <IconButton
          bg="transparent"
          size="sm"
          icon={<EditIcon />}
          {...getEditButtonProps()}
        />
      </Flex>
    );
  }

  return (
    <>
      <Modal isOpen={isOpen} size={"xl"} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Job Information</ModalHeader>
          <ModalCloseButton
            border={"2px solid #000929"}
            _hover={{ opacity: "70%" }}
          />
          <ModalBody fontFamily={"Gilroy"} fontSize={"1.2rem"}>
            <Box display={"flex"} flexDir={"column"} gap={"1.5rem"}>
              <Box display={"flex"}>
                {" "}
                <Text w={"50%"}>Company Name:</Text>
                <Editable
                  textAlign="center"
                  defaultValue={company}
                  isPreviewFocusable={false}
                >
                  <Flex alignItems="center" gap={"0.5rem"}>
                    <EditablePreview />
                    <EditableInput />
                    <EditableControls />
                  </Flex>
                </Editable>
              </Box>
              <Box display={"flex"}>
                {" "}
                <Text w={"50%"}>Designation:</Text>
                <Editable
                  textAlign="center"
                  defaultValue={designation}
                  isPreviewFocusable={false}
                >
                  <Flex alignItems="center" gap={"0.5rem"}>
                    <EditablePreview />
                    <EditableInput />
                    <EditableControls />
                  </Flex>
                </Editable>
              </Box>
              <Box display={"flex"}>
                {" "}
                <Text w={"50%"}>Industry:</Text>
                <Editable
                  textAlign="center"
                  defaultValue={industry}
                  isPreviewFocusable={false}
                >
                  <Flex alignItems="center" gap={"0.5rem"}>
                    <EditablePreview />
                    <EditableInput />
                    <EditableControls />
                  </Flex>
                </Editable>
              </Box>
              <Box display={"flex"}>
                {" "}
                <Text w={"50%"}>City:</Text>
                {/* <Text>{city} Hyderabad</Text> */}
                <Editable
                  textAlign="center"
                  defaultValue="Hyderabad"
                  isPreviewFocusable={false}
                >
                  <Flex alignItems="center" gap={"0.5rem"}>
                    <EditablePreview />
                    <EditableInput />
                    <EditableControls />
                  </Flex>
                </Editable>
              </Box>
              <Box display={"flex"}>
                {" "}
                <Text w={"50%"}>Shift:</Text>
                {/* <Text>{shift}</Text> */}
                <Editable
                  textAlign="center"
                  defaultValue={shift}
                  isPreviewFocusable={false}
                >
                  <Flex alignItems="center" gap={"0.5rem"}>
                    <EditablePreview />
                    <EditableInput />
                    <EditableControls />
                  </Flex>
                </Editable>
              </Box>
            </Box>
          </ModalBody>

          <ModalFooter gap={"1rem "}>
            <Button
              bg={"#000929"}
              color={"white"}
              _hover={{ bg: "gray.100", color: "#000929" }}
            >
              Update
            </Button>
            <Button
              onClick={onClose}
              color={"#000929"}
              bg={"white"}
              _hover={{ color: "gray.500", bg: "black.100 " }}
            >
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>{" "}
      <Flex align={"center"} gap={"0.75rem"}>
        <Link
          onClick={onOpen}
          display={"flex"}
          alignItems={"center"}
          gap={"0.25rem"}
          _hover={{ color: "gray" }}
        >
          View
          <Box
            as="svg"
            fill="transparent"
            _hover={{
              transition: "ease",
              transitionDuration: "0.5s",
            }}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            width={"16px"}
            height={"16px"}
          >
            <Box
              as="path"
              d="M1.35684 8.21493C1.31078 8.07676 1.31074 7.92716 1.35671 7.78895C2.28229 5.00648 4.907 3 8.00035 3C11.0923 3 13.716 5.00462 14.6427 7.78507C14.6887 7.92325 14.6888 8.07285 14.6428 8.21105C13.7172 10.9935 11.0925 13 7.99918 13C4.90727 13 2.28356 10.9954 1.35684 8.21493Z M9.99981 8C9.99981 9.10457 9.10437 10 7.9998 10C6.89524 10 5.9998 9.10457 5.9998 8C5.9998 6.89543 6.89524 6 7.9998 6C9.10437 6 9.99981 6.89543 9.99981 8Z"
              stroke="#0F172A"
              _hover={{
                stroke: "gray",
              }}
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </Box>
        </Link>
        <Link
          // onClick={}
          display={"flex"}
          alignItems={"center"}
          gap={"0.25rem"}
          _hover={{ color: "gray" }}
        >
          Delete
          <Box
            as="svg"
            fill="transparent"
            _hover={{
              transition: "ease",
              transitionDuration: "0.5s",
            }}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 18 20"
            width={"15px"}
            height={"15px"}
          >
            <Box
              as="path"
              d="M16 5L15.1327 17.1425C15.0579 18.1891 14.187 19 13.1378 19H4.86224C3.81296 19 2.94208 18.1891 2.86732 17.1425L2 5M7 9V15M11 9V15M12 5V2C12 1.44772 11.5523 1 11 1H7C6.44772 1 6 1.44772 6 2V5M1 5H17"
              stroke="#0F172A"
              _hover={{
                stroke: "gray",
              }}
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </Box>
        </Link>
      </Flex>
    </>
  );
};

const AdminJobs = ({
  jobData,
  candidateData,
  candidateLoading,
  countLoading,
  loadingJobs,
  documentCounts,
  handleCandidatePagination,
  handleJobsPagination,
  isCandidatesNextPageAvl,
  isJobsNextPageAvl,
}) => {
  const [dataJob, setdataJob] = useState(jobData);
  const [dataCandidate, setdataCandidate] = useState(candidateData);

  const onDelete = () => {
    deleteCandidateById(id).then((a) => {
      getAllCandidates().then((b) => {});
    });
  };

  useEffect(() => {
    setdataJob(jobData);
  }, [jobData]);

  return (
    <Center bgColor={"#F0F4FF"} minH={"91.5vh"} w={"full"}>
      <Box
        w={"95vw"}
        display={"flex"}
        // bg='proficient'
        flexDirection={"column"}
        alignItems={"start"}
      >
        <Box w={"full"} display={"flex"} flexDir={"column"}>
          <Box>
            <AdminJobSec
              loading={countLoading}
              documentCounts={documentCounts}
            />
            <Box
              display={"flex"}
              flexDir={{ base: "column", xl: "row" }}
              mb={"3rem"}
              gap={"5rem"}
              maxW={"1800px"}
            >
              <Box
                overflow={"hidden"}
                // overflowX={"scroll"}
                display={"flex"}
                flexDir={"column"}
                w={{ base: "full", xl: "50%" }}
                maxW={{ base: "full", xl: "50%" }}
                className={css`
                  ::-webkit-scrollbar {
                    display: none;
                  }
                `}
              >
                <Text my={"2rem"} fontSize={"35px"} fontWeight={"500"}>
                  Job Application
                </Text>

                <TableContainer
                  borderTopRadius="12px"
                  className={css`
                    ::-webkit-scrollbar {
                      display: none;
                    }
                  `}
                >
                  <Skeleton isLoaded={!candidateLoading}>
                    <Table
                      variant="striped"
                      background={"white"}
                      colorScheme={"telegram"}
                    >
                      <Thead>
                        <Tr>
                          <Th
                            height="5rem"
                            py={"20px"}
                            textTransform={"capitalize"}
                            fontSize={{ lg: "1.2rem", base: "18px" }}
                            fontWeight="500"
                            fontFamily="Gilroy"
                          >
                            Application Name
                          </Th>
                          <Th
                            py={"20px"}
                            textTransform={"capitalize"}
                            fontSize={{ lg: "1.2rem", base: "18px" }}
                            fontWeight="500"
                            fontFamily="Gilroy"
                          >
                            Postion
                          </Th>
                          <Th
                            py={"20px"}
                            textTransform={"capitalize"}
                            fontSize={{ lg: "1.2rem", base: "18px" }}
                            fontWeight="500"
                            fontFamily="Gilroy"
                          >
                            Company
                          </Th>
                        </Tr>
                      </Thead>
                      <Tbody>
                        {candidateData &&
                          candidateData.map((candidate, index) => {
                            return (
                              <Tr height="5rem" px={"1rem"} key={index}>
                                <Td>{candidate.name}</Td>
                                {/* <Text w={"30rem"}>
																{candidateJobs?.designation}
															</Text> */}
                                <Td>
                                  {candidate.currentJobDetails.company.length ==
                                  0
                                    ? "N/A"
                                    : candidate.currentJobDetails.company}
                                </Td>
                                <Td>
                                  <CandidateLink
                                    name={candidate.name}
                                    // position={
                                    // 	candidateJobs?.designation
                                    // }
                                    company={
                                      candidate.currentJobDetails.company
                                    }
                                    email={candidate.email}
                                    number={candidate.mobile}
                                    dob={candidate.dob}
                                    skills={candidate.skills}
                                    currentCompany={
                                      candidate.currentJobDetails.company
                                    }
                                    currentCtc={candidate.currentJobDetails.ctc}
                                    currenttitle={
                                      candidate.currentJobDetails.title
                                    }
                                  />
                                </Td>
                              </Tr>
                            );
                          })}
                      </Tbody>
                    </Table>
                  </Skeleton>
                </TableContainer>

                <Box
                  overflow={"hidden"}
                  overflowX={"scroll"}
                  display={"flex"}
                  flexDir={"column"}
                  w={{ base: "full", xl: "100%" }}
                  maxW={{ base: "full", xl: "100%" }}
                  className={css`
                    ::-webkit-scrollbar {
                      display: none;
                    }
                  `}
                >
                  <Box
                    overflow={"hidden"}
                    borderTopRadius={"12px"}
                    overflowX={"scroll"}
                    minW={{ base: "800px", lg: "800px" }}
                    maxW={{ xl: "45vw" }}
                    w={{ base: "full", xl: "50%" }}
                    className={css`
                      ::-webkit-scrollbar {
                        display: none;
                      }
                    `}
                    overscrollBehavior={"smooth"}
                  >
                    {/* <Box
                      display={"flex"}
                      px={"1rem"}
                      py={"1rem"}
                      flexDir={"row"}
                      minW={{ base: "800px", lg: "400px" }}
                      bgColor={"#DEE6FF"}
                    >
                      <Text
                        w={"34%"}
                        textAlign="left"
                        fontSize={"1.2rem"}
                        fontWeight={"500"}
                      >
                        Application Name
                      </Text>
                       <Text
												w={"30rem"}
												fontSize={"1.2rem"}
												fontWeight={"500"}
											>
												Postion
											</Text> 
                      <Text
                        w={"25%"}
                        textAlign="left"
                        fontSize={"1.2rem"}
                        fontWeight={"500"}
                      >
                        Company
                      </Text>
                      <Text
                        w={"20%"}
                        textAlign="left"
                        fontSize={"1.2rem"}
                        fontWeight={"500"}
                      >
                        Action
                      </Text>
                    </Box> */}
                    {/* <Skeleton isLoaded={!candidateLoading}>
                      <Box
                        overflowY={"scroll"}
                        minh={"fit-content"}
                        maxH={"30rem"}
                        className={css`
                          ::-webkit-scrollbar {
                            display: none;
                          }
                        `}
                      >
                        {candidateData &&
                          candidateData.map((candidate, index) => {
                            return (
                              <Box
                                px={"1rem"}
                                key={index}
                                minW={{
                                  base: "800px",
                                  lg: "400px",
                                }}
                                bgColor={"white"}
                                display={"flex"}
                                flexDir={"row"}
                                py={"2rem"}
                              >
                                <Text w={"35%"}>{candidate.name}</Text>
                               
                                <Text w={"25%"}>
                                  {candidate.currentJobDetails.company.length ==
                                  0
                                    ? "N/A"
                                    : candidate.currentJobDetails.company}
                                </Text>
                                <CandidateLink
                                  name={candidate.name}
                                
                                  company={candidate.currentJobDetails.company}
                                  email={candidate.email}
                                  number={candidate.mobile}
                                  dob={candidate.dob}
                                  skills={candidate.skills}
                                  currentCompany={
                                    candidate.currentJobDetails.company
                                  }
                                  currentCtc={candidate.currentJobDetails.ctc}
                                  currenttitle={
                                    candidate.currentJobDetails.title
                                  }
                                />
                              </Box>
                            );
                          })}
                      </Box>
                    </Skeleton>  */}
                  </Box>
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
                      color: "gray.400",
                    }}
                    _focus={{
                      backgroundColor: "transparent",
                    }}
                    _active={{
                      backgroundColor: "transparent",
                    }}
                    rightIcon={<ChevronDownIcon />}
                    isDisabled={!isCandidatesNextPageAvl}
                    onClick={handleCandidatePagination}
                  >
                    View More
                  </Button>
                </Flex>
              </Box>
              <Box
                overflow={"hidden"}
                display={"flex"}
                flexDir={"column"}
                w={{ base: "full", xl: "50%" }}
                className={css`
                  ::-webkit-scrollbar {
                    display: none;
                  }
                `}
              >
                <Text my={"2rem"} fontSize={"35px"} fontWeight={"500"}>
                  Open Jobs
                </Text>
                <Box
                  overflow={"hidden"}
                  borderTopRadius={"12px"}
                  overflowX={"scroll"}
                  display={"flex"}
                  flexDir={"column"}
                  w={{ base: "full", xl: "100%" }}
                  maxW={{ base: "full", xl: "100%" }}
                  className={css`
                    ::-webkit-scrollbar {
                      display: none;
                    }
                  `}
                >
                  <Box
                    overflow={"hidden"}
                    borderTopRadius={"12px"}
                    overflowX={"scroll"}
                    minW={{ base: "800px", lg: "1000px" }}
                    maxW={{ xl: "45vw" }}
                    w={{ base: "full", xl: "50%" }}
                    className={css`
                      ::-webkit-scrollbar {
                        display: none;
                      }
                    `}
                    overscrollBehavior={"smooth"}
                  >
                    <TableContainer
                      overflowX={"auto"}
                      className={css`
                        ::-webkit-scrollbar {
                          display: none;
                        }
                      `}
                    >
                      <Table
                        variant="striped"
                        background={"white"}
                        colorScheme="telegram"
                      >
                        <Thead>
                          <Tr>
                            <Th
                              height="5rem"
                              py={"20px"}
                              textTransform={"capitalize"}
                              fontSize={{ lg: "1.2rem", base: "18px" }}
                              fontWeight="500"
                              fontFamily="Gilroy"
                            >
                              Company Name
                            </Th>
                            <Th
                              py={"20px"}
                              textTransform={"capitalize"}
                              fontSize={{ lg: "1.2rem", base: "18px" }}
                              fontWeight="500"
                              fontFamily="Gilroy"
                            >
                              Postion
                            </Th>
                            <Th
                              py={"20px"}
                              textTransform={"capitalize"}
                              fontSize={{ lg: "1.2rem", base: "18px" }}
                              fontWeight="500"
                              fontFamily="Gilroy"
                            >
                              Industry
                            </Th>
                            <Th
                              py={"20px"}
                              textTransform={"capitalize"}
                              fontSize={{ lg: "1.2rem", base: "18px" }}
                              fontWeight="500"
                              fontFamily="Gilroy"
                            >
                              City
                            </Th>
                            <Th
                              py={"20px"}
                              textTransform={"capitalize"}
                              fontSize={{ lg: "1.2rem", base: "18px" }}
                              fontWeight="500"
                              fontFamily="Gilroy"
                            >
                              {" "}
                              Shift
                            </Th>
                            <Th
                              py={"20px"}
                              textTransform={"capitalize"}
                              fontSize={{ lg: "1.2rem", base: "18px" }}
                              fontWeight="500"
                              fontFamily="Gilroy"
                              textAlign="center"
                            >
                              {" "}
                              Action
                            </Th>
                          </Tr>
                        </Thead>
                        <Tbody>
                          {jobData &&
                            jobData.map((jobs, index) => {
                              return (
                                <Tr key={index} isLoaded={!loadingJobs}>
                                  <Td
                                    height="5rem"
                                    w={"20rem"}
                                    fontWeight={"500"}
                                  >
                                    {jobs.company}
                                  </Td>
                                  <Td fontWeight={"500"}>{jobs.designation}</Td>
                                  <Td fontWeight={"500"}>{jobs.industry}</Td>
                                  <Td fontWeight={"500"}>
                                    {jobs.location.city}
                                  </Td>
                                  <Td fontWeight={"500"}>{jobs.shift}</Td>
                                  <Td fontWeight={"500"}>
                                    <JobsLink
                                      company={jobs.company}
                                      designation={jobs.designation}
                                      industry={jobs.industry}
                                      shift={jobs.shift}
                                      country={jobs.country}
                                      city={jobs.city}
                                      salarymin={jobs.min}
                                      salarymax={jobs.max}
                                    />
                                  </Td>
                                </Tr>
                              );
                            })}
                        </Tbody>
                      </Table>
                    </TableContainer>
                  </Box>
                 
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
                        color: "gray.400",
                      }}
                      _focus={{
                        backgroundColor: "transparent",
                      }}
                      _active={{
                        backgroundColor: "transparent",
                      }}
                      rightIcon={<ChevronDownIcon />}
                      isDisabled={!isJobsNextPageAvl}
                      onClick={handleJobsPagination}
                    >
                      View More
                    </Button>
                  </Flex>
              </Box>
              
            </Box>
          </Box>
        </Box>
      </Box>
    </Center>
  );
};

export default AdminJobs;
