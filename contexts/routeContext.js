/** @format */

import {
	createContext,
	useContext,
	useEffect,
	useMemo,
	useState,
} from "react"
import { useRouter } from "next/router"
export const routeContext = createContext({})

const RouteContextProvider = ({ children }) => {
	const router = useRouter()

	const [routeState, setRouteState] = useState("")
	const [user, setUser] = useState({})

	const routeValues = useMemo(
		() => ({
			routeState,
			setRouteState,
		}),
		[routeState]
	)

	const userMemo = useMemo(
		() => ({
			user,
			setUser,
		}),
		[user]
	)

	// useEffect(() => {
	// 	setRouteState(router.asPath)
	// }, [router.asPath])

	return (
		<routeContext.Provider
			value={{ ...userMemo, ...routeValues }}
		>
			{children}
		</routeContext.Provider>
	)
}

export const useRouteContext = () => {
	const context = useContext(routeContext)
	if (!context) {
		throw new Error(
			"useRouteContext is used outside of routeContext Provider"
		)
	}
	return useContext(routeContext)
}

export default RouteContextProvider
