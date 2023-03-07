/** @format */

import NextLink from "next/link"
import {
	Box,
	Flex,
	chakra,
	Link,
	Text,
	Grid,
	Button,
	LinkBox,
	LinkOverlay,
	Skeleton,
} from "@chakra-ui/react"
import Building from "./icons/building.svg"
import Location from "./icons/locations.svg"
import Clock from "./icons/clock.svg"
import Money from "./icons/money.svg"

function JobCard({
	industry,
	designation,
	company,
	location,
	salary,
	shift,
	content,
	doc,
	variant,
	id,
	loading,
}) {
	return (
		<LinkBox>
			<Flex
				bg="#FBFBFB"
				alignItems="center"
				justifyContent="center"
				cursor={"pointer"}
			>
				<Box
					mx="auto"
					w={variant == "grid" ? "full" : "90vw"}
					maxW={variant == "grid" ? "600px" : "1500px"}
					px={8}
					py={4}
					rounded={"30px"}
					shadow={"sm"}
					bg={"white"}
					borderColor={"#ECEBF3"}
					// display={'flex'}
					// flexDir={''}
					borderWidth={"1px"}
				>
					<Flex
						justifyContent="space-between"
						alignItems="center"
					>
						<Text
							px={3}
							py={1}
							bg="#F5F6FF"
							color="#2D3BBC"
							fontSize="12px"
							fontWeight="500"
							rounded="2xl"
						>
							{industry}
						</Text>
						<chakra.span
							fontSize="12px"
							color="#646464"
						>
							{doc}
						</chakra.span>
					</Flex>

					<Flex
						flexDir={"column"}
						mt={2}
					>
						<NextLink
							href={`/jobs/${id}`}
							passHref
						>
							<LinkOverlay>
								<Flex
									fontSize={{
										base: "1rem",
										md: "1.1rem",
										xl: "1.2rem",
									}}
									color="#000000"
									lineHeight={{ base: "2rem", lg: "3rem" }}
									_dark={{
										color: "white",
									}}
									fontWeight="600"
								>
									{designation}
								</Flex>
							</LinkOverlay>
						</NextLink>
						{/* change direction here when the variant changes */}
						<Flex
							flexDir={variant == "grid" ? "column" : "row"}
						>
							<Flex alignItems={"center"}>
								<Building />
								<Text
									color="#646464"
									px={19}
									fontSize="0.9rem"
									fontWeight="400"
									lineHeight={"3rem"}
								>
									{company}
								</Text>
							</Flex>
							<Flex alignItems={"center"}>
								<Location />
								<Text
									color="#646464"
									px={19}
									fontSize="0.9rem"
									fontWeight="400"
									lineHeight={"3rem"}
								>
									{location}
								</Text>
							</Flex>
							<Flex alignItems={"center"}>
								<Money />
								<Text
									color="#646464"
									px={19}
									fontSize="0.9rem"
									fontWeight="400"
									lineHeight={"3rem"}
								>
									{salary}
								</Text>
							</Flex>
							<Flex alignItems={"center"}>
								<Clock />
								<Text
									color="#646464"
									px={19}
									fontSize="0.9rem"
									fontWeight="400"
									lineHeight={"3rem"}
								>
									{shift}
								</Text>
							</Flex>
						</Flex>
						<Text
							color="#646464"
							py={"10px"}
							fontSize="16px"
							fontWeight="400"
							lineHeight={"1.5rem"}
							display={variant == "grid" ? "none" : "block"}
							maxW={"80%"}
						>
							{content}
						</Text>
					</Flex>
				</Box>
			</Flex>
		</LinkBox>
	)
}

export default JobCard
