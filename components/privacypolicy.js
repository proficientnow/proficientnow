import React from 'react'
import { Accordion, AccordionButton, AccordionIcon, AccordionPanel, AccordionItem, Box, Text, Link } from "@chakra-ui/react"


const PrivacyHeading = ( { heading } ) => {
    return (
        <Text my={ "1rem" }  fontWeight={ "semibold" } fontSize={ { lg: "18px", sm: "16px" } } color={ "#232323" }>
            { heading }
        </Text>
    )
}

const PrivacyDescription = ( { description } ) => {
    return (
        <Text my={ "1rem" }  fontWeight={ "regular" } fontSize={ { lg: "12px", sm: "14px" } } lineHeight={ "155%" } color={ "#79797B" }>
            { description }
        </Text>
    )
}
const privacypolicy = () => {
  return (
    <Box>
        <Box w={'full'} bgColor={'#E0E8F3'} >
            <Text px={{lg:'6.5rem', sm:'3rem'}}  py={ { lg: "5rem", sm: "2rem" } } fontWeight={ "medium" } fontSize={ { lg: "38px", sm: "28px" } } color={'#020D45'}>Privacy Policy</Text>
        </Box>
        <Box bg={'#F6F6F6'} pt={'5rem'}  display={ "flex" } flexDir={ "row" } gap={ "2rem" } justifyContent={ "center" } alignItems={ "start" }>
        <Box bgColor={ "white" } w={ "15vw" } minH={ "80vh" } p={ "2rem" }  borderRadius={ "30px" } display={ { lg: "flex", sm: "none" } } flexDir={ "column" } justifyContent={ "start" } alignItems={ "center" } >
                <Box display={ "flex" } flexDir={ "column" } justifyContent={ "start" } alignItems={ "start" }>
                    <Text ml={ "2rem" } mt={ "2rem" } mb={ "2.5rem" }  fontWeight={ "bold" } fontSize={ "16px" } color={ "#2B2D33" }>
                        On this page
                    </Text>
                    <Accordion w={ "15vw" } allowMultiple allowToggle>
                        <AccordionItem >
                            <AccordionButton>
                                <Box ml={ "1rem" }  fontWeight={ "semibold" } fontSize={ "14px" } flex='1' textAlign='left'>
                                    Headline
                                </Box>
                                {/* <AccordionIcon /> */ }
                            </AccordionButton>
                            <AccordionPanel pb={ 4 }>
                                <Box h={ "2.5rem" } p={ "1rem" } alignItems={ "center" } display={ "flex" } justifyContent={ "start" } as={ Link } href={ "/" } _hover={ { bgColor: "#F5F7FA", textDecoration: 'none'} }>
                                    <Text  fontWeight={ "medium" } fontSize={ "14px" } color={ "#747780" }>
                                        Headline 1
                                    </Text>
                                </Box>
                                <Box h={ "2.5rem" } p={ "1rem" } alignItems={ "center" } display={ "flex" } justifyContent={ "start" } as={ Link } href={ "/" } _hover={ { bgColor: "#F5F7FA", textDecoration: 'none' } }>
                                    <Text  fontWeight={ "medium" } fontSize={ "14px" } color={ "#747780" }>
                                        Headline 2
                                    </Text>
                                </Box>
                                <Box h={ "2.5rem" } p={ "1rem" } alignItems={ "center" } display={ "flex" } justifyContent={ "start" } as={ Link } href={ "/" } _hover={ { bgColor: "#F5F7FA", textDecoration: 'none' } }>
                                    <Text  fontWeight={ "medium" } fontSize={ "14px" } color={ "#747780" }>
                                        Headline 3
                                    </Text>
                                </Box>
                                <Box h={ "2.5rem" } p={ "1rem" } alignItems={ "center" } display={ "flex" } justifyContent={ "start" } as={ Link } href={ "/" } _hover={ { bgColor: "#F5F7FA", textDecoration: 'none' } }>
                                    <Text  fontWeight={ "medium" } fontSize={ "14px" } color={ "#747780" }>
                                        Headline 4
                                    </Text>
                                </Box>
                                <Box h={ "2.5rem" } p={ "1rem" } alignItems={ "center" } display={ "flex" } justifyContent={ "start" } as={ Link } href={ "/" } _hover={ { bgColor: "#F5F7FA", textDecoration: 'none' } }>
                                    <Text  fontWeight={ "medium" } fontSize={ "14px" } color={ "#747780" }>
                                        Headline 5
                                    </Text>
                                </Box>
                            </AccordionPanel>
                        </AccordionItem>

                        <AccordionItem>
                            <AccordionButton>
                                <Box ml={ "1rem" }  fontWeight={ "semibold" } fontSize={ "14px" } flex='1' textAlign='left'>
                                    Related Content
                                </Box>
                                {/* <AccordionIcon /> */ }
                            </AccordionButton>
                            <AccordionPanel pb={ 4 }>
                                <Box h={ "2.5rem" } p={ "1rem" } alignItems={ "center" } display={ "flex" } justifyContent={ "start" } as={ Link } href={ "/" } _hover={ { bgColor: "#F5F7FA", textDecoration: 'none' } }>
                                    <Text  fontWeight={ "medium" } fontSize={ "14px" } color={ "#747780" }>
                                        Terms and Conditions
                                    </Text>
                                </Box>
                            </AccordionPanel>
                        </AccordionItem>
                    </Accordion>
                </Box>
            </Box>
            <Box mb={ "10vh" } display={ "flex" } flexDir={ "column" } justifyContent={ "start" } alignItems={ "center" }>
                <Box w={ { lg: "70vw", sm: "80vw" } } p={ "3rem" } bgColor={ "white" } borderRadius={ "30px" } display={ "flex" } flexDir={ "column" } justifyContent={ "center" } alignItems={ "start" }>
                    <Text mb={ "3rem" }  fontWeight={ "medium" } fontSize={ { lg: "15px", sm: "14px" } } lineHeight={ { lg: "auto", sm: "167%" } } color={ "#595959" } >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
                        scelerisque sit cras arcu quam nunc pulvinar elit suspendisse. Arcu vitae eu aliquet et,
                        tempus dictumst.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Urna, scelerisque sit cras arcu quam nunc pulvinar elit suspendisse.
                        Arcu vitae eu aliquet et, tempus dictumst.
                    </Text>
                    <PrivacyHeading heading={ "Headline 1" } />
                    <PrivacyDescription description={ "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed semper nisl nulla habitant aliquam. Vulputate posuere non ullamcorper aliquam sed pretium fusce eget risus. Mauris egestas risus feugiat urna, blandit faucibus fermentum platea gravida. Eget varius nascetur mauris porttitor suspendisse praesent est. Diam nisl magnis massa dignissim volutpat. Placerat mauris suspendisse ut sapien rhoncus accumsan pharetra massa cursus. At egestas id amet donec cursus. Morbi vestibulum, diam mattis vestibulum, lorem sed. Eros, mi quisque integer purus scelerisque dui. At arcu et arcu, semper ut mollis. Lacus, nulla lacus enim venenatis a. Porttitor id tempor nam tellus orci, cras a. In lectus pellentesque dictum enim imperdiet diam convallis aliquam, quis. Eu interdum nunc morbi ac." } />

                    <PrivacyHeading heading={ "Headline 2" } />
                    <PrivacyDescription description={ "Risus mollis odio vitae faucibus quisque. Feugiat a duis magnis cum morbi in elit proin. Viverra sed ipsum elit quis quisque. Neque turpis pellentesque tortor, risus tristique amet. Vel quis ornare quam diam, elementum tincidunt iaculis facilisis. Aliquam mattis risus ut purus at habitasse sed. Magna tincidunt magna egestas orci gravida integer libero." } />

                    <PrivacyHeading heading={ "Headline 3" } />
                    <PrivacyDescription description={ "Urna vivamus vestibulum risus eget facilisi. Eu enim mus sit consectetur. Et aliquam porta in pharetra at urna habitasse amet in. Pharetra in lorem diam varius massa pellentesque quis in elit. Enim nulla id elit vitae molestie mi sed porttitor risus." } />

                    <PrivacyHeading heading={ "Headline 4" } />
                    <PrivacyDescription description={ "Nisl tellus mattis id adipiscing gravida nec enim magna. Odio consequat maecenas neque integer sagittis convallis. Non consectetur suspendisse aliquam et, adipiscing. Quis augue dictum euismod eget aliquam purus neque. Praesent non turpis ut id. A quis dignissim ut elementum mattis proin quis. Amet, eget cursus ullamcorper venenatis amet. Proin id blandit magna in aenean ligula eu velit mauris. Eget et vestibulum amet faucibus viverra aliquam ac lectus. Urna pretium consectetur et mauris, diam lorem. Suspendisse consectetur in amet tristique arcu, enim eu vehicula egestas." } />

                    <PrivacyHeading heading={ "Headline 5" } />
                    <PrivacyDescription description={ "Nam elementum varius eu rhoncus eget ultricies eget. Mi praesent netus enim magna auctor nisl ac. Commodo potenti eu, dignissim consequat orci nulla in sagittis blandit. Tincidunt vitae, diam non est sed eget. Amet, rhoncus convallis faucibus quam neque massa aliquam. Ultrices erat tempus, ut viverra odio mauris. Risus, vitae nunc at suspendisse fermentum non." } />
                </Box>
            </Box>
        </Box>
    </Box>
  )
}

export default privacypolicy