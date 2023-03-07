/** @format */

import { useRouter } from "next/router"
import React, { useEffect, useState } from "react"
import ContactAdmin from "../../components/contactAdmin"
import AdminLayout from "../../components/layout/adminLayout"

import { getAllContacts } from "../../lib/backendCalls"

export default function AdminPage() {
	const [loading, setLoading] = useState(true)

	const pageParams = {
		pageLimit: 3,
	}

	const [data, setData] = useState({
		page: 0,
		allContacts: [],
		isContactsNextPageAvl: true,
	})

	const handleContactsPagination = () => {
		setLoading(true)
		setData({
			...data,
			page: data.page + 1,
		})
	}

	useEffect(() => {
		if (data.allContacts.length == 0) {
			setLoading(true)
			getAllContacts(data.page, pageParams.pageLimit)
				.then(result => {
					if (
						result.data.data.length < pageParams.pageLimit
					) {
						setData({
							...data,
							allContacts: [...result?.data?.data],
							isContactsNextPageAvl: false,
						})
						setLoading(false)
					} else {
						setData({
							...data,
							allContacts: [...result?.data?.data],
							isContactsNextPageAvl:
								!result.data.data.length <
								pageParams.pageLimit,
						})

						setLoading(false)
					}
				})
				.catch(err => {
					alert(`ther has been an error ${err}`)
				})
		}

		if (
			data.isContactsNextPageAvl === true &&
			data.page !== 0
		) {
			setLoading(true)
			// setCandidateData({
			// 	...candidateData,
			// 	allCandidates: [
			// 		...candidateData.allCandidates,
			// 		...candidateData.allCandidatesNext,
			// 	],
			// })
			// setLoadingCandidates(false)
			getAllContacts(data.page, pageParams.pageLimit)
				.then(result => {
					setData({
						...data,
						allContacts: [
							...data.allContacts,
							...result.data.data,
						],
					})
					setLoading(false)
				})
				.catch(err => {
					alert(`ther has been an error ${err}`)
				})
		}
	}, [data.page])

	return (
		<AdminLayout>
			<ContactAdmin
				handleContactsPagination={handleContactsPagination}
				contacts={data.allContacts}
				loading={loading}
			/>
		</AdminLayout>
	)
}
