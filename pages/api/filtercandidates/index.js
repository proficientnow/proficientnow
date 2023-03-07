/** @format */

import dbConnect from "../../../lib/mongooseDb"
import Candidate from "../../../models/Candidate"
import Job from "../../../models/Job"

export default async function handler(req, res) {
	const { body: location, authId, method } = req

	await dbConnect()

	switch (method) {
		case "GET":
			try {
				let candidateId

				const candidate = await Candidate.find({
					authId: authId,
				})

				if (candidate) {
					return (candidateId = candidate._id)
				}

				if (hasApplied) {
					return res.status(200).json({
						success: true,
						message: "You have already applied to this job",
					})
				}

				if (!candidate) {
					return res.status(400).json({ success: false })
				}
			} catch (error) {}

		case "POST" /* Delete a Job by its ID */:
			try {
				// const { minSalary, maxSalary } = salaryRange;
				// console.log( filters );
				const candidateFound = await Candidate.find({
					$or: [
						{ "address.city": location.city },
						{ "address.country": location.country },
					],
				})
				if (!candidateFound) {
					return res.status(400).json({ success: false })
				}
				return res
					.status(200)
					.json({ success: true, data: candidateFound })
			} catch (error) {
				return res.status(400).json({ success: false })
			}
			break

		default:
			return res.status(400).json({ success: false })
			break
	}
}
