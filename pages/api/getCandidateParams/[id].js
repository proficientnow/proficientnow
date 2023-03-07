/** @format */

import dbConnect from "../../../lib/mongooseDb"
import Candidate from "../../../models/Candidate"

export default async function handler(req, res) {
	const {
		query: { id },
		method,
	} = req

	await dbConnect()

	switch (method) {
		case "GET":
			try {
				const candidate = await Candidate.find({
					authId: id,
				})

				if (!candidate) {
					return res.status(400).json({ success: false })
				}

				return res.status(200).json({
					success: true,
					data: candidate,
				})
			} catch (error) {
				return res.status(400).json({
					success: false,
					message: ("there has been an error", error),
				})
			}

		default:
			return res.status(400).json({ success: false })
			break
	}
}
