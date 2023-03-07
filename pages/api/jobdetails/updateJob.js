/** @format */

import dbConnect from "../../../lib/mongooseDb"
import Candidate from "../../../models/Candidate"
import Job from "../../../models/Job"

export default async function handler(req, res) {
	const {
		body: { candidateId, jobId },
		method,
	} = req

	await dbConnect()

	switch (method) {
		case "POST" /* Get a model by its ID */:
			try {
				const job = await Job.findByIdAndUpdate(jobId, {
					$push: { usersApplied: candidateId },
				})
				if (!job) {
					return res.status(400).json({
						success: false,
						message: "job object not updated",
					})
				}
				const candidate = await Candidate.findByIdAndUpdate(
					candidateId,
					{
						$push: { jobsApplied: jobId },
					}
				)
				if (!candidate) {
					return res.status(400).json({
						succuss: false,
						message: "candidate object not updated",
					})
				}

				return res
					.status(200)
					.json({ success: true, data: { job, candidate } })
			} catch (error) {
				return res
					.status(400)
					.json({ success: false, message: error })
			}
			break

		case "GET":
			// check if candidate has already applied for job

			try {
				// query if usersApplied array contains given candidate Id
				const checkJobs = await Job.find({
					usersApplied: { $elemMatch: { candidateId } },
				})

				const checkCandidates = await Candidate.find({
					jobsApplied: { $elemMatch: { jobId } },
				})

				if (!checkJobs || !checkCandidates) {
					return res.status(400).json({
						success: false,
						message: "could not retrieve information",
					})
				}

				return res.status(200).json({
					success: true,
					data: { checkJobs, checkCandidates },
				})
			} catch {
				return res.status(400).json({
					success: false,
					message: "There has been an error in the DB",
				})
			}
			break

		default:
			return res.status(400).json({ success: false })
			break
	}
}
