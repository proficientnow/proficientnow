/** @format */

import dbConnect from "../../../lib/mongooseDb"
import Candidate from "../../../models/Candidate"
import Job from "../../../models/Job"

export default async function handler(req, res) {
	const {
		query: { id },
		method,
	} = req

	await dbConnect()

	// get candidates that include a job id

	switch (method) {
		case "GET" /* Get a candidate by job its ID */:
			try {
				const candidate = await Candidate.findById(id)
				if (!candidate) {
					return res.status(400).json({ success: false })
				}
				return res
					.status(200)
					.json({ success: true, data: candidate })
			} catch (error) {
				return res.status(400).json({ success: false })
			}
			break

		case "DELETE" /* Delete a candidate by its ID */:
			try {
				const deletedCandidate = await Candidate.deleteOne({
					_id: id,
				})
				if (!deletedCandidate) {
					return res.status(400).json({ success: false })
					res.end()
				}
				return res
					.status(200)
					.json({ success: true, data: {} })
			} catch (error) {
				return res.status(400).json({ success: false })
			}
			break

		default:
			return res.status(400).json({ success: false })
			break
	}
}
