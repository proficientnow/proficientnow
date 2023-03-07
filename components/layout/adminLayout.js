/** @format */

import React, {
	createContext,
	useEffect,
	useLayoutEffect,
	useState,
} from "react"

import { getSession, useSession } from "next-auth/react"

import { useRouter } from "next/router"
import AdminNavbar from "../sections/adminNavbar"
import axios from "axios"
import { baseRef } from "../../lib/constants"
import Admin from "../admin"
import AdminJobs from "../adminJobs"
import Applications from "../applications"
import ContactAdmin from "../contactAdmin"
import { NotAllowedIcon } from "@chakra-ui/icons"
import {
	Box,
	Center,
	Heading,
	Spinner,
} from "@chakra-ui/react"
export const PostJobContext = createContext()

export default function AdminLayout({ children }) {
	const { data: session, status } = useSession()
	const router = useRouter()

	const [title, setTitle] = useState("")
	const [authLoading, setAuthLoading] = useState(true)

	useEffect(() => {
		if (status === "unauthenticated") {
			router.push("/")
		}
	}, [status])

	useLayoutEffect(() => {
		axios
			.get(`${baseRef}/auth/session`)
			.then(session => {
				console.log(session?.data?.user?.role)
				// checking if the user is an admin or is there even a session available
				if (
					Object.keys(session).length !== 0 &&
					session?.data?.user?.role !== "admin"
				) {
					router.push("/unauthorized")
				}
				if (Object.keys(session).length === 0) {
					router.push("/auth/sigin")
				}
				setAuthLoading(false)
				return
			})
			.catch(err => {
				router.push("/unauthorized")
			})
	}, [])

	console.log(authLoading)

	useEffect(() => {
		switch (router.asPath) {
			case "/admin":
				setTitle("Dashboard")
				break
			case "/admin/jobs":
				setTitle("Jobs")
				break
			case "/admin/applications":
				setTitle("Applications")
				break
			case "/admin/contacts":
				setTitle("Contacts")
				break
			case "/admin/oorwin":
				setTitle("Oorwin Portal")
			default:
				break
		}
	}, [router.asPath])

	return (
		<>
			<AdminNavbar
				image={session?.user.image}
				email={session?.user.email}
				title={title}
			/>
			{authLoading && (
				<Center
					w="100vw"
					h="100vh"

					// overflow='hidden'
				>
					<Spinner />
				</Center>
			)}
			{!authLoading && children}
			{/* <PostJobContext.Provider value={postJobState}> */}
			{/* {currentComponent} */}

			{/* </PostJobContext.Provider> */}
		</>
	)
}
