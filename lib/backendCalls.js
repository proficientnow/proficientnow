/** @format */

import axios from "axios"

// base location of api -- change when in production or change of domain
// const baseRef = "https://proficientnow.com/api"
// const baseRef = "https://proficientnow.netlify.app/api"
// const baseRef = "http://localhost:3000/api"

// production Ref
// const baseRef = `https://www.proficientnow.com/api`

import { baseRef } from "./constants"

// JOB OPERATIONS

const getAllJobs = (page, limit) => {
	return axios.get(
		`${baseRef}/jobdetails?page=${page}&limit=${limit}`
	)
}

const getDocumentsCount = () => {
	return axios.get(`${baseRef}/countdocuments`)
}

const getJobDetailsById = id => {
	return axios.get(`${baseRef}/jobdetails/${id}`)
}

const createJobPost = jobDetails => {
	return axios.post(`${baseRef}/jobdetails`, jobDetails)
}

const getJobByFilters = filters => {
	return axios.post(`${baseRef}/filterjobs`, filters)
}

const deleteJobById = id => {
	return axios.delete(`${baseRef}/jobdetails/${id}`)
}

// CANDIDATE OPERATIONS

const getAllCandidates = (page, limit) => {
	return axios.get(
		`${baseRef}/candidatedetails?page=${page}&limit=${limit}`
	)
}

const createCandidate = candidateDetails => {
	return axios.post(
		`${baseRef}/candidatedetails`,
		candidateDetails
	)
}

const findCandidateByAuthId = id => {
	return axios.get(`${baseRef}/getCandidateParams/${id}`)
}

const getCandidateById = id => {
	return axios.get(`${baseRef}/candidatedetails/${id}`)
}

const deleteCandidateById = id => {
	return axios.delete(`${baseRef}/candidatedetails/${id}`)
}

// CANDIDATE APPLICATION UPDATE

const onJobApply = (candidateId, jobId) => {
	return axios.post(`${baseRef}/jobdetails/updateJob`, {
		candidateId,
		jobId,
	})
}

// COMPOSITE FUNCTIONS

//CHECK IF USER HAS ALREADY APPLIED FOR A JOB
const checkIfApplied = async (id, jobId) => {
	const candidate = await findCandidateByAuthId(id)
	const jobDetails = await getJobDetailsById(jobId)
	if (
		jobDetails?.data?.data.usersApplied.includes(
			candidate?.data?.data[0]?._id
		)
	) {
		return true
	}

	return false
}

//RETURN THE APPLIED JOBS OF USER
const appliedJobs = async id => {
	const candidate = await findCandidateByAuthId(id)
	return candidate
}

// CONTACT FORM CALL

const createContact = contactDetails => {
	return axios.post(
		`${baseRef}/contactform`,
		contactDetails
	)
}

// Get all contacted people

const getAllContacts = (page, limit) => {
	return axios.get(
		`${baseRef}/contactform?page=${page}&limit=${limit}`
	)
}

const sendEmailResume = data => {
	return axios.post(`${baseRef}/admin/sendEmail`, data)
}

module.exports = {
	getAllJobs,
	getJobByFilters,
	getJobDetailsById,
	createJobPost,
	deleteCandidateById,
	deleteJobById,
	createContact,
	getAllContacts,
	createCandidate,
	getAllCandidates,
	onJobApply,
	checkIfApplied,
	appliedJobs,
	findCandidateByAuthId,
	sendEmailResume,
	getDocumentsCount,
}
