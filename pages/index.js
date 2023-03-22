/** @format */

import {
  Box,
  Button,
  Center,
  FormControl,
  FormLabel,
  Image,
  Text,
} from "@chakra-ui/react";

import HeroGeneral from "../components/heroGeneral";
import WhyProficientNow from "../components/whyproficientnow";
import Twocolumns from "../components/twocolumns";
import Jobcategories from "../components/jobcategories";
import Recuriter from "../components/recuriter";
import ChatUs from "../components/chatUs";

// import Gps from "../components/icons/gps.svg";
import axios from "axios";

//importing static data from json
import heroHomeContent from "../data/static/heroHomeContent.json";

import { useSession } from "next-auth/react";
import { useContext, useState } from "react";
import { useRouter } from "next/router";
import Field from "../components/sections/formControl";
import MainLayout from "../components/layout/mainLayout";

import useCurrentLocation from "../lib/hooks/useCurrentLocation";
import { useEffect } from "react";
import { UserContext } from "./_app";
import { useRouteContext } from "../contexts/routeContext";
import { Explore } from "@mui/icons-material";
import { ExploreRecords } from "../components/exploreRecords";
import dynamic from "next/dynamic";
import { TestimonialSection } from "../components/sections/testimonialSection";

// const TestimonialSection = dynamic(
//   () => import("../components/sections/testimonialSection"),
//   {
//     loading: () => <p>...</p>,
//     ssr: false,
//   }
// );

