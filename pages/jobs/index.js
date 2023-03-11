/** @format */

import {
  Box,
  Grid,
  Text,
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuOptionGroup,
  MenuItemOption,
  FormControl,
  Select,
  chakra,
  Skeleton,
  SkeletonText,
} from "@chakra-ui/react";
import React, { useState, useEffect, useContext } from "react";
import JobCard from "../../components/jobCard";
import NavJobCard from "../../components/navJobCard";
import GridView from "../../components/icons/gridd.svg";
import ListView from "../../components/icons/vertical.svg";
import ChevronDownIcon from "../../components/icons/arrow-down.svg";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import { css } from "@emotion/css";
import Hero from "../../components/hero";

import axios from "axios";

import { getAllJobs, getJobByFilters } from "../../lib/backendCalls";

import { useRouter } from "next/router";
import MainLayout from "../../components/layout/mainLayout";
import Field from "../../components/sections/formControl";
import PaginationJobCard from "../../components/paginationJobCard";
import Pagination from "@choc-ui/paginator";
import { useRouteContext } from "../../contexts/routeContext";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const visibleVariants = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.75 } },
  hidden: { opacity: 0, scale: 1 },
};
//information

const industry = {
  title: "Job Category",
  category1: "Mechanical",
  category2: "IT",
  category3: "Civil",
};

const location = {
  title: "Location",
  category1: "India",
  category2: "US",
  category3: "Australia",
};

const salary = {
  title: "Salary Range",
  category1: "5-10/annum",
  category2: "10-15/annum",
  category3: "15-20/annum",
};

