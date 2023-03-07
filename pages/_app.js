/** @format */

import { useRouter } from "next/router"
import {
	SessionProvider,
	useSession,
} from "next-auth/react"
import "../styles/font/stylesheet.css"
import { ChakraProvider } from "@chakra-ui/react"
import "../styles/globals.css"

import theme from "../lib/theme"
import MainLayout from "../components/layout/mainLayout"
import PageLayout from "../components/layout/pageLayout"
import { createContext, useState } from "react"
// import { useState, createContext, useContext } from "react";
import useCurrentLocation from "../lib/hooks/useCurrentLocation"
import RouteContextProvider from "../contexts/routeContext"
// const UserContext = createContext();
export const UserContext = createContext()

function MyApp({
	Component,
	pageProps: { session, ...pageProps },
}) {
	return (
		<ChakraProvider theme={theme}>
			<SessionProvider session={session}>
				<RouteContextProvider>
					<Component {...pageProps} />
				</RouteContextProvider>
			</SessionProvider>
		</ChakraProvider>
	)
}

export default MyApp
