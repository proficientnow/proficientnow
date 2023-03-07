/** @format */

// /** @format */
// import React, { useEffect, useState } from "react"
// import Link from "next/link"
// import {
// 	Box,
// 	Center,
// 	Grid,
// 	Text,
// 	Button,
// } from "@chakra-ui/react"
// import MainLayout from "../components/layout/mainLayout"
// import ProfileApplied from "../components/profileApplied"
// import ProfileHero from "../components/profileHero"
// import Navbar from "../components/sections/navbar"

// import { getSession } from "next-auth/react"

// import {
// 	appliedJobs,
// 	getJobDetailsById,
// } from "../lib/backendCalls"

// export default function Profile({ session }) {
// 	const [jobsUserApplied, setJobsUserApplied] = useState([])
// 	const [jobs, setJobs] = useState({
// 		loading: true,
// 		data: [],
// 	})
// 	const [jobError, setJobError] = useState("")

// 	const profileData = [
// 		{
// 			designation: "Senior UX Designer",
// 			company: "CA Technologies",
// 			location: "Hyderabad, IN",
// 			salary: "8.5-10.5 LPA",
// 			shift: "Morning Shift (9AM - 5PM)",
// 			date: "23 June 2022",
// 		},
// 		{
// 			designation: "Senior UX Designer",
// 			company: "CA Technologies",
// 			location: "Hyderabad, IN",
// 			salary: "8.5-10.5 LPA",
// 			shift: "Morning Shift (9AM - 5PM)",
// 			date: "23 June 2022",
// 		},
// 		{
// 			designation: "Senior UX Designer",
// 			company: "CA Technologies",
// 			location: "Hyderabad, IN",
// 			salary: "8.5-10.5 LPA",
// 			shift: "Morning Shift (9AM - 5PM)",
// 			date: "23 June 2022",
// 		},
// 		{
// 			designation: "Senior UX Designer",
// 			company: "CA Technologies",
// 			location: "Hyderabad, IN",
// 			salary: "8.5-10.5 LPA",
// 			shift: "Morning Shift (9AM - 5PM)",
// 			date: "23 June 2022",
// 		},
// 		{
// 			designation: "Senior UX Designer",
// 			company: "CA Technologies",
// 			location: "Hyderabad, IN",
// 			salary: "8.5-10.5 LPA",
// 			shift: "Morning Shift (9AM - 5PM)",
// 			date: "23 June 2022",
// 		},
// 	]

// 	console.log(jobsUserApplied)

// 	useEffect(() => {
// 		appliedJobs(session?.user?._id).then(jobs => {
// 			if (jobs.length == 0 || jobs == undefined) {
// 				return
// 			}
// 			const [userData] = [jobs.data.data[0]]
// 			setJobsUserApplied(userData.jobsApplied)
// 			jobsUserApplied.map(id => {
// 				getJobDetailsById(id).then(data => {
// 					setJobs({
// 						...jobs,
// 						loading: false,
// 						data: data.data.data,
// 					})
// 				})
// 			})
// 		})
// 	}, [jobs.data, session, jobsUserApplied])

// 	return (
// 		<MainLayout session={session}>
// 			<Box
// 				display={"flex"}
// 				flexDir={"column"}
// 				backgroundColor={"#FBFBFB"}
// 				w={"full"}
// 				alignItems={"center"}
// 			>
// 				<ProfileHero />
// 				<Box
// 					minH={"80vh"}
// 					w={{ base: "90vw", md: "80vw", xl: "70vw" }}
// 					maxW={"1500px"}
// 					display={"flex"}
// 					alignItems={{ base: "center", sm: "start" }}
// 					justifyContent={"start"}
// 					flexDir={"column"}
// 					// px={{ base: "1rem", md: "4rem" }}
// 					px={"2.5vw"}
// 				>
// 					<Text
// 						py={"3rem"}
// 						fontSize={{
// 							base: "1.6rem",
// 							lg: "1.8rem",
// 							xl: "2rem",
// 						}}
// 						color="#000000"
// 						lineHeight={"3rem"}
// 						fontWeight="600"
// 						display={"flex"}
// 						justifyContent={{ base: "center", md: "start" }}
// 						alignItems={"center"}
// 					>
// 						Jobs you&apos;ve applied to:
// 					</Text>
// 					<Box w={"full"}>
// 						<Grid
// 							backgroundColor={"#FBFBFB"}
// 							alignItems={"center"}
// 							flexDir={"column"}
// 							gap={{ base: "1.5rem", md: "1.375rem" }}
// 							gridTemplateColumns={{
// 								lg: "repeat(2, 1fr)",
// 								xl: "repeat(1, 1fr)",
// 							}}
// 						>
// 							{jobs.loading == true ? (
// 								<Box>Fetching Data</Box>
// 							) : jobsUserApplied != undefined ? (
// 								profileData.map((profile, index) => {
// 									return (
// 										<ProfileApplied
// 											key={index}
// 											designation={profile.designation}
// 											company={profile.company}
// 											location={profile.location}
// 											salary={profile.salary}
// 											shift={profile.shift}
// 											date={profile.date}
// 										/>
// 									)
// 								})
// 							) : (
// 								<Box
// 									h={"50%"}
// 									display={"flex"}
// 									gap={"2rem"}
// 									flexDir={"column"}
// 								>
// 									You have not applied to jobs yet
// 									<Link
// 										href={"/jobs"}
// 										passHref
// 									>
// 										<Button
// 											variant={"filled"}
// 											borderRadius={"full"}
// 											bgColor={"#003A88"}
// 											color={"white"}
// 										>
// 											Browse Jobs
// 										</Button>
// 									</Link>
// 								</Box>
// 							)}
// 						</Grid>
// 					</Box>
// 				</Box>
// 			</Box>
// 		</MainLayout>
// 	)
// }

// export async function getServerSideProps(context) {
// 	const userSesh = await getSession(context)

// 	return {
// 		props: {
// 			session: userSesh,
// 		},
// 	}
// }
