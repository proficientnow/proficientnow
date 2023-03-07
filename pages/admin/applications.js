/** @format */

import { Box, Container, Heading } from "@chakra-ui/react"
import axios from "axios"
import { getSession, useSession } from "next-auth/react"
import { useRouter } from "next/router"
import React, { useEffect, useState } from "react"
import Applications from "../../components/applications"
import AdminLayout from "../../components/layout/adminLayout"

import {
	getAllJobs,
	getAllCandidates,
} from "../../lib/backendCalls"
import { baseRef } from "../../lib/constants"

export default function AdminApplications() {
	const [loadingCandidates, setLoadingCandidates] =
		useState(true)

	const pageParams = {
		pageLimit: 3,
	}

	const [candidateData, setCandidateData] = useState({
		page: 0,
		allCandidates: [],
		isCandidatesNextPageAvl: true,
		allCandidatesNext: [],
	})

	const handleCandidatePagination = () => {
		setLoadingCandidates(true)
		setCandidateData({
			...candidateData,
			page: candidateData.page + 1,
		})
	}

	useEffect(() => {
		if (candidateData.allCandidates.length == 0) {
			setLoadingCandidates(true)
			getAllCandidates(
				candidateData.page,
				pageParams.pageLimit
			)
				.then(result => {
					if (
						result.data.data.length < pageParams.pageLimit
					) {
						setCandidateData({
							...candidateData,
							allCandidates: [...result?.data?.data],
							isNextPageAvl: false,
						})
						setLoadingCandidates(false)
					} else {
						setCandidateData({
							...candidateData,
							allCandidates: [...result?.data?.data],
							isNextPageAvl:
								!result.data.data.length <
								pageParams.pageLimit,
						})

						setLoadingCandidates(false)
					}
				})
				.catch(err => {
					alert(`ther has been an error ${err}`)
				})
		}

		if (
			candidateData.isCandidatesNextPageAvl === true &&
			candidateData.page !== 0
		) {
			setLoadingCandidates(true)
			// setCandidateData({
			// 	...candidateData,
			// 	allCandidates: [
			// 		...candidateData.allCandidates,
			// 		...candidateData.allCandidatesNext,
			// 	],
			// })
			// setLoadingCandidates(false)
			getAllCandidates(
				candidateData.page,
				pageParams.pageLimit
			)
				.then(result => {
					setCandidateData({
						...candidateData,
						allCandidates: [
							...candidateData.allCandidates,
							...result.data.data,
						],
					})
					console.log(candidateData)
					setLoadingCandidates(false)
				})
				.catch(err => {
					alert(`ther has been an error ${err}`)
				})
		}
	}, [candidateData.page])

	return (
		<AdminLayout>
			<Applications
				loading={loadingCandidates}
				candidateData={candidateData.allCandidates}
				handleCandidatePagination={
					handleCandidatePagination
				}
			/>
		</AdminLayout>
	)
}
