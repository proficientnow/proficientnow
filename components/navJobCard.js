import React, { useState } from "react";
import {
  Box,
  Flex,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Button,
  useDisclosure,
  MenuOptionGroup,
  MenuItemOption,
} from "@chakra-ui/react";
import ChevronDownIcon from "./icons/arrow-down.svg";
import JobCard from "./jobCard";

function NavJobCard({ title, category1, category2, category3 }) {
  const [categoryData, setcategoryData] = useState({
    category: "",
    location: "",
    salaryRange: "",
  });
  console.log(categoryData);
  return (
    <Menu>
      <MenuButton
        minW={{ base: "8.25rem", md: "7rem", lg: "8.3rem" }}
        as={Button}
        px={{ base: "13px", md: "13px", lg: "21px" }}
        py={{ base: "5px", md: "7px", lg: "10px" }}
        transition="all 0.2s"
        borderRadius="80px"
        borderWidth="1px"
        borderColor={"#ECEBF3"}
        fontSize={{ base: "13px", md: "12px", lg: "16px" }}
        fontWeight={"normal"}
        color="#606060"
        bgColor={"#FFFFFF"}
        // isActive={isOpen}
        _hover={{ bg: "gray.200" }}
        _expanded={{ bg: "gray.200" }}
        rightIcon={<ChevronDownIcon color={"#808080"} />}
        // _rightIcon={{
        //   paddingX: { base: "2px", md: "5px", lg: "11px" },
        //   // paddingLeft:{"5px"},
        // }}
      >
        {/* {console.log(categoryData.category)} */}
        {title}
        {/* {categoryData.category === "" ? title : `${categoryData.category}`}{" "} */}
        {/* {categoryData.category.length !== 0 ? categoryData.category : title} */}
      </MenuButton>{" "}
      <MenuList>
        <MenuOptionGroup>
          <MenuItemOption
            value={category1}
            onClick={() => setcategoryData((categoryData.category = category1))}
          >
            {category1}
          </MenuItemOption>
          <MenuItemOption
            value={category2}
            onClick={() => setcategoryData((categoryData.category = category2))}
          >
            {category2}
          </MenuItemOption>
          <MenuItemOption
            value={category3}
            onClick={() => setcategoryData((categoryData.category = category3))}
          >
            {category3}
          </MenuItemOption>
          <MenuItemOption
            value={category1}
            onClick={() => setcategoryData((categoryData.category = category1))}
          >
            {category1}
          </MenuItemOption>
        </MenuOptionGroup>
      </MenuList>
    </Menu>
  );
}

export default NavJobCard;
