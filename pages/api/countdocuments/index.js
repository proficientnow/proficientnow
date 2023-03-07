/** @format */

import dbConnect from "../../../lib/mongooseDb"
import Candidate from "../../../models/Candidate"
import Job from "../../../models/Job"
import ContactFormSchema from "../../../models/ContactForm"
// import User from "../../../models/User"

export default async function handler(req, res) {
	const { method } = req

	await dbConnect()

	switch (method) {
		case "GET":
			try {
				const jobsCount = await Job.countDocuments()
				const nonAppliedJobs = await Job.countDocuments({
					usersApplied: { $size: 0 },
				})
				const candidatesCount =
					await Candidate.countDocuments()

				const contactsCount =
					await ContactFormSchema.countDocuments()

				const contactsUnattendedCount =
					await ContactFormSchema.countDocuments()
				const appliedJobsCount = jobsCount - nonAppliedJobs

				if (
					!jobsCount ||
					!nonAppliedJobs ||
					!candidatesCount ||
					!contactsCount ||
					!contactsUnattendedCount
				) {
					return res.status(400).json({
						success: false,
					})
				}

				return res.status(200).json({
					success: true,
					data: {
						jobsCount,
						appliedJobsCount,
						candidatesCount,
						contactsCount,
						contactsUnattendedCount,
					},
				})
			} catch (error) {
				return res.status(400).json({
					success: false,
					message: `there has been an error: ${error}`,
				})
			}
			break

		default:
			res.status(400).json({ success: false })
			break
	}
}