export default function Jobs({ session }) {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  //usestates

  const [loading, setLoading] = useState(true);
  const [layoutView, setLayoutView] = useState("grid");
  const [jobData, setJobData] = useState({
    page: 0,
    pageLimit: 9,
    jobs: [],
  });

  // useEffect(() => {
  //  if(user.location.city){
  //   jobData?.jobs?.map((job)=>{
  //     if(job.location?.city==user.location.city){

  //     }

  //   })
  //  }
  //  else{
  //   console.log("bye")
  //  }
  // }, [jobData])

  const [jobId, setJobId] = useState("");
  // DropDown
  const [optSelect, setOptSelect] = useState({
    industry: "",
    salary: "",
  });
  const [showlocation, setShowlocation] = useState(false);

  const [filters, setFilters] = useState({
    industry: "",
    salary: {
      min: 0,
      max: 0,
    },
    location: {
      city: "",
      country: "",
    },
    designation: "",
  });
  //dropdown industry
  //   const onCategoryChange = (e) => {
  //     setOptSelect({
  //       ...optSelect,
  //       industry: e.target.value,
  //     });
  //   };

  //   //dropdown salary
  //   const onSalaryChange = (e) => {
  //     setOptSelect({
  //       ...optSelect,
  //       salary: JSON.parse(e.target.value),
  //     });
  //   };

  //   const [location, setLocation] = useState({
  //     city: "",
  //   });

  //heroForm data
  //   const [searchdata, setSearchdata] = useState({
  //     location: "",
  //     designation: "",
  //   });
  // const { routeState, setRouteState, user, setUser } =
  // 	useContext(RouteContext)

  const { routeState, setRouteState } = useRouteContext();

  const handleChange = (e) => {
    e.preventDefault();
    const key = e.target.name;
    switch (key) {
      case "designation":
        setFilters({
          ...filters,
          designation: e.target.value,
        });
        break;

      case "location":
        setFilters({
          ...filters,
          location: {
            city: e.target.value,
          },
        });
        break;
      case "salary":
        setFilters({
          ...filters,
          salary: {
            ...filters.salary,
            min: e.target.value ? JSON.parse(e.target.value).min : 0,
            max: e.target.value ? JSON.parse(e.target.value).max : 0,
          },
        });
        break;
      case "industry":
        setFilters({
          ...filters,
          industry: e.target.value,
        });
      default:
        break;
    }
  };

  console.log(jobData);

  //error pop up
  const errorMsg = () => {
    alert("Enter all fields");
  };

  const onSubmit = async () => {
    let obj = { ...filters };
    getJobByFilters({ filters: obj }).then((response) => {
      setJobData({
        ...jobData,
        jobs: [...response.data.data],
      });
    });
  };

  const onFilter = (optSelect, searchdata) => {
    {
      designation = searchdata.designation;
      location = searchdata.location;
      industry = optSelect.industry;
      salary = optSelect.salary;
    }
  };

  useEffect(() => {
    if (showlocation == true) {
      navigator.geolocation.getCurrentPosition((position) => {
        let lat = position.coords.latitude;
        let long = position.coords.longitude;
        let apiKey = "AIzaSyAuecGLrVABPhJXc235NQ2smQpO1VUe2oY";
        let url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat}%2C${long}&result_type=locality&key=${apiKey}`;
        axios.get(url).then((a) => {
          let city = a.data.results[0].address_components[0].long_name;
          return setFilters({
            ...filters,
            location: {
              city: city,
            },
          });
        });
      });
    }
    return;
  }, [showlocation]);

  // useEffect(() => {
  // 	setFilters({
  // 		...filters,
  // 		location: {
  // 			city: user.location.city,
  // 		},
  // 	})
  // }, [])

  useEffect(() => {
    setLoading(true);
    getAllJobs(jobData.page, jobData.pageLimit)
      .then((result) => {
        setJobData({
          ...jobData,
          jobs: [...result?.data?.data],
        });
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        alert(`ther has been an error ${err}`);
      });
    return;
  }, [jobData.page]);

  useEffect(() => {
    onSubmit();
  }, [filters.salary, filters.industry, filters.location.city]);

  const router = useRouter();

  const handleLayout = (layout) => {
    setLayoutView(layout);
  };

  // console.log(user)
  console.log(filters);

  return (
    <MainLayout session={session}>
      <Box
        display={"flex"}
        flexDir={"column"}
        w={"full"}
        justifyContent={"center"}
        alignItems={"center"}
        backgroundColor={"#FBFBFB"}
      >
        <Hero
          onClick={onSubmit}
          onChange={handleChange}
          value={
            showlocation == true
            // ? `${location.city}, ${location.country}`
            // : filters.location.city
          }
          valueLoc={filters.location.city}
          valueTitle={filters.designation}
          onLocClick={() => setShowlocation(true)}
          // locationValue={onLocationChange}
          // jobTextValue={onDesignationChange}
          jobData={jobData}
        />
        <Flex
          as={motion.div}
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={visibleVariants}
          w={"100%"}
          maxW={"1500px"}
          px={{ base: "2.5vw", xl: "2rem" }}
          justifyContent={"space-between"}
          backgroundColor={"#FBFBFB"}
          h={"190px"}
          alignItems={"center"}
          overflow={"hidden"}
          zIndex={"100"}
        >
          <Flex
            w={{ md: "full", base: "90vw" }}
            maxW={"600px"}
            overflowX={{ base: "scroll", md: "unset" }}
            alignItems={{
              base: "center",
              md: "flex-start",
            }}
            justifyContent={{
              base: "center",
              md: "flex-start",
            }}
            gap={"2rem"}
            zIndex={"100"}
            // maxW={"600px"}

            // justify={{ md: "space-between", base: "start" }}
          >
            {/* {navList.map((nav, index) => { */} {/* return ( */}
            {/* <Select
              borderRadius={"25px"}
              w={{ lg: "10rem", xl: "12rem" }}
              h={"3.3rem"}
              bgColor={"white"}
              onChange={handleChange}
              placeholder="Job Categories"
              name="industry"
            >
              <option value={industry.category1}> {industry.category1}</option>
              <option value={industry.category2}> {industry.category2} </option>
              <option value={industry.category3}> {industry.category3} </option>
            </Select> */}
            <Menu
              borderRadius={"25px"}
              w={{ lg: "10rem", xl: "12rem" }}
              h={"3.3rem"}
              bgColor={"white"}
              onChange={handleChange}
              placeholder="Job Categories"
              name="industry"
              position={"relative"}
              zIndex="100"
            >
              <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                Industry
              </MenuButton>
              <MenuList>
                <MenuItem value={industry.category1}>
                  {industry.category1}
                </MenuItem>
                <MenuItem value={industry.category2}>
                  {industry.category2}
                </MenuItem>
                <MenuItem value={industry.category3}>
                  {industry.category3}
                </MenuItem>
              </MenuList>
            </Menu>
            {/* <Select
              borderRadius={"25px"}
              w={{ lg: "10rem", xl: "12rem" }}
              h={"3.3rem"}
              bgColor={"white"}
              onChange={handleChange}
              placeholder="Salary Range"
              name="salary"
            >
              <option value={JSON.stringify({ min: 5, max: 10 })}>
                {salary.category1}
              </option>
              <option value={JSON.stringify({ min: 10, max: 15 })}>
                {salary.category2}
              </option>
              <option value={JSON.stringify({ min: 15, max: 20 })}>
                {salary.category3}
              </option>
            </Select> */}
            <Menu
              borderRadius={"25px"}
              w={{ lg: "10rem", xl: "12rem" }}
              h={"3.3rem"}
              bgColor={"white"}
              onChange={handleChange}
              placeholder="Salary Range"
              name="salary"
              zIndex="100"
            >
              <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                Salary
              </MenuButton>
              <MenuList>
                <MenuItem value={JSON.stringify({ min: 5, max: 10 })}>
                  {salary.category1}
                </MenuItem>
                <MenuItem value={JSON.stringify({ min: 10, max: 15 })}>
                  {salary.category2}
                </MenuItem>
                <MenuItem value={JSON.stringify({ min: 15, max: 20 })}>
                  {salary.category3}
                </MenuItem>
              </MenuList>
            </Menu>
          </Flex>
          <Flex gap={"1rem"}>
            <Button
              display={{ base: "none", md: "block" }}
              onClick={() => {
                handleLayout("grid");
              }}
              bg={"transparent"}
              backgroundColor={layoutView == "grid" ? "gray.200" : "none"}
            >
              <GridView />
            </Button>
            <Button
              display={{ base: "none", md: "block" }}
              onClick={() => {
                handleLayout("list");
              }}
              bg={"transparent"}
              backgroundColor={layoutView == "grid" ? "none" : "gray.200"}
            >
              <ListView />
            </Button>
          </Flex>
        </Flex>
        <Grid
          as={motion.div}
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={visibleVariants}
          backgroundColor={"#FBFBFB"}
          w={"95%"}
          maxW={"1500px"}
          rowGap={"2rem"}
          columnGap={"2rem"}
          gridAutoFlow={{ sm: "row" }}
          gridTemplateColumns={
            layoutView == "grid"
              ? { md: "repeat(2,1fr)", lg: "repeat(3,1fr)" }
              : "repeat(1,1fr)"
          }
          gridTemplateRows={"repeat(3,1fr)"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          {loading == true
            ? [1, 2, 3, 4, 5, 6, 7, 8, 9].map((a) => {
                return (
                  <Skeleton
                    key={a}
                    mx="auto"
                    w={layoutView == "grid" ? "full" : "90vw"}
                    maxW={layoutView == "grid" ? "600px" : "1500px"}
                    height="17rem"
                    rounded={"20px"}
                    // shadow={"sm"}
                    startColor="blackAlpha.100"
                    endColor="blackAlpha.300"
                    borderColor={"#ECEBF3"}
                    // display={'flex'}
                    // flexDir={''}
                    borderWidth={"1px"}
                    isLoaded={!loading}
                    fadeDuration={a * a}
                  />
                );
              })
            : jobData?.jobs?.map((job, index) => {
                return (
                  <JobCard
                    variant={layoutView}
                    key={index}
                    id={job._id}
                    industry={job.industry}
                    designation={job.designation}
                    company={job.company}
                    location={job.location?.city}
                    salary={`${job.salary?.min} - ${job.salary?.max}/annum`}
                    shift={job.shift}
                    content={job.content}
                    // doc={ job.createdAt }
                  />
                );
              })}
        </Grid>
        <PaginationJobCard jobData={jobData} setJobData={setJobData} />
      </Box>
    </MainLayout>
  );
}

// export async function getServerSideProps() {
// 	// Fetch data from external API
// 	let token = process.env.ipToken
// 	let url = `https://ipinfo.io/json?token=${token}`
// 	const res = await fetch(url)
// 	const data = await res.json()
// 	// const data = "hello"
// 	// Pass data to the page via props
// 	return { props: { data } }
// }
