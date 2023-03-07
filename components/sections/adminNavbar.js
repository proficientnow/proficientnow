/** @format */

import {
	Avatar,
	Box,
	Button,
	Center,
	CloseButton,
	Divider,
	Drawer,
	DrawerBody,
	DrawerContent,
	DrawerHeader,
	DrawerOverlay,
	Flex,
	FormControl,
	FormHelperText,
	FormLabel,
	Grid,
	HStack,
	IconButton,
	Input,
	InputGroup,
	InputLeftElement,
	InputRightElement,
	Link,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	RangeSlider,
	RangeSliderFilledTrack,
	RangeSliderThumb,
	RangeSliderTrack,
	Select,
	Stack,
	Tag,
	TagCloseButton,
	TagLabel,
	Text,
	Textarea,
	useDisclosure,
	useToast,
} from "@chakra-ui/react"
import { SearchIcon } from "@chakra-ui/icons"
import React, {
	useContext,
	useEffect,
	useState,
} from "react"

import NextLink from "next/link"
import { useRouter } from "next/router"

import { HamburgerIcon as MenuIcon } from "@chakra-ui/icons"
import MoreHorizIcon from "@mui/icons-material/MoreHoriz"
import AdminLogo from "../icons/adminLogo.svg"
import { useSession } from "next-auth/react"

import { createJobPost } from "../../lib/backendCalls"
import { PostJobContext } from "../../pages/admin/jobs"

const LinkItem = ({ href, text }) => {
	const router = useRouter()
	const path = router.pathname
	const active = href === path
	return (
		//Drawer content onhover color change

		<NextLink
			passHref
			href={href}
			scroll={false}
		>
			<Link
				color={active ? "white" : "#BECFE5"}
				_hover={{
					color: "white",
				}}
			>
				{text}
			</Link>
		</NextLink>
	)
}

