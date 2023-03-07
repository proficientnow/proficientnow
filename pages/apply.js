/** @format */

import NextLink from "next/link";
import React, { useEffect, useState } from "react";
import { Box, Heading, Link, IconButton, LinkBox } from "@chakra-ui/react";
import JobTitle from "../components/jobTitle";
import JobBreadcrumb from "../components/sections/jobBreadcrumb";
import Wizard from "../components/wizard";
import { useRouter } from "next/router";
import { useToast } from "@chakra-ui/react";
import { getSession, useSession } from "next-auth/react";
import MainLayout from "../components/layout/mainLayout";

import { WarningTwoIcon } from "@chakra-ui/icons";

import {
  getJobDetailsById,
  createCandidate,
  onJobApply,
  checkIfApplied,
  findCandidateByAuthId,
  sendEmailResume,
} from "../lib/backendCalls";

export default function Apply({ session, check, jobDetails }) {
  const router = useRouter();
  const toast = useToast();

  // Date Picker :
  const [date, setDate] = useState(new Date());

  // Radio Buttons for Gender formControl:
  const [gender, setGender] = useState("Male");

  const [resume, setResume] = useState(null);

  const [status, setStatus] = useState(null);

  const [complete, setComplete] = useState(false);

  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    mobile: "",
    address: {
      line1: "",
      line2: "",
      city: "",
      state: "",
      country: "",
      pincode: Number,
    },
    dob: `${date}`,
    currentJobDetails: {
      company: "",
      ctc: "",
      title: "",
    },
    expectedCtc: Number,
    skills: [],
    gender: `${gender}`,
    authId: session?.user?._id,
  });

  useEffect(() => {
    // console.log(jobDetails)
    // console.log(session.user)
    // findCandidateByAuthId(session.user._id).then(a => {
    // 	console.log(a.data)
    // })
    // getJobDetailsById(jobDetails._id).then(a => {
    // 	console.log(a.data)
    // })
    // if (
    // 	jobDetails.usersApplied.includes(session?.user._id)
    // ) {
    // 	return toast({
    // 		title: "Unsuccessful.",
    // 		description: "There has been an error",
    // 		status: "error",
    // 		duration: 9000,
    // 		isClosable: true,
    // 		position: "top",
    // 	})
    // }
  }, []);

  const emailValidation = (v) => {
    return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      v
    );
  };

  // submit the form to db and update candidate with id
  // of job and job with id of candidate
  const handleSubmit = async () => {
    // create candidate with form details
    const data = await createCandidate(formValues);
    // updaet candidate and job with ids of each other
    const updateCandidate = await onJobApply(
      `${data.data.data._id}`,
      `${jobDetails._id}`
    );

    // if both operations are succesfull show toast
    // and update state to show success text
    if (data && updateCandidate) {
      setComplete(true);
      toast({
        title: "Success",
        description: "Your application has been successfully sent",
        status: "success",
        duration: 9000,
        isClosable: true,
        position: "top",
      });
    } else {
      toast({
        title: "Unsuccessful.",
        description: "There has been an error",
        status: "error",
        duration: 9000,
        isClosable: true,
        position: "top",
      });
    }
  };

  const onResumeChange = (e) => {
    e.preventDefault();
    setResume(e.target.files[0]);
    const selectedFile = e.target.files[0];
    const reader = new FileReader();
    reader.addEventListener("load", (event) => {
      let pdfFile = event.target.result;
      sendEmailResume({
        candidateName: formValues.name,
        candidateEmail: formValues.email,
        pdf: pdfFile,
      });
    });
    reader.readAsDataURL(selectedFile);
  };

  //  handle change function for form
  // this handleChange form does not handle dob field, gender field, and resume
  const handleChange = (e) => {
    e.preventDefault();
    const key = e.target.name;
    switch (key) {
      case "fullname":
        setFormValues({
          ...formValues,
          name: e.target.value,
        });
        break;

      case "email":
        setFormValues({
          ...formValues,
          email: e.target.value,
        });
        break;

      case "mobile":
        setFormValues({
          ...formValues,
          mobile: e.target.value,
        });
        break;

      case "city":
        setFormValues({
          ...formValues,
          address: {
            ...formValues.address,
            city: e.target.value,
          },
        });
        break;

      case "country":
        setFormValues({
          ...formValues,
          address: {
            ...formValues.address,
            country: e.target.value,
          },
        });
        break;

      case "state":
        setFormValues({
          ...formValues,
          address: {
            ...formValues.address,
            state: e.target.value,
          },
        });
        break;

      case "line1":
        setFormValues({
          ...formValues,
          address: {
            ...formValues.address,
            line1: e.target.value,
          },
        });
        break;

      case "line2":
        setFormValues({
          ...formValues,
          address: {
            ...formValues.address,
            line2: e.target.value,
          },
        });
        break;

      case "pincode":
        setFormValues({
          ...formValues,
          address: {
            ...formValues.address,
            pincode: e.target.value,
          },
        });
        break;

      case "company":
        setFormValues({
          ...formValues,
          currentJobDetails: {
            ...formValues.currentJobDetails,
            company: e.target.value,
          },
        });
        break;

      case "ctc":
        setFormValues({
          ...formValues,
          currentJobDetails: {
            ...formValues.currentJobDetails,
            ctc: e.target.value,
          },
        });
        break;

      case "title":
        setFormValues({
          ...formValues,
          currentJobDetails: {
            ...formValues.currentJobDetails,
            title: e.target.value,
          },
        });
        break;

      case "expectedCtc":
        setFormValues({
          ...formValues,
          expectecCtc: e.target.value,
        });
        break;

      case "skills":
        setFormValues({
          ...formValues,
          skills: [e.target.value],
        });
        break;

      default:
        break;
    }
  };

  return (
    <MainLayout>
      <JobBreadcrumb
        designation={`${jobDetails.designation}`}
        industry={`${jobDetails.industry}`}
      />
      <Box px={{ lg: "6.5rem", sm: "3rem" }} bgColor={"#E0E8F3"}>
        <JobTitle
          designation={`${jobDetails.designation}`}
          company={`${jobDetails.company}`}
          location={`${jobDetails.location.city}, ${jobDetails.location.country}`}
          salary={`${jobDetails.salary.min} - ${jobDetails.salary.max} LPA`}
          shift={`${jobDetails.shift}`}
          designationColor={"#020D45"}
          InfoElementColor={"#3E4969"}
          stroke={"#979EB2"}
        />
      </Box>

      <Box
        w={"full"}
        bgColor={"#FBFBFB"}
        display={"flex"}
        justifyContent={"center"}
      >
        {/* show error message if user has already applied for the same job */}
        {check == true ? (
          <Box
            display={"flex"}
            w={{ lg: "85vw", base: "90vw" }}
            // bgColor={"red.500"}
            h={"50vh"}
            border={"1px"}
            borderRadius={"15px"}
            borderColor={"#E6E6E6"}
            justifyContent={"center"}
            alignItems={"center"}
            my={"6rem"}
            flexDir={"column"}
            gap={"2rem"}
          >
            <Box
              h={"4rem"}
              w={"4rem"}
              bgColor={"red.500"}
              p={"1rem"}
              borderRadius={".5rem"}
            >
              <WarningTwoIcon boxSize={"8xs"} />
            </Box>
            <Heading>You have already applied for this job</Heading>

            <NextLink href="/jobs" passHref>
              <Link
                _hover={{
                  textDecoration: "underline",
                  color: "blue",
                }}
              >
                Browse other jobs
              </Link>
            </NextLink>
          </Box>
        ) : (
          <Box
            display={"flex"}
            w={{ lg: "85vw", base: "90vw" }}
            border={"1px"}
            bgColor={"#FFF"}
            borderRadius={"15px"}
            borderColor={"#E6E6E6"}
            justifyContent={"center"}
            alignItems={"center"}
            my={"6rem"}
          >
            {/* if the form is sent to db then show success message */}
            {/* if not then show form */}
            {complete == true ? (
              <Box
                display={"flex"}
                flexDir={"column"}
                alignItems={"center"}
                justifyContent={"center"}
                h={"70vh"}
                w={"100%"}
                rowGap={"3rem"}
              >
                <Heading>Your Application has been successfully sent!</Heading>
                <Link href="/jobs">see all jobs</Link>
              </Box>
            ) : (
              <Wizard
                formValues={formValues}
                handleChange={handleChange}
                onSubmit={handleSubmit}
                date={date}
                setDate={setDate}
                gender={gender}
                setGender={setGender}
                resume={resume}
                onResumeChange={onResumeChange}
              />
            )}
          </Box>
        )}
      </Box>
    </MainLayout>
  );
}

export async function getServerSideProps(context) {
  // get job id from query in url
  const session = await getSession({ req: context.req });
  const jobId = context.query.id;

  const authId = session?.user?._id;

  const check = await checkIfApplied(authId, jobId);

  // get the job details by id
  const jobs = await getJobDetailsById(jobId).catch((err) => {
    res.status(500).json({
      success: false,
      message: "internal server error",
    });
  });

  const jobDetails = jobs.data.data;

  // if session is not available then send user to signin flow
  if (!session) {
    return {
      redirect: {
        destination: "/auth/signin",
        permanent: false,
      },
    };
  }

  return {
    props: { session, check, jobDetails },
  };
}
