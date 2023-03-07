/** @format */

import { NotAllowedIcon } from "@chakra-ui/icons"
import NextLink from "next/link"
import {
	Box,
	Center,
	Heading,
	Link,
	Text,
} from "@chakra-ui/react"
import React from "react"

function Unauthorized() {
	return (
		<Center
			w={"full"}
			minHeight="100vh"
			// bgColor={"primary"}
		>
			<Box
				textAlign="center"
				// w={"100%"}
				backdropBlur={"3xl"}
				borderRadius={"lg"}
				bgColor="gray.500"
				py={"5rem"}
				px="3rem"
				display={"flex"}
				flexDir={"column"}
				justifyContent="center"
				alignItems="center"
				rowGap="2rem"
				flexWrap={"wrap"}
				overflowWrap={"break-word"}
				whiteSpace={"nowrap"}
			>
				<NotAllowedIcon
					boxSize={10}
					color="red"
				/>
				<Heading>
					This Route is prohibited for users
				</Heading>

				<Box>
					<Text>Head back</Text>
					<NextLink
						href="/"
						passHref
					>
						<Link>Home ?</Link>
					</NextLink>
				</Box>
			</Box>
		</Center>
	)
}

export default Unauthorized
