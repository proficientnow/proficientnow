/** @format */

import { Box, Container } from "@chakra-ui/react"
import React from "react"
import Footer from "../sections/footer"

const PageLayout = ({ bColor, children, sectionGap }) => {
	const bgColor = bColor ? bColor : "white"

	return (
		<Box
			as="main"
			bgColor={bgColor}
			display={"flex"}
			gap={sectionGap}
			flexDir={"column"}
			justifyContent={"center"}
			alignItems={"center"}
		>
			{children}
		</Box>
	)
}

export default PageLayout
