/** @format */

import mongoose from "mongoose"

const ContactFormSchema = new mongoose.Schema(
	{
		name: String,
		email: {
			type: String,
			required: [
				true,
				"Please provide a name for this Candidate.",
			],
			maxlength: [
				60,
				"Name cannot be more than 60 characters",
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
			type: String,
			required: [
				true,
				"Please provide a name for this Candidate.",
			],
		},
		companyName: String,
		attendedTo: {
			type: String,
			default: "false",
		},
	},
	{ timestamps: true }
)

export default mongoose.models.ContactForm ||
	mongoose.model("ContactForm", ContactFormSchema)
