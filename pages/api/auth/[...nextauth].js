/** @format */

import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
// import FacebookProvider from "next-auth/providers/facebook"
// import LinkedInProvider from "next-auth/providers/linkedin"
import { MongoDBAdapter } from "@next-auth/mongodb-adapter"

import clientPromise from "../../../lib/connectDB"

export default NextAuth({
	providers: [
		// FacebookProvider( {
		//     clientId: process.env.FACEBOOK_ID,
		//     clientSecret: process.env.FACEBOOK_SECRET
		// } ),
		// LinkedInProvider( {
		//     clientId: process.env.LINKEDIN_CLIENT_ID,
		//     clientSecret: process.env.LINKEDIN_CLIENT_SECRET
		// } ),
		GoogleProvider({
			clientId: process.env.GOOGLE_ID,
			clientSecret: process.env.GOOGLE_SECRET,
		}),
	],
	secret: "LlKq6ZtYbr+hTC073mAmAh9/h2HwMfsFo4hrfCx5mLg=",
	callbacks: {
		async session({ session, user }) {
			session.user._id = user.id
			session.user.role = user.role
			return session
		},
	},
	pages: {
		signIn: "/auth/signin",
	},
	adapter: MongoDBAdapter(clientPromise),
})
