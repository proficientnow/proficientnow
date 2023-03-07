/** @format */

import dbConnect from "../../../lib/mongooseDb"
import Job from "../../../models/Job"

export default async function handler(req, res) {
	const {
		body: { filters },
		method,
	} = req

	await dbConnect()

	switch (method) {
		case "POST" /* Delete a Job by its ID */:
			try {
				const { location, designation, industry, salary } =
					filters
				if (
					!location.city.length &&
					!designation.length &&
					!industry &&
					!salary.min &&
					!salary.max
				) {
					const createdJob = await Job.find()
					return res
						.status(200)
						.json({ success: true, data: createdJob })
				}
				const createdJob = await Job.find({
					$or: [
						{ "location.city": location.city },
						// { "location.country": location.country },
						{ industry: industry },
						{
							designation: designation.length
								? { $regex: designation, $options: "i" }
								: "",
						},
						{
							$and: [
								{
									"salary.min": {
										$lte: Number(salary?.min),
									},
								},
								{
									"salary.max": {
										$gte: Number(salary?.max),
									},
								},
							],
						},
					],
				})
				if (!createdJob) {
					return res.status(400).json({ success: false })
				}
				return res
					.status(200)
					.json({ success: true, data: createdJob })
			} catch (error) {
				return res.status(400).json({ success: false })
			}
			break

		default:
			return res.status(400).json({ success: false })
			break
	}
}
