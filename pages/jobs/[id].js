/** @format */

import React, {
	useEffect,
	createContext,
	useContext,
} from "react"
import {
	Box,
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
} from "@chakra-ui/react"
import NavbarMob from "../../components/sections/navbar"
import JobSections from "../../components/sections/jobSections"
import JobBreadcrumb from "../../components/sections/jobBreadcrumb"

import { getJobDetailsById } from "../../lib/backendCalls"
import { getAllJobs } from "../../lib/backendCalls"
import MainLayout from "../../components/layout/mainLayout"

export default function Jobinfo({ jobDetails }) {
	return (
		<MainLayout>
			<JobBreadcrumb
				industry={jobDetails.industry}
				designation={jobDetails.designation}
			/>
			<JobSections Jobdetails={jobDetails} />
		</MainLayout>
	)
}

// export async function getStaticPaths() {
// 	const jobs = await getAllJobs()
// 	const path = jobs.data?.data?.map(job => ({
// 		return {
// 			params: { id: job._id.toString() },
// 		}
// 	}))

// 	return {
// 		paths: [path],
// 		fallback: false,
// 	}
// }

export async function getServerSideProps({ params }) {
	const job = await getJobDetailsById(`${params.id}`)
	const jobDetails = job.data.data
	return {
		props: {
			jobDetails,
		},
	}
}