export default function Home({ data }) {
  //USESTATES

  // location field

  const { data: session, status } = useSession();
  const router = useRouter();
  const [formdata, setformdata] = useState({
    title: "",
    location: "",
  });
  const [showLocation, setshowLocation] = useState(false);
  // const [showLocationnot, setshowLocationnot] = useState(false);

  const [location, setLocation] = useState({
    city: "",
  });
  // const { routeState, setRouteState, user, setUser } =
  // 	useContext(RouteContext)

  // console.log(context);

  //

  //FUNCTIONS

  // useEffect(() => {
  // 	setUser({
  // 		...user,
  // 		location: location,
  // 	})
  // }, [location])

  // console.log(user)

  useEffect(() => {
    if (showLocation == true) {
      navigator.geolocation.getCurrentPosition((position) => {
        let lat = position.coords.latitude;
        let long = position.coords.longitude;
        let apiKey = "AIzaSyAuecGLrVABPhJXc235NQ2smQpO1VUe2oY";
        let url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat}%2C${long}&result_type=locality&key=${apiKey}`;
        axios.get(url).then((a) => {
          let city = a.data.results[0].address_components[0].long_name;
          return setLocation({
            city: city,
          });
        });
      });
    }
    return;
  }, [showLocation]);

  //For changing Jobtitle
  const onTitleChange = (e) => {
    setformdata({
      ...formdata,
      title: e.target.value,
    });
  };

  useEffect(() => {
    if (location) {
      setformdata({
        ...formdata,
        location: location.city,
      });
    }
  }, [location]);

  //For changing location
  const onLocationChange = (e) => {
    if (location) {
      setformdata({
        ...formdata,
        location: location.city,
      });
    }
    setformdata({
      ...formdata,
      location: e.target.value,
    });
  };

  //For dislaying error msg when a field is missing
  const errorMsg = () => {
    alert("Enter all fields");
  };

  //on Submission of Form
  const onSubmit = () => {
    router.push({
      pathname: "/jobs",
      query: {
        title: formdata.title,
        location: formdata.location,
      },
    });
  };

  const { routeState, setRouteState } = useRouteContext();

  console.log(routeState);

  return (
    <MainLayout bColor={"white"} sectionGap={"0"}>
      <HeroGeneral
        title={heroHomeContent[0].hero.title}
        description={heroHomeContent[0].hero.description}
        someOfOurCLients={heroHomeContent[0].hero.someOfOurClients}
      >
        <Box
          w={"100%"}
          mr={{ lg: "0rem" }}
          display={"flex"}
          // alignItems={"center"}
          justifyContent={{
            base: "center",
            lg: "flex-end",
          }}
        >
          <Box
            w={{
              base: "100%",
              md: "70%",
              lg: "65%",
              "2xl": "65%",
            }}
            pt={{
              base: "2rem",
              md: "2rem",
              lg: "10rem",
              xl: "11rem",
              "2xl": "13rem",
            }}
            mx={{ base: "rem", md: "1.5rem" }}
            display={"flex"}
            alignItems={"start"}
            justifyContent={"center"}
            mb={"2rem"}
          >
            <Box
              className="hero"
              w={"100%"}
              zIndex={"40"}
              borderRadius="15px"
              borderColor={"#E4D6EB"}
              maxWidth={"25rem"}
            >
              <Center>
                <Text
                  my={{ base: "0.7rem", lg: "1.5rem" }}
                  color={"black"}
                  fontWeight={"600"}
                  fontSize={"1rem"}
                  lineHeight={"1.7rem"}
                >
                  {/* This has to be deleted and be replaced with form */}
                  Find your Job
                </Text>{" "}
              </Center>{" "}
              <Box px={"1rem"}>
                <Box>
                  <FormControl
                    isRequired
                    // onSubmit={onSubmit}
                    // mb={{ xl: "3rem" }}
                    my={{ base: "0.5rem", md: "1.2rem" }}
                  >
                    <Box mb={{ xl: "3rem" }}>
                      <FormLabel
                        fontSize={"0.8rem"}
                        fontWeight={"600"}
                        color={"#02071A"}
                      >
                        Job title
                      </FormLabel>
                      <Field
                        placeHolder={"Search for Job here"}
                        // selectOptions={selectOptions}
                        type={"textField"}
                        onChange={onTitleChange}
                        // onClick={onClick}
                      />
                      <FormLabel
                        fontSize={"0.8rem"}
                        fontWeight={"600"}
                        color={"#02071A"}
                      >
                        Location
                      </FormLabel>
                      <Field
                        placeHolder={"Enter your location"}
                        type={"select"}
                        location={location}
                        value={
                          showLocation == true
                            ? `${location.city}`
                            : formdata.location
                        }
                        onChange={onLocationChange}
                        onClick={() => setshowLocation(true)}
                      />
                    </Box>
                    <Button
                      onClick={onSubmit}
                      bg={"#000929"}
                      fontWeight={"600"}
                      color="white"
                      w={"full"}
                      _hover={{
                        color: "#000929",
                        bgColor: "white",
                      }}
                      mt={{
                        base: "2rem",
                        md: "2rem",
                        lg: "2rem",
                        xl: "0rem",
                      }}
                      mb={{
                        base: "1rem",
                        md: "0rem",
                      }}
                      borderRadius={"10px"}
                      h={{ base: "3.2rem", lg: "3.8rem" }}
                    >
                      Find Jobs
                    </Button>
                  </FormControl>
                </Box>
              </Box>
            </Box>{" "}
          </Box>{" "}
          <Image
            display={{ base: "none", lg: "block" }}
            position={"absolute"}
            right={"0rem"}
            top={"30rem"}
            src="/images/hero-ellipse-sm.png"
            w={"26.5em"}
            zIndex={"0"}
          />
        </Box>{" "}
      </HeroGeneral>
      <WhyProficientNow
        title={heroHomeContent[0].whyProfecient.title}
        description={heroHomeContent[0].whyProfecient.description}
        sideDescription={heroHomeContent[0].whyProfecient.sideDescription}
        buttonText={heroHomeContent[0].whyProfecient.buttonText}
        candidatesHired={heroHomeContent[0].whyProfecient.candidatesHired}
        happyEmployers={heroHomeContent[0].whyProfecient.happyEmployers}
      />
      <ExploreRecords />

      {/* two column */}
      <Box
        w={"full"}
        alignItems={"center"}
        display={"flex"}
        justifyContent={"center"}
      >
        <Box w={"1500px"}>
          <Box
            py={{ lg: "6rem", sm: "4rem" }}
            px={{ sm: "3rem" }}
            textAlign={"center"}
            fontFamily={"Gilroy"}
          >
            <Text
              fontSize={{ lg: "28px", sm: "20px" }}
              fontWeight={"semibold"}
              color={"black"}
            >
              {" "}
              {heroHomeContent[0].twoColumn.mainTitle}
            </Text>
            <Text
              py={{ lg: "1rem", sm: "0.5rem" }}
              fontSize={"16px"}
              fontWeight={"medium"}
              letterSpacing={"wide"}
              color={"#828AA0"}
            >
              {heroHomeContent[0].twoColumn.mainDescription}
            </Text>
          </Box>
          <Twocolumns
            textOrder={"row"}
            title={heroHomeContent[0].twoColumn.title1}
            desc={heroHomeContent[0].twoColumn.title1Desc}
            imgSrc={heroHomeContent[0].twoColumn.imgSrc1}
            buttonText={heroHomeContent[0].twoColumn.title1Button}
          />
          <Twocolumns
            textOrder={"row-reverse"}
            title={heroHomeContent[0].twoColumn.title2}
            desc={heroHomeContent[0].twoColumn.title2Desc}
            imgSrc={heroHomeContent[0].twoColumn.imgSrc2}
            buttonText={heroHomeContent[0].twoColumn.title2Button}
          />
          <Twocolumns
            textOrder={"row"}
            title={heroHomeContent[0].twoColumn.title3}
            desc={heroHomeContent[0].twoColumn.title3Desc}
            imgSrc={heroHomeContent[0].twoColumn.imgSrc3}
            buttonText={heroHomeContent[0].twoColumn.title3Button}
          />
        </Box>
      </Box>
      <Jobcategories
        content={[
          {
            title: "Information Technology",
            description:
              "As new, cutting–edge technologies arise, partner with ProficientNow – the technology staffing and solutions experts. We provide strategies, innovation, and insights you need to connect with today’s top talent. We’ll deliver growth and value to your business, and offer a full range of flexible, efficient solutions to help you expand into new products and technologies. We connect the candidate to the desired client focusing on the growth of both the client and the candidate. We aim to move forward with the embraced technology and get you the candidate adapted to modernized technologies.",
          },
          {
            title: "Banking & Finance",
            description:
              "Faster, more talented, and easier finance and banking talent solutions. Whether you need talent through contract-based senior-level professionals for ongoing projects, Finance administrators, or permanent hires, our finance and accounting staffing specialists are ready to help. From talent hunters to talented employees, we have opportunities for everyone.",
          },
          {
            title: "Oil, Gas, Power, and Energy",
            description:
              "One of the leading industries and we keenly look forward to prioritizing the talent-hunting opportunities in the given sectors. We believe in being the road map, to connect talent hunters and opportunity seekers. Our adhered focus is on sourcing and providing the talent and service that deliver efficiency and innovation in a safety-focused environment. We commit to providing a knowledgeable, proactive, and attentive recruitment process. ",
          },
          {
            title: "Biotechnology",
            description:
              "We took the initiative to evolve the energy sector by delivering market-leading recruitment services. Renewable energy sources are predicted to account for more than half of global electricity production by 2035. The industry is changing fast, and ProficientNow understands the importance of providing the appropriate talent. We ensure to place the talent in the appropriate sector which counts on there seamless skills and capabilities",
          },
          {
            title: "Telecom",
            description:
              "The telecom industry is growing by leaps and bounds. Telecom industry also plays a vital role in the country’s economy. We efficiently work on understanding the current status, budget, and requirement of the market. We look forward to help thousands of candidates finding the appropriate company, hundreds of clients for the right recruitment. ",
          },
        ]}
        mainTitle={heroHomeContent[0].jobCategories[0].mainTitle}
        mainDescription={heroHomeContent[0].jobCategories[0].mainDescription}
        buttonText={heroHomeContent[0].jobCategories[0].buttonText}
      />
      {/* <Text textAlign={"center"}>Testimonials</Text> */}
      <TestimonialSection />
      <Recuriter
        title={heroHomeContent[0].recruiter.title}
        description={heroHomeContent[0].recruiter.description}
        boxDescription={heroHomeContent[0].recruiter.boxDescription}
      ></Recuriter>
      <ChatUs
        title={heroHomeContent[0].chatUs.title}
        description={heroHomeContent[0].chatUs.description}
        buttonText={heroHomeContent[0].chatUs.buttonText}
      />
    </MainLayout>
  );
}

//
// export async function getServerSideProps() {
//   // Fetch data from external API
//   let token = process.env.ipToken;
//   let url = `https://ipinfo.io/json?token=${token}`;
//   const res = await fetch(url);
//   const data = await res.json();
//   // const data = "hello"
//   // Pass data to the page via props
//   return { props: { data } };
// }
