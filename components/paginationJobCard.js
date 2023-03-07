/** @format */
import React from "react";

import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";
import {
  Box,
  Button,
  chakra,
  Flex,
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";
import { useEffect } from "react";

import { getDocumentsCount } from "../lib/backendCalls";
import { useState } from "react";

const PaginationJobCard = ({ jobData, setJobData }) => {
  const handlePagination = (str) => {
    switch (str) {
      case "prev":
        if (jobData.page !== 0) {
          setJobData({
            ...jobData,
            page: jobData.page - 1,
          });
        }
        break;
      case "next":
        if (jobData.page < pageCount - 1) {
          setJobData({
            ...jobData,
            page: jobData.page + 1,
          });
        }
      default:
        break;
    }
  };

  const handlePaginationButtons = (num) => {
    if (num !== jobData.page) {
      setJobData({
        ...jobData,
        page: num,
      });
    }
  };

  const [pageCount, setPageCount] = useState(null);

  const maxPageButtons = 5;

  let pageNumButtons = [];

  useEffect(() => {
    getDocumentsCount()
      .then((result) => {
        setPageCount(Math.ceil(result.data.data.jobsCount / jobData.pageLimit));
      })
      .catch((err) => {
        console.log("there has been an error", err);
      });
  }, []);

  useEffect(() => {
    console.log(pageNumButtons[0]);
  }, [pageNumButtons]);

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "end",
        padding: "3rem 3rem",
      }}
    >
      <Box
        sx={{
          display: "grid",
          gridAutoFlow: "column",
          columnGap: "10px",
        }}
      >
        <Button
          isDisabled={jobData.page === 0}
          bgColor={"transparent"}
          border={"1px solid #ECEBF3"}
          height="40px"
          width="40px"
          onClick={() => handlePagination("prev")}
        >
          <ChevronLeftIcon />
        </Button>
        {pageCount < maxPageButtons
          ? Array.from(Array(pageCount)).map((a, i) => {
              return (
                <Button
                  key={i}
                  fontWeight={"500"}
                  color={"#000929"}
                  bg={jobData.page === i ? "#FFF" : "transparent"}
                  border={
                    jobData.page === i
                      ? "1px solid #000929"
                      : "1px solid #ECEBF3"
                  }
                  onClick={() => handlePaginationButtons(i)}
                >
                  {i + 1}
                </Button>
              );
            })
          : Array.from(Array(3)).map((a, i) => {
              return (
                <Button
                  key={i}
                  fontWeight={"500"}
                  color={"#000929"}
                  bg={jobData.page === i ? "#FFF" : "transparent"}
                  border={
                    jobData.page === i
                      ? "1px solid #000929"
                      : "1px solid #ECEBF3"
                  }
                  onClick={() => handlePaginationButtons(i)}
                >
                  {jobData.pageLimit + i + 1}
                </Button>
              );
            })}

        <Button
          isDisabled={pageCount === jobData.page + 1}
          bgColor={"transparent"}
          border={"1px solid #ECEBF3"}
          height="40px"
          width="40px"
          onClick={() => handlePagination("next")}
        >
          <ChevronRightIcon />
        </Button>
      </Box>
    </Box>
  );
};

export default PaginationJobCard;
