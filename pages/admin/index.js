/** @format */

import {
	Box,
	Container,
	Heading,
	Center,
} from "@chakra-ui/react"
import { useRouter } from "next/router"
import React, {
	useEffect,
	useLayoutEffect,
	useState,
} from "react"
import Admin from "../../components/admin"
import AdminLayout from "../../components/layout/adminLayout"

import {
	getDocumentsCount,
	getAllCandidates,
} from "../../lib/backendCalls"

import { NotAllowedIcon } from "@chakra-ui/icons"
import { baseRef } from "../../lib/constants"
import axios from "axios"

export default function AdminIndex({ props }) {
	const router = useRouter()

	const [loadingCandidates, setLoadingCandidates] =
		useState(true)

	const [countLoading, setCountLoading] = useState(true)
	const [docCount, setDocCount] = useState({})

	const pageParams = {
		pageLimit: 3,
	}

	const [data, setData] = useState({
		page: 0,
		allCandidates: [],
		isNextPageAvl: true,
		allCandidatesNext: [],
	})

	const handlePagination = () => {
		setData({
			...data,
			page: data.page + 1,
		})
	}

	useEffect(() => {
		if (data.allCandidates.length == 0) {
			getDocumentsCount()
				.then(result => {
					setDocCount(result.data.data)
					setCountLoading(false)
				})
				.catch(err => {})
			setLoadingCandidates(true)
			getAllCandidates(data.page, pageParams.pageLimit * 2)
				.then(result => {
					if (
						result.data.data.length <
						pageParams.pageLimit * 2
					) {
						setData({
							...data,
							allCandidates: [...result?.data?.data],
							isNextPageAvl: false,
						})
						setLoadingCandidates(false)
					} else {
						setData({
							...data,
							allCandidates: [
								...result?.data?.data.slice(
									0,
									result.data.data.length / 2
								),
							],
							isNextPageAvl: !result.data.data.length < 3,
							allCandidatesNext: [
								...result?.data?.data.slice(
									result.data.data.length / 2
								),
							],
						})

						setLoadingCandidates(false)
					}
				})
				.catch(err => {
					alert(`ther has been an error ${err}`)
				})
		}

		if (data.isNextPageAvl === true && data.page !== 0) {
			setLoadingCandidates(true)
			setData({
				...data,
				allCandidates: [
					...data.allCandidates,
					...data.allCandidatesNext,
				],
			})

			setLoadingCandidates(false)
			getAllCandidates(data.page, pageParams.pageLimit)
				.then(result => {
					setLoadingCandidates(false)
					setData({
						...data,
						allCandidatesNext: [...result.data.data],
					})
				})
				.catch(err => {
					alert(`ther has been an error ${err}`)
				})
		}
	}, [data.page])

	return (
		<AdminLayout>
			<Admin
				isButtonDisabled={data.isNextPageAvl}
				handlePagination={handlePagination}
				countLoading={countLoading}
				loadingCandidates={loadingCandidates}
				documentCounts={docCount}
				candidateData={data.allCandidates}
			/>
		</AdminLayout>
	)
}

// export async function getServerSideProps() {
// 	// get user's session using a REST API from NextAuth
// 	axios
// 		.get(`${baseRef}/api/auth/session`)
// 		.then(session => {
// 			// checking if the user is an admin or is there even a session available
// 			if (
// 				Object.keys(session).length !== 0 &&
// 				session?.user?.role !== "admin"
// 			) {
// 				return {
// 					redirect: {
// 						destination: "/unauthorized",
// 						permanent: false,
// 					},
// 				}
// 			}
// 			if (Object.keys(session).length === 0) {
// 				return {
// 					redirect: {
// 						destination: "/auth/signin",
// 						permanent: false,
// 					},
// 				}
// 			}
// 		})
// 		.catch(err => {})

// 	return {
// 		props: {},
// 	}
// }