const AdminNavbar = ({ title, image, email, path }) => {
	const [menuOpen, setMenuOpen] = useState(false)

	const [input, setInput] = useState("")

	const { data: session, status } = useSession()

	const toast = useToast()

	const postJobContext = useContext(PostJobContext)

	//MODAL functionalities

	//opening closing of modal using usedisclosure from chakra ui
	const {
		isOpen: isModalOpen,
		onOpen: onModalOpen,
		onClose: onModalClose,
	} = useDisclosure()
	const {
		isOpen: isDrawerOpen,
		onOpen: onDrawerOpen,
		onClose: onDrawerClose,
	} = useDisclosure()

	//Tags used in *Post a job* Modal
	const [tags, setTags] = useState([])
	const [isKeyReleased, setIsKeyReleased] = useState(false)

	const [salRange, setSalRange] = useState({
		min: 5,
		max: 20,
	})

	const openModal = editData => {
		if (editData) {
			setFormValues(editData)
			return onModalOpen()
		}
		return onModalOpen()
	}

	useEffect(() => {
		if (postJobContext) postJobContext.openModal = openModal
	}, [onModalOpen])

	const onQualificationsChange = e => {
		const { value } = e.target
		setInput(value)
	}

	const onKeyDown = e => {
		const { key } = e
		const trimmedInput = input.trim()

		if (
			(key === "," || key === "Enter") &&
			trimmedInput.length &&
			!tags.includes(trimmedInput)
		) {
			e.preventDefault()
			setTags(prevState => [...prevState, trimmedInput])
			setInput("")
		}

		if (
			key === "Backspace" &&
			!input.length &&
			tags.length &&
			isKeyReleased
		) {
			const tagsCopy = [...tags]
			const poppedTag = tagsCopy.pop()
			e.preventDefault()
			setTags(tagsCopy)
			setInput(poppedTag)
		}

		setIsKeyReleased(false)
	}

	const onKeyUp = () => {
		setIsKeyReleased(true)
	}

	const deleteTag = index => {
		setTags(prevState =>
			prevState.filter((tag, i) => i !== index)
		)
	}

	const [formValues, setFormValues] = useState({
		designation: "",
		industry: "",
		location: {
			city: "",
			country: "",
		},
		company: "",
		salary: {
			min: salRange.min,
			max: salRange.max,
		},
		shift: "",
		jobDescription: "",
		qualifications: tags,
	})

	const handleChange = e => {
		e.preventDefault()
		const key = e.target.name

		switch (key) {
			case "company":
				setFormValues({
					...formValues,
					company: e.target.value,
				})
				break

			case "designation":
				setFormValues({
					...formValues,
					designation: e.target.value,
				})
				break

			case "country":
				setFormValues({
					...formValues,
					location: {
						...formValues.location,
						country: e.target.value,
					},
				})
				break

			case "city":
				setFormValues({
					...formValues,
					location: {
						...formValues.location,
						city: e.target.value,
					},
				})
				break

			case "shift":
				setFormValues({
					...formValues,
					shift: e.target.value,
				})
				break

			case "description":
				setFormValues({
					...formValues,
					jobDescription: e.target.value,
				})
				break

			case "industry":
				setFormValues({
					...formValues,
					industry: e.target.value,
				})
				break

			default:
				break
		}
	}

	useEffect(() => {
		setFormValues({
			...formValues,
			qualifications: tags,
		})
	}, [tags])

	useEffect(() => {
		setFormValues({
			...formValues,
			salary: {
				...formValues.salary,
				min: salRange.min,
				max: salRange.max,
			},
		})
	}, [salRange])

	// console.log(candidateData);
	const handleSliderChange = e => {
		setSalRange({
			...salRange,
			min: e[0],
			max: e[1],
		})
	}

	// console.log(jobData, candidateData)

	// useEffect(() => {
	//   if (session) {
	//     if (!session.user) {
	//       router.push("/auth/signin");
	//     }
	//     if (`${session?.user?.email}` !== "proficientnow.marketing@gmail.com") {
	//       router.push("/");
	//     }
	//   }
	// }, [session]);

	const handleFormSubmit = async () => {
		createJobPost(formValues)
			.then(a => {
				// console.log(a.data)
				a
					? toast({
							title: "Success",
							description:
								"The job has been successfully posted",
							status: "success",
							duration: 5000,
							isClosable: true,
							position: "top",
					  })
					: toast({
							title: "Unsuccessful",
							description: `The job could not be posted , ${a}`,
							status: "error",
							duration: 5000,
							isClosable: true,
							position: "top",
					  })
			})
			.catch(e => {
				toast({
					title: "Unsuccessful",
					description: `The job could not be posted , ${e}`,
					status: "error",
					duration: 5000,
					isClosable: true,
					position: "top",
				})
			})
	}

	return (
		<Center
			px={"2rem"}
			bgColor={"#F8FAFF"}
			flexDir={{ base: "column", lg: "none" }}
		>
			{/* MODAL on clicking *Post a job */}
			<Modal
				size="5xl"
				isOpen={isModalOpen}
				onClose={onModalClose}
			>
				<ModalOverlay />
				<ModalContent h={"fit-content"}>
					<ModalHeader>Add a Job</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<Box h={"80%"}>
							<form>
								<Grid
									gridAutoFlow={{
										base: "column",
										lg: "row",
									}}
									gridTemplateColumns={"repeat(2,1fr)"}
									// gridTemplateRows={"repeat(2,1fr)"}
								>
									<FormControl isRequired>
										<Grid
											h={"100%"}
											gridAutoFlow={"column"}
											gridTemplateRows={"repeat(1, 1fr)"}
										>
											<Flex
												w={"90%"}
												flexDir={"column"}
												rowGap={"1.5rem"}
												justifyContent={"start"}
											>
												<Stack>
													<FormLabel
														fontSize={"16px"}
														fontWeight={"semibold"}
													>
														Company Name
													</FormLabel>
													<Input
														name={"company"}
														type="text"
														h={"50px"}
														px={"1rem"}
														borderRadius={"full"}
														borderColor={"#DCE1EF"}
														borderWidth={"1px"}
														bgColor={"#F8F9FC"}
														placeholder={"ProficientNow"}
														_placeholder={{
															color: "#AFB2BF",
															fontStyle: "italic",
															fontSize: "0.8rem",
														}}
														value={formValues.company}
														onChange={handleChange}
													/>
												</Stack>
												<Stack>
													<FormLabel
														fontSize={"16px"}
														fontWeight={"semibold"}
													>
														Job Title
													</FormLabel>
													<Input
														name={"designation"}
														type="text"
														h={"50px"}
														px={"1rem"}
														borderRadius={"full"}
														borderColor={"#DCE1EF"}
														borderWidth={"1px"}
														bgColor={"#F8F9FC"}
														placeholder={"Developer"}
														_placeholder={{
															color: "#AFB2BF",
															fontStyle: "italic",
															fontSize: "0.8rem",
														}}
														value={formValues.designation}
														onChange={handleChange}
													/>
												</Stack>
												<Stack>
													<FormLabel
														fontSize={"16px"}
														fontWeight={"semibold"}
													>
														Location
													</FormLabel>
													<Grid
														gridAutoFlow={"row"}
														gridTemplateColumns={
															"repeat(2,1fr)"
														}
													>
														<Input
															type="text"
															name={"country"}
															w={"90%"}
															h={"50px"}
															px={"1rem"}
															borderRadius={"full"}
															borderColor={"#DCE1EF"}
															borderWidth={"1px"}
															bgColor={"#F8F9FC"}
															placeholder={"India"}
															_placeholder={{
																color: "#AFB2BF",
																fontStyle: "italic",
																fontSize: "0.8rem",
															}}
															value={
																formValues.location.country
															}
															onChange={handleChange}
														/>
														<Input
															type="text"
															name={"city"}
															w={"90%"}
															h={"50px"}
															px={"1rem"}
															borderRadius={"full"}
															borderColor={"#DCE1EF"}
															borderWidth={"1px"}
															bgColor={"#F8F9FC"}
															placeholder={"Hyderabad"}
															_placeholder={{
																color: "#AFB2BF",
																fontStyle: "italic",
																fontSize: "0.8rem",
															}}
															value={
																formValues.location.city
															}
															onChange={handleChange}
														/>
													</Grid>
												</Stack>
												<Stack>
													<FormLabel
														fontSize={"16px"}
														fontWeight={"semibold"}
													>
														Salary Range
													</FormLabel>

													<RangeSlider
														aria-label={["min", "max"]}
														colorScheme="blackAlpha"
														value={[
															salRange.min,
															salRange.max,
														]}
														min={0}
														max={100}
														step={5}
														onChange={e =>
															handleSliderChange(e)
														}
													>
														<RangeSliderTrack>
															<RangeSliderFilledTrack />
														</RangeSliderTrack>
														<RangeSliderThumb index={0} />
														<RangeSliderThumb index={1} />
													</RangeSlider>
													<Box
														h={"50px"}
														w={"100%"}
														display={"flex"}
														flexDir={"row"}
														justifyContent={"space-between"}
													>
														<Text color={"black"}>
															{salRange.min}
														</Text>
														<Text color={"black"}>
															{salRange.max}
														</Text>
													</Box>
													<FormHelperText>
														Salary range (in Lacs)
													</FormHelperText>
												</Stack>
												<Stack>
													<FormLabel
														fontSize={"16px"}
														fontWeight={"semibold"}
													>
														Qualifications
													</FormLabel>
													<Input
														type="text"
														name={"qualifications"}
														w={"100%"}
														h={"50px"}
														px={"1rem"}
														borderRadius={"full"}
														borderColor={"#DCE1EF"}
														borderWidth={"1px"}
														bgColor={"#F8F9FC"}
														placeholder={
															"Bachelor's degree, Master's, etc"
														}
														_placeholder={{
															color: "#AFB2BF",
															fontStyle: "italic",
															fontSize: "0.8rem",
														}}
														value={input}
														onKeyDown={onKeyDown}
														onKeyUp={onKeyUp}
														onChange={
															onQualificationsChange
														}
													/>
													<Flex
														flexDir={"row"}
														flexWrap={"wrap"}
														gap={"0.3rem"}
														p={"1rem"}
													>
														{tags.map((tag, index) => {
															return (
																<Tag
																	size={"md"}
																	p={"10px"}
																	key={index}
																	borderRadius="8px"
																	variant="solid"
																	bgColor={"#000929"}
																>
																	<TagLabel>{tag}</TagLabel>
																	<TagCloseButton
																		onClick={() =>
																			deleteTag(index)
																		}
																	/>
																</Tag>
															)
														})}
													</Flex>
												</Stack>
											</Flex>
										</Grid>
									</FormControl>
									<FormControl isRequired>
										<Grid
											h={"100%"}
											gridAutoFlow={"column"}
											gridTemplateRows={"repeat(1, 1fr)"}
										>
											<Flex
												w={"90%"}
												h={"80%"}
												flexDir={"column"}
												rowGap={"1rem"}
												justifyContent={"start"}
											>
												<Stack>
													<FormLabel
														fontSize={"16px"}
														fontWeight={"semibold"}
													>
														JobDescription
													</FormLabel>
													<Input
														// h={"300px"}
														name={"description"}
														h={"150px"}
														as={Textarea}
														textWrap={"break-word"}
														overflowWrap={"break-word"}
														borderRadius={"1.3rem"}
														px={"1rem"}
														borderColor={"#DCE1EF"}
														borderWidth={"1px"}
														bgColor={"#F8F9FC"}
														placeholder={"description..."}
														_placeholder={{
															color: "#AFB2BF",
															position: "absolute",
															top: "1rem",
															left: "1rem",
															fontSize: "0.8rem",
															fontStyle: "italic",
														}}
														type="text"
														textAlign={"top"}
														value={
															formValues.jobDescription
														}
														onChange={handleChange}
													/>
												</Stack>
												<Stack>
													<FormLabel
														fontSize={"16px"}
														fontWeight={"semibold"}
													>
														Shift
													</FormLabel>
													<Input
														name={"shift"}
														h={"50px"}
														borderRadius={"full"}
														px={"1rem"}
														borderColor={"#DCE1EF"}
														borderWidth={"1px"}
														bgColor={"#F8F9FC"}
														placeholder={
															"Morning shift (9AM - 5PM)"
														}
														_placeholder={{
															color: "#AFB2BF",
															position: "absolute",
															fontSize: "0.8rem",
															top: "1rem",
															left: "1rem",
															fontStyle: "italic",
														}}
														type="text"
														value={formValues.shift}
														onChange={handleChange}
													/>
												</Stack>
												<Stack>
													<FormLabel
														fontSize={"16px"}
														fontWeight={"semibold"}
													>
														Industry
													</FormLabel>

													<Select
														h={"50px"}
														borderRadius={"full"}
														// px={"1rem"}
														borderColor={"#DCE1EF"}
														borderWidth={"1px"}
														bgColor={"#F8F9FC"}
														color="#AFB2BF"
														type="text"
														value={formValues.industry}
														onChange={handleChange}
														width={"full"}
														name={"industry"}
														placeholder="Industry"
													>
														<option value="informationTech">
															Information Technology
														</option>
														<option value="bankingFinance">
															Banking and Finance
														</option>
														<option value="oilgas">
															Oil,Gas,Power,and Energy
														</option>
														<option value="biotechnology">
															Biotechnology
														</option>
														<option value="telecom">
															Telecom
														</option>
													</Select>
													{/* <Input
                            name={"industry"}
                            h={"50px"}
                            borderRadius={"full"}
                            px={"2rem"}
                            borderColor={"#DCE1EF"}
                            borderWidth={"1px"}
                            bgColor={"#F8F9FC"}
                            placeholder={"Human resources"}
                            _placeholder={{
                              color: "#AFB2BF",
                              position: "absolute",
                              top: "1rem",
                              left: "1rem",
                              fontStyle: "italic",
                            }}
                            type="text"
                            value={formValues.industry}
                            onChange={handleChange}
                          /> */}
												</Stack>
											</Flex>
										</Grid>
									</FormControl>
								</Grid>
							</form>
						</Box>
					</ModalBody>

					<ModalFooter>
						<HStack spacing={"2rem"}>
							<Button
								variant={"outline"}
								color={"#000929"}
								borderColor={"#000929"}
								borderRadius={"10px"}
								w={"6rem"}
								h={"3rem"}
								onClick={onModalClose}
							>
								Cancel
							</Button>
							<Button
								borderRadius={"10px"}
								color={"white"}
								bgColor={"#00061F"}
								_hover={{ bgColor: "#000929" }}
								variant="solid"
								w={"6rem"}
								h={"3rem"}
								onClick={handleFormSubmit}
							>
								Post
							</Button>
						</HStack>
					</ModalFooter>
				</ModalContent>
			</Modal>

			{/* Drawer on clicking top left icon */}
			<Drawer
				placement={"left"}
				onClose={onDrawerClose}
				isOpen={isDrawerOpen}
			>
				<DrawerOverlay />
				<DrawerContent
					motionProps={false}
					bgColor={"#00061F"}
				>
					<DrawerHeader>
						<Flex justifyContent={"space-between"}>
							<AdminLogo />
							<CloseButton
								mt={"-0.4rem"}
								color={"white"}
								_hover={{ bgColor: "whiteAlpha.200" }}
								onClick={onDrawerClose}
							/>
						</Flex>
					</DrawerHeader>
					<DrawerBody>
						<Box
							h={"100%"}
							display={"flex"}
							justifyContent={"space-between"}
							alignItems={"start"}
							flexDir={"column"}
							gap={"3rem"}
						>
							<Box
								my={"3rem"}
								display={"flex"}
								flexDir={"column"}
								alignItems={"flex-start"}
								gap={"3rem"}
							>
								{/* <Box
                  // w={"100%"}
                  color={"#BECFE5"}
                  // my={"1.5rem"}
                >
                  <Button
                    // w={"fit-content"}
                    bgColor={"transparent"}
                    // mx={"-1rem"}
                    
                    color={sideDrawer.dashboard?"white":"#BECFE5"}
                     onClick={onDashboard}
                    _hover={{
                      color: "white",
                    }}
                    href="/admin"
                  >
                   <NextLink passHref href={"/admin"}> Dashboard</NextLink>
                  </Button>
                  
                </Box> */}
								<LinkItem
									text={"Dashboard"}
									href={"/admin"}
									path={path}
								/>

								<LinkItem
									text={"Jobs"}
									href={"/admin/jobs"}
									path={path}
								/>

								<LinkItem
									text={"Application"}
									href={"/admin/applications"}
									path={path}
								/>

								<LinkItem
									text={"Contact"}
									href={"/admin/contacts"}
									path={path}
								/>
								<LinkItem
									text={"Oorwin portal"}
									href={"/admin/oorwin"}
									path={path}
								/>
								<Text
									bgColor={"#000929"}
									color="#BECFE5"
									fontWeight={"500"}
									onClick={onModalOpen}
									_hover={{
										color: "white",
									}}
									display={{ base: "flex", lg: "none" }}
								>
									Post a Job
								</Text>
							</Box>
							<Box
								w={"full"}
								display={"flex"}
								// mx={"1.3rem"}
								alignSelf={"start"}
								flexDir={"column"}
							>
								<Divider
									orientation="horizontal"
									color={"#3A6BAD"}
								/>
								<Box
									display={"flex"}
									flexDir={"row"}
									justifyContent={"space-between"}
									my={"1rem"}
									w={"full"}
								>
									<Box
										display={"flex"}
										justifyContent={"center"}
										alignItems={"center"}
										mr={"0.5rem"}
									>
										<Avatar
											src={image}
											size={"sm"}
										/>
									</Box>
									<Box
										w={"60%"}
										display={"flex"}
										flexDir={"column"}
									>
										<Text
											fontWeight={"500"}
											color={"white"}
										>
											Admin{" "}
										</Text>
										<Text
											fontWeight={"500"}
											fontSize={"0.9rem"}
											color={"#5C86BE"}
										>
											{email}
										</Text>
									</Box>
									{menuOpen && (
										<Button
											transition={"fade"}
											left={"8.9vw"}
											bottom={"7rem"}
											position={"absolute"}
											variant={"solid"}
											bgColor={"whiteAlpha.800"}
											onClick={() => {
												signOut().then(() => {
													router.push("/auth/signin")
												})
												setMenuOpen(false)
											}}
											w={"10rem"}
										>
											SignOut
										</Button>
									)}
									<IconButton
										onClick={() => {
											setMenuOpen(!menuOpen)
										}}
										size={"sm"}
										variant={"ghost"}
										_hover={{ bgColor: "whiteAlpha.200" }}
										color={"whiteAlpha.700"}
										icon={<MoreHorizIcon />}
									/>
								</Box>
							</Box>
						</Box>
					</DrawerBody>
				</DrawerContent>
			</Drawer>

			{/* Navbar content */}
			<Box
				display={"flex"}
				// justifyContent={"space-between"}
				gap={"2rem"}
				alignItems={"center"}
				// px={"2.5rem"}
				py={"1rem"}
				w={"full"}
			>
				<Box>
					<IconButton
						size="lg"
						variant={"filled"}
						color={"whiteAlpha.900"}
						bgColor={"#000929"}
						aria-label="Open Drawer"
						onClick={onDrawerOpen}
						icon={
							<MenuIcon
								w={"1.3rem"}
								h={"1.3rem"}
							/>
						}
					/>
				</Box>

				<Text
					color={"#000929"}
					fontWeight={"600"}
					fontSize={"2.2rem"}
					lineHeight={"3.1rem"}
					w={"15rem"}
					mx={"1rem"}
				>
					{title}
				</Text>
				{/* desktop search bar commented */}
				{/* <Box
          w={"60rem"}
          // mx={"1rem"}
          display={{ base: "none", lg: "flex" }}
        >
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              color="#AEB8D6"
              fontSize="1.2em"
            >
              <SearchIcon />
            </InputLeftElement>
            <Input
              bgColor={"#F1F2FF"}
              borderRadius={"10px"}
              borderColor={"#E2E9FE"}
              _placeholder={{
                color: "#AEB8D6",
              }}
              placeholder="Search for jobs, candidates here"
            />
          </InputGroup>
        </Box> */}
				<Box
					w={"full"}
					display={"flex"}
					alignItems={"flex-end"}
					justifyContent={"flex-end"}
				>
					<Button
						bgColor={"#000929"}
						borderRadius={"10px"}
						px={"1.2rem"}
						py={"0.8rem"}
						color="white"
						fontWeight={"500"}
						onClick={onModalOpen}
						_hover={{
							bgColor: "#000929",
						}}
						display={{ base: "none", lg: "flex" }}
					>
						Post a Job
					</Button>
				</Box>
			</Box>

			{/* Mobile search bar hidden for lg */}
			{/* desktop search bar commented */}

			{/* <Box w={"70vw"} pb={"2rem"} display={{ base: "flex", lg: "none" }}>
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            color="#AEB8D6"
            fontSize="1.2em"
          >
            <SearchIcon />
          </InputLeftElement>
          <Input
            bgColor={"#F1F2FF"}
            borderRadius={"10px"}
            borderColor={"#E2E9FE"}
            _placeholder={{
              color: "#AEB8D6",
            }}
            placeholder="Search for jobs, candidates here"
          />
        </InputGroup>
      </Box> */}
		</Center>
	)
}

export default AdminNavbar
