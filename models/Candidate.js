/** @format */

import mongoose from "mongoose"

/* CandidateSchema will correspond to a collection in your MongoDB database. */
const CandidateSchema = new mongoose.Schema(
	{
		name: {
			/* The name of this Candidate */

			type: String,
			required: [true, "Please provide a firstname."],
			maxlength: [
				60,
				"first name cannot be more than 60 characters",
			],
		},
		email: {
			/* The email of this Candidate */

			type: String,
			required: [
				true,
				"Please provide an email for us to revert back to.",
			],
			maxlength: [
				60,
				"Email cannot be more than 60 characters",
			],
			validate: {
				validator: function (v) {
					return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
						v
					)
				},
				message: props =>
					`${props.value} is not a valid email!`,
			},
		},
		mobile: {
			/* The phone of this Candidate */

			type: String,
			required: [
				true,
				"Please provide your mobile number.",
			],
		},
		jobsApplied: [String],
		address: {
			line1: String,
			line2: String,
			city: {
				type: String,
				required: true,
			},
			state: {
				type: String,
				required: true,
			},
			country: {
				type: String,
				required: true,
			},
			pincode: {
				type: String,
				required: true,
			},
		},
		dob: Date,
		currentJobDetails: {
			company: String,
			ctc: String,
			title: String,
		},
		expectedCtc: Number,
		skills: Array,
		image_url: {
			/* Url to Candidate image */

			// required: [true, "Please provide an image url for this Candidate."],
			type: String,
		},
		gender: String,
		authId: String,
	},
	{ timestamps: true }
)

export default mongoose.models.Candidate ||
	mongoose.model("Candidate", CandidateSchema)
