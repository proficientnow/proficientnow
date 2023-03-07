/** @format */

import dbConnect from "../../../lib/mongooseDb"
import Candidate from "../../../models/Candidate"

export default async function handler(req, res) {
	const { body: candidateDetails, method, query } = req

	await dbConnect()

	const pageParams = {
		page: query.page,
		limit: query.limit,
	}

	switch (method) {
		case "GET" /* Get a model by its ID */:
			try {
				const candidates = await Candidate.find()
					.skip(pageParams.page * pageParams.limit)
					.limit(pageParams.limit)
				// .sort({ updatedAt: "asc" })
				if (!candidates) {
					return res.status(400).json({ success: false })
				}
				return res
					.status(200)
					.json({ success: true, data: candidates })
			} catch (error) {
				return res.status(400).json({ success: false })
			}

		case "POST" /* create a candidate document*/:
			try {
				// console.log( candidateDetails )
				const createdCandidate = await Candidate.create(
					candidateDetails
				)
				if (!createdCandidate) {
					return res.status(400).json({ success: false })
				}
				return res
					.status(200)
					.json({ success: true, data: createdCandidate })
			} catch (error) {
				return res
					.status(400)
					.json({ success: false, message: error })
			}

		default:
			return res.status(400).json({ success: false })
	}
}
