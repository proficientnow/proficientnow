/** @format */

import dbConnect from "../../../lib/mongooseDb"
import Job from "../../../models/Job"

export default async function handler(req, res) {
	const { body: jobDetails, method, query } = req

	await dbConnect()

	const pageParams = {
		page: query.page,
		limit: query.limit,
	}

	switch (method) {
		case "GET" /* Get a model by its ID */:
			try {
				const job = await Job.find()
					.skip(pageParams.page * pageParams.limit)
					.limit(pageParams.limit)
				if (!job) {
					return res.status(400).json({ success: false })
				}
				return res
					.status(200)
					.json({ success: true, data: job })
			} catch (error) {
				return res.status(400).json({ success: false })
			}

		case "POST" /* Delete a model by its ID */:
			try {
				const createdJob = await Job.create(jobDetails)
				if (!createdJob) {
					return res.status(400).json({ success: false })
				}

				return res
					.status(200)
					.json({ success: true, data: createdJob })
			} catch (error) {
				return res.status(400).json({ success: false })
			}

		default:
			return res.status(400).json({ success: false })
	}
}
