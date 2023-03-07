/** @format */

import { Box, Button, FormLabel } from "@chakra-ui/react"
import React, { useContext } from "react"
import HeroGeneral from "../components/heroGeneral"
import Field from "../components/sections/formControl"

import { useState, useEffect } from "react"
import { useRouter } from "next/router"

import heroContactContent from "../data/static/heroContactContent.json"

import { createContact } from "../lib/backendCalls"
import { useToast } from "@chakra-ui/react"
import MainLayout from "../components/layout/mainLayout"
import { UserContext } from "./_app"
import {
	RouteContext,
	useRouteContext,
} from "../contexts/routeContext"

// const ContactUs = ({ title, description }) => {
//   return (
//     <Box>
//       <HeroGeneral title={title} description={description} />
//     </Box>
//   );
// };

// export default ContactUs;

export default function ContactUs() {
	const { routeState, setRouteState, user, setUser } =
		useRouteContext()

	const router = useRouter()
	const toast = useToast()
	const [contactForm, setContactForm] = useState({
		name: "",
		email: "",
		companyName: "",
		mobile: "",
		attendedTo: false,
	})

	const [submit, setSubmit] = useState(false)

	const onNameChange = e => {
		setContactForm({
			...contactForm,
			name: e.target.value,
		})
	}
	// console.log(contactForm);

	const onMailChange = e => {
		setContactForm({
			...contactForm,
			email: e.target.value,
		})
	}
	const onCompanyChange = e => {
		setContactForm({
			...contactForm,
			companyName: e.target.value,
		})
	}
	const onNumberChange = e => {
		setContactForm({
			...contactForm,
			mobile: e.target.value,
		})
	}
	const errorMsg = () => {
		alert("Enter all fields")
	}
	const onSubmit = async () => {
		{
			contactForm.name === "" ||
			contactForm.email === "" ||
			contactForm.companyName === "" ||
			contactForm.mobile === ""
				? toast({
						title: "Error!",
						description: "Enter all fields",
						status: "error",
						position: "top",
						duration: 9000,
						isClosable: true,
				  })
				: createContact(contactForm).then(res => {
						toast({
							title: "Submitted Successfully",
							description: "We will contact you soon",
							status: "success",
							position: "top",

							duration: 9000,
							isClosable: true,
						})
						setContactForm({
							name: "",
							email: "",
							companyName: "",
							mobile: "",
						})
				  })
		}
	}

	return (
		<MainLayout>
			<HeroGeneral
				title={heroContactContent[0].hero.title}
				description={heroContactContent[0].hero.description}
			>
				<Box
					w={"full"}
					display={"flex"}
					// alignItems={"center"}
					justifyContent={{
						base: "center",
						lg: "flex-end",
					}}
				>
					{/* FORM OF CONTACT US */}
					<Box
						w={{
							base: "100%",
							sm: "800%",
							md: "85%",
							lg: "85%",
							"2xl": "75%",
						}}
						// ml={{ base: "rem", md: "1.5rem" }}
						display={"flex"}
						alignItems={"center"}
						justifyContent={"center"}
						mb={{ base: "2rem", lg: "0" }}
					>
						<Box
							bg={"#C5CEE6"}
							w={"100%"}
							mr={{ lg: "3rem" }}
							borderRadius="20px"
							maxWidth={"35rem"}
						>
							<Box px={"1.5rem"}>
								<Box my={"2rem"}>
									<FormLabel
										color={"#020719"}
										fontSize={"0.9rem"}
										letterSpacing={"2%"}
										fontWeight={"500"}
										lineHeight={"35px"}
									>
										Full Name
									</FormLabel>
									<Field
										placeHolder={"Enter your full name"}
										// selectOptions={selectOptions}
										type={"textField"}
										onChange={onNameChange}
										value={contactForm.name}

										// onClick={onClick}
									/>
									<FormLabel
										color={"#020719"}
										fontSize={"0.9rem"}
										letterSpacing={"2%"}
										fontWeight={"500"}
										lineHeight={"35px"}
									>
										Email Address
									</FormLabel>
									<Field
										placeHolder={"Enter your Email Address"}
										// selectOptions={selectOptions}
										type={"textField"}
										onChange={onMailChange}
										value={contactForm.email}
										// onClick={onClick}
									/>
									<FormLabel
										color={"#020719"}
										fontSize={"0.9rem"}
										letterSpacing={"2%"}
										fontWeight={"500"}
										lineHeight={"35px"}
									>
										Company Name
									</FormLabel>
									<Field
										placeHolder={"Enter your company name"}
										// selectOptions={selectOptions}
										type={"textField"}
										onChange={onCompanyChange}
										value={contactForm.companyName}
										// onClick={onClick}
									/>
									<FormLabel
										color={"#020719"}
										fontSize={"0.9rem"}
										letterSpacing={"2%"}
										fontWeight={"500"}
										lineHeight={"35px"}
									>
										Phone Number
									</FormLabel>
									<Field
										placeHolder={"Enter your phone number"}
										// selectOptions={selectOptions}

										type={"textField"}
										onChange={onNumberChange}
										value={contactForm.mobile}
										imputType={"tel"}
										// onClick={onClick}
									/>
								</Box>
								<Button
									onClick={onSubmit}
									_hover={{
										color: "#000929",
										backgroundColor: "white",
									}}
									bg={"#000929"}
									fontSize={"0.9rem"}
									fontWeight={"500"}
									color="white"
									w={"full"}
									//   mt={"4rem"}
									mb={{
										base: "1rem",
										md: "1rem",
										lg: "1.5rem",
										xl: "1rem",
									}}
									borderRadius={"10px"}
									h={{ base: "3rem", lg: "3.3rem" }}
								>
									Submit
								</Button>
							</Box>
							{/* {children}{" "} */}
						</Box>{" "}
					</Box>{" "}
				</Box>{" "}
			</HeroGeneral>
		</MainLayout>
	)
}
