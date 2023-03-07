/** @format */
import { Box, Heading } from "@chakra-ui/react"
import React from "react"
import AdminLayout from "../../components/layout/adminLayout"

export default function Oorwin() {
	return (
		<AdminLayout>
			<Box
				sx={{
					width: "full",
					height: "100vh",
					bg: "blue.500",
				}}
			>
				<iframe
					src="https://proficienttoday.oorwin.com/careers/index.html"
					width="100%"
					height="100%"
					// iframeBorder="0"
					style={{
						border: "none",
						margin: "0px",
						marginTop: "50px",
					}}
				>
					Hello
				</iframe>
			</Box>
		</AdminLayout>
	)
}
