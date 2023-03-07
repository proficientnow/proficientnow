/** @format */

import {
	Box,
	Text,
	Image,
	Center,
	Flex,
} from "@chakra-ui/react"
import React, { useEffect } from "react"
import { useAnimation, motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

const visibleVariants = {
	visible: {
		opacity: 1,
		scale: 1,
		transition: { duration: 0.75 },
	},
	hidden: { opacity: 0, scale: 1 },
}

const AboutUsComponent = () => {
	const controls = useAnimation()
	const [ref, inView] = useInView()
	useEffect(() => {
		if (inView) {
			controls.start("visible")
		}
	}, [controls, inView])
	return (
		<Center
			as={motion.div}
			ref={ref}
			animate={controls}
			initial="hidden"
			variants={visibleVariants}
			bg={"#E0E8F3"}
		>
			<Box
				w={"full"}
				pt={{ lg: "6rem", md: "4rem", base: "4rem" }}
				pb={{ lg: "4rem", md: "3rem", base: "3rem" }}
				px={{ lg: "6.5rem", md: "2.5rem", base: "2rem" }}
				display={"flex"}
				maxW={"1500px"}
				flexDir={{ md: "row", base: "column-reverse" }}
				justifyContent={{
					md: "space-between",
					base: "center",
				}}
				fontFamily={"Gilroy"}
			>
				<Flex
					alignItems={"center"}
					justifyContent={"center"}
				>
					<Box
						pt={"4.5rem"}
						w={{ lg: "35vw", md: "55vw", base: "80vw" }}
						textAlign={{ base: "center", lg: "left" }}
					>
						<Text
							fontSize={{ md: "34px", sm: "22px" }}
							fontWeight={"medium"}
							color={"#020D45"}
							lineHeight={{ md: "3.5rem", base: "2.5rem" }}
							pr={{ md: "2rem", base: "0rem" }}
						>
							Here to help great businesses find great
							people
						</Text>
						<Text
							py={{ md: "0.8rem", base: "1.2rem" }}
							pr={{ md: "3.5rem", base: "0rem" }}
							fontSize={{ md: "13px", sm: "20px" }}
							lineHeight={{ md: "8", base: "9" }}
							fontWeight={"normal"}
							letterSpacing={"wide"}
							color={"#42485A"}
						>
							Learn more about ProficientNow, how we got
							here and where we&apos;re going. We&apos;re a
							creative bunch with plenty of ambition to
							completely revolutionise the way hiring is
							done.
						</Text>
					</Box>
				</Flex>
				<Flex
					alignItems={"center"}
					justifyContent={"center"}
					pl={{ md: "0rem", base: "3rem" }}
				>
					<Image
						width={{
							lg: "24rem",
							md: "24rem",
							base: "18rem",
						}}
						height={{
							lg: "29rem",
							md: "26rem",
							base: "20rem",
						}}
						src={"/images/abouttus.png"}
						alt="aboutus"
					/>
				</Flex>
			</Box>
		</Center>
	)
}

export default AboutUsComponent
