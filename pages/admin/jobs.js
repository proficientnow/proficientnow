/** @format */

import { Box, Container, Heading } from "@chakra-ui/react"
import { getSession } from "next-auth/react"
import { useRouter } from "next/router"
import React, {
	createContext,
	useEffect,
	useState,
} from "react"
import AdminJobs from "../../components/adminJobs"
import AdminLayout from "../../components/layout/adminLayout"

import {
	getAllJobs,
	getDocumentsCount,
	getAllCandidates,
} from "../../lib/backendCalls"
export const PostJobContext = createContext()
export default function AdminJobsPage() {
	const [loadingCandidates, setLoadingCandidates] =
		useState(true)

	const [loadingJobs, setLoadingJobs] = useState(true)
	const [loadingCount, setLoadingCount] = useState(true)

	const pageParams = {
		pageLimit: 3,
	}

	const [candidateData, setCandidateData] = useState({
		page: 0,
		allCandidates: [],
		isCandidatesNextPageAvl: true,
		allCandidatesNext: [],
	})
	const [jobData, setJobData] = useState({
		page: 0,
		allJobs: [],
		isJobsNextPageAvl: true,
		allJobsNext: [],
	})

	const [docCount, setDocCount] = useState({})

	const handleCandidatePagination = () => {
		setLoadingCandidates(true)
		setCandidateData({
			...candidateData,
			page: candidateData.page + 1,
		})
	}

	const handleJobsPagination = () => {
		setLoadingJobs(true)
		setJobData({
			...jobData,
			page: jobData.page + 1,
		})
		console.log("hello first")
	}

	useEffect(() => {
		setLoadingCount(true)
		getDocumentsCount()
			.then(result => {
				setDocCount(result.data.data)
				setLoadingCount(false)
			})
			.catch(err => {
				console.log("error", err)
			})
	}, [])

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

	useEffect(() => {
		if (jobData.allJobs.length == 0) {
			setLoadingJobs(true)
			getAllJobs(jobData.page, pageParams.pageLimit)
				.then(result => {
					if (
						result.data.data.length < pageParams.pageLimit
					) {
						setJobData({
							...jobData,
							allJobs: [...result?.data?.data],
							isNextPageAvl: false,
						})
						return setLoadingJobs(false)
					} else {
						setJobData(prev => {
							return {
								...prev,
								allJobs: [...result?.data?.data],
								isNextPageAvl:
									!result.data.data.length <
									pageParams.pageLimit,
							}
						})

						return setLoadingJobs(false)
					}
				})
				.catch(err => {
					alert(`ther has been an error ${err}`)
				})
		}

		if (
			jobData.isJobsNextPageAvl === true &&
			jobData.page !== 0
		) {
			setLoadingJobs(true)

			console.log(jobData)
			getAllJobs(jobData.page, pageParams.pageLimit)
				.then(result => {
					setJobData({
						...jobData,
						allJobs: [
							...jobData.allJobs,
							...result.data.data,
						],
					})
					setLoadingJobs(false)
				})
				.catch(err => {
					alert(`ther has been an error ${err}`)
				})
		}
	}, [jobData.page])

	// useEffect(() => {
	// 	console.log(candidateData)
	// }, [candidateData])
	// useEffect(() => {
	// 	console.log(jobData)
	// }, [jobData])

	return (
		<AdminLayout>
			<AdminJobs
				countLoading={loadingCount}
				documentCounts={docCount}
				candidateData={candidateData.allCandidates}
				candidateLoading={loadingCandidates}
				handleCandidatePagination={
					handleCandidatePagination
				}
				isCandidatesNextPageAvl={
					candidateData.isCandidatesNextPageAvl
				}
				jobData={jobData.allJobs}
				loadingJobs={loadingJobs}
				handleJobsPagination={handleJobsPagination}
				isJobsNextPageAvl={jobData.isJobsNextPageAvl}
			/>
		</AdminLayout>
	)
}
