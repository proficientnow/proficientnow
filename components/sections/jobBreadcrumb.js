/** @format */

import React from "react";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@chakra-ui/react";

const CustomBreadLink = ({ href, children }) => {
  return (
    <BreadcrumbLink href={href} _hover={{ textDecoration: "none" }}>
      {children}
    </BreadcrumbLink>
  );
};

const jobBreadcrumb = ({ designation, industry }) => {
  return (
    <div>
      <Box
        w={"full"}
        h={"100%"}
        px={{ xl: "6.5rem", lg: "4rem", sm: "3.5rem" }}
        pt={{ md: "1.5rem", base: "3rem" }}
        border={"0px"}
        borderColor={"black"}
        bgColor={"#E0E8F3"}
        pb={{ md: "5rem", base: "4rem" }}
      >
        <Box
          // maxW={"1500px"}
          display={"flex"}
          flexDir={"column"}
          alignItems={"space-between"}
        >
          <Breadcrumb
            maxWidth={"1500px"}
            separator="/"
            color={"#3E4969"}
            fontSize={"11px"}
          >
            <BreadcrumbItem>
              <CustomBreadLink href="#">Home</CustomBreadLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
              <CustomBreadLink href="#">Find a job</CustomBreadLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
              <CustomBreadLink href="#">{industry}</CustomBreadLink>
            </BreadcrumbItem>

            <BreadcrumbItem isCurrentPage color={"#090D18"}>
              <CustomBreadLink href="#">{designation}</CustomBreadLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </Box>
      </Box>
    </div>
  );
};

export default jobBreadcrumb;
