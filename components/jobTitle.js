import React from 'react'
import { Box, Text, Flex } from "@chakra-ui/react"
import Company from './icons/company.svg'
import Location from './icons/location.svg'
import Salary from './icons/salary.svg'
import Shift from './icons/shift.svg'



const InfoElement = ( { children, text } ) => {
    return (
        <Flex
            gap={ "0.8rem" }
            alignItems={ "center" }
        >
            { children }
            <Text
                fontSize={ "14px" }
                fontWeight={ "normal" }
            >
                { text }
            </Text>
        </Flex>
    )
}


const jobTitle = ( { designation, company, location, salary, shift, designationColor, InfoElementColor, stroke } ) => {
    return (
        <Box maxWidth={ '1500px' } >
            <Box>
                <Text
                    fontSize={ '34px' }
                    color={ designationColor }
                    fontWeight={ '500' }
                >
                    { designation }
                </Text>

                <Flex
                    py={ '1.5rem' }
                    flexDir={ 'row' }
                    gap={ '2.5%' }
                    rowGap={ '0.8rem' }
                    flexWrap={ 'wrap' }
                    color={ InfoElementColor }
                >
                    <InfoElement text={ company } >
                        <Company stroke={ stroke } />
                    </InfoElement>
                    <InfoElement text={ location }>
                        <Location stroke={ stroke } />
                    </InfoElement>
                    <InfoElement text={ salary }>
                        <Salary stroke={ stroke } />
                    </InfoElement>
                    <InfoElement text={ shift }>
                        <Shift stroke={ stroke } />
                    </InfoElement>
                </Flex>
            </Box>


        </Box>
    )
}

export default jobTitle