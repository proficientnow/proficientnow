/** @format */

import axios from "axios"
import { useSession } from "next-auth/react"
import {
	createContext,
	useState,
	useEffect,
	useContext,
} from "react"

import { baseRef } from "./constants"

const Context = createContext()

const Provider = ({ children }) => {
	const [user, setUser] = useState(null)
	// const [loading, setLoading] = useState(true)
	const [success, setSuccess] = useState(undefined)

	const { data: session, status } = useSession()

	useEffect(() => {
		if (session == null) {
			// setLoading(false)
			setUser(null)
			return
		}
		setUser(session?.user)
		// axios
		// 	.get(`${baseRef}/auth/session`)
		// 	.then(a => {
		// 		setLoading(false)
		// 		setSession(a)
		// 		setSuccess(true)
		// 	})
		// 	.catch(e => {
		// 		setLoading(false)
		// 		setSession(null)
		// 		setSuccess(false)
		// 	})
	}, [])

	const exposed = {
		user,
	}

	return (
		<Context.Provider value={user}>
			{children}
		</Context.Provider>
	)
}

export const useUser = () => useContext(Context)

export default Provider
