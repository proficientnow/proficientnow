import React, { useEffect, useRef, useState } from "react";
import { css } from "@emotion/css";

import { Box, Center, Stack, Text } from "@chakra-ui/react";

// import Testimonial from '../cards/testimonial'
import dynamic, { noSSR } from "next/dynamic";

import cardData from "../../data/static/testimonialsData.json";
import cardData2 from "../../data/static/testimonialData2.json";
import Marquee from "react-fast-marquee";

const Testimonial = dynamic(() => import("../cards/testimonials"), {
  loading: () => <p>...</p>,
  ssr: false,
});

export const TestimonialSection = () => {
  const [testimonialsList, setTestimonialsList] = useState([...cardData]);
  const [testimonialsList2, setTestimonialsList2] = useState([...cardData2]);
  return (
    <Center py={"5rem"} w={"full"} display={"flex"}>
      <Box
        w={"90vw"}
        display={"flex"}
        overflow={"hidden"}
        maxH={{ "2xl": "900px" }}
        pb={{ base: "1.8rem", lg: "1rem", xl: "2.5rem" }}
        bgColor={"#f5f5f5"}
        borderRadius={{ base: "29px", md: "50px" }}
      >
        <Box
          position={"relative"}
          display={"flex"}
          flexDir={"column"}
          gap={{ base: "1.8rem", lg: "1rem", xl: "2.5rem" }}
        >
          <Box pl={{ base: "26px", md: "50px" }} pt={"10"}>
            <Text
              fontWeight={"semibold"}
              fontSize={{
                base: "14px",
                md: "18px",
                xl: "30px",
              }}
              color={"black"}
              pb={{ base: "18px", md: "2", xl: "5" }}
            >
              Professionals Trust Us
            </Text>
          </Box>
          <Marquee loop={0} gradient={false} speed={4.25} pauseOnHover={true}>
            {testimonialsList.map((elem, idx) => (
              <Box key={idx} mx="1rem">
                <Testimonial
                  name={elem.name}
                  stars={elem.stars}
                  idx={idx}
                  listLength={testimonialsList.length}
                  category={elem.variant}
                  description={elem.description}
                />
              </Box>
            ))}
          </Marquee>
          <Marquee
            loop={0}
            delay={5}
            gradient={false}
            speed={4}
            pauseOnHover={true}
          >
            {testimonialsList2.map((elem, idx) => (
              <Box key={idx} mx="1rem">
                <Testimonial
                  name={elem.name}
                  stars={elem.stars}
                  idx={idx}
                  listLength={testimonialsList2.length}
                  category={elem.variant}
                  description={elem.description}
                />
              </Box>
            ))}
          </Marquee>
        </Box>
      </Box>
    </Center>
  );
};
