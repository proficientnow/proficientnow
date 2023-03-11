/** @format */

import { ChakraProvider, theme } from "@chakra-ui/react";
import React from "react";

import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  AccordionItem,
  Box,
  Text,
  Link,
} from "@chakra-ui/react";

const PrivacyHeading = ({ heading, id }) => {
  return (
    <Text
      id={id}
      my={"1rem"}
      fontWeight={"semibold"}
      fontSize={{ lg: "20px", sm: "16px" }}
      color={"#232323"}
    >
      {heading}
    </Text>
  );
};

const PrivacyHeading2 = ({ heading, id }) => {
  return (
    <Text
      id={id}
      my={"0.5rem"}
      fontWeight={"bold"}
      fontSize={{ lg: "16px", sm: "16px" }}
      // color={"#232323"}
      color={"#79797B"}
    >
      {heading}
    </Text>
  );
};

const PrivacyDescription = ({ description }) => {
  return (
    <Text
      my={"1rem"}
      fontWeight={"regular"}
      fontSize={{ lg: "14px", sm: "14px" }}
      lineHeight={"155%"}
      color={"#79797B"}
    >
      {description}
    </Text>
  );
};

const PrivacyHeadingandDescription = ({ heading, description, id }) => {
  return (
    <ul>
      <Text
        id={id}
        fontSize={{ lg: "14px", sm: "14px" }}
        fontWeight={"regular"}
        color={"#79797B"}
        lineHeight={"200%"}
        my={"0.2em"}
      >
        <b>{heading}</b>
        {description}
      </Text>
    </ul>
  );
};
// list PHnD
const ListPHD = ({ heading, description, id }) => {
  return (
    <Box paddingLeft={"20px"}>
      <ul>
        <li>
          <Text
            id={id}
            fontSize={{ lg: "14px", sm: "14px" }}
            fontWeight={"regular"}
            color={"#79797B"}
            lineHeight={"200%"}
            // padding={"5px"}
          >
            <b>{heading}</b>
            {description}
          </Text>
        </li>
      </ul>
    </Box>
  );
};
const LinkPHD = ({ heading, description, id, locater }) => {
  return (
    <Box paddingLeft={"20px"}>
      <ul>
        <li>
          <Text
            id={id}
            fontSize={{ lg: "14px", sm: "14px" }}
            fontWeight={"regular"}
            color={"#79797B"}
            lineHeight={"200%"}
            // padding={"5px"}
          >
            <b>{heading}</b>
            {description}
            <Link color={"blue"}>{locater}</Link>
          </Text>
        </li>
      </ul>
    </Box>
  );
};
const privacypolicy = () => {
  return (
    <ChakraProvider theme={theme}>
      <>
        <Box>
          <Box w={"full"} bgColor={"#E0E8F3"}>
            <Text
              px={{ lg: "6.5rem", sm: "3rem" }}
              py={{ lg: "5rem", sm: "2rem" }}
              fontWeight={"medium"}
              fontSize={{ lg: "38px", sm: "28px" }}
              color={"#020D45"}
            >
              Privacy Policy
            </Text>
          </Box>
          <Box
            bg={"#F6F6F6"}
            pt={"5rem"}
            display={"flex"}
            flexDir={"row"}
            gap={"2rem"}
            justifyContent={"center"}
            alignItems={"start"}
            position={"relative"}
          >
            <Box
              position={"sticky"}
              top="10.7%"
              bgColor={"white"}
              w={"15vw"}
              minH={"80vh"}
              mb={"4.25rem"}
              p={"2rem"}
              borderRadius={"30px"}
              display={{ lg: "flex", sm: "none" }}
              flexDir={"column"}
              justifyContent={"start"}
              alignItems={"center"}
            >
              <Box
                display={"flex"}
                flexDir={"column"}
                justifyContent={"start"}
                alignItems={"start"}
              >
                <Text
                  ml={"2rem"}
                  mt={"2rem"}
                  mb={"2.5rem"}
                  fontWeight={"bold"}
                  fontSize={"16px"}
                  color={"#2B2D33"}
                >
                  On this page
                </Text>
                <Accordion w={"15vw"} allowMultiple allowToggle>
                  <AccordionItem>
                    <AccordionButton>
                      <Box
                        ml={"1rem"}
                        fontWeight={"semibold"}
                        fontSize={"14px"}
                        flex="1"
                        textAlign="left"
                      >
                        Headline
                      </Box>
                      {/* <AccordionIcon /> */}
                    </AccordionButton>
                    <AccordionPanel pb={4}>
                      <Box
                        h={"2.5rem"}
                        p={"1rem"}
                        alignItems={"center"}
                        display={"flex"}
                        justifyContent={"start"}
                        as={Link}
                        href={"#interception"}
                        _hover={{
                          bgColor: "#F5F7FA",
                          textDecoration: "none",
                        }}
                      >
                        <Text
                          fontWeight={"medium"}
                          fontSize={"14px"}
                          color={"#747780"}
                        >
                          Interception
                        </Text>
                      </Box>
                      <Box
                        h={"2.5rem"}
                        p={"1rem"}
                        alignItems={"center"}
                        display={"flex"}
                        justifyContent={"start"}
                        as={Link}
                        href={"#definitions"}
                        _hover={{
                          bgColor: "#F5F7FA",
                          textDecoration: "none",
                        }}
                      >
                        <Text
                          fontWeight={"medium"}
                          fontSize={"14px"}
                          color={"#747780"}
                        >
                          Definitions
                        </Text>
                      </Box>
                      <Box
                        h={"2.5rem"}
                        p={"1rem"}
                        alignItems={"center"}
                        display={"flex"}
                        justifyContent={"start"}
                        as={Link}
                        href={"#DataTypesCollected"}
                        _hover={{
                          bgColor: "#F5F7FA",
                          textDecoration: "none",
                        }}
                      >
                        <Text
                          fontWeight={"medium"}
                          fontSize={"14px"}
                          color={"#747780"}
                        >
                          Data Types Collected
                        </Text>
                      </Box>
                      <Box
                        h={"2.5rem"}
                        p={"1rem"}
                        alignItems={"center"}
                        display={"flex"}
                        justifyContent={"start"}
                        as={Link}
                        href={"#session"}
                        _hover={{
                          bgColor: "#F5F7FA",
                          textDecoration: "none",
                        }}
                      >
                        <Text
                          fontWeight={"medium"}
                          fontSize={"14px"}
                          color={"#747780"}
                        >
                          {/* We use both Session and Persistent Cookies for the
                          purposes set out below: */}
                          Session and Persistent Cookies
                        </Text>
                      </Box>
                      <Box
                        h={"2.5rem"}
                        p={"1rem"}
                        alignItems={"center"}
                        display={"flex"}
                        justifyContent={"start"}
                        as={Link}
                        href={"#Personaldata"}
                        _hover={{
                          bgColor: "#F5F7FA",
                          textDecoration: "none",
                        }}
                      >
                        <Text
                          fontWeight={"medium"}
                          fontSize={"14px"}
                          color={"#747780"}
                        >
                          Use of Your Personal Data
                        </Text>
                      </Box>
                      <Box
                        h={"2.5rem"}
                        p={"1rem"}
                        alignItems={"center"}
                        display={"flex"}
                        justifyContent={"start"}
                        as={Link}
                        href={"#Retention"}
                        _hover={{
                          bgColor: "#F5F7FA",
                          textDecoration: "none",
                        }}
                      >
                        <Text
                          fontWeight={"medium"}
                          fontSize={"14px"}
                          color={"#747780"}
                        >
                          Retention of Your Personal Data
                        </Text>
                      </Box>
                      <Box
                        h={"2.5rem"}
                        p={"1rem"}
                        alignItems={"center"}
                        display={"flex"}
                        justifyContent={"start"}
                        as={Link}
                        href={"#Transfer"}
                        _hover={{
                          bgColor: "#F5F7FA",
                          textDecoration: "none",
                        }}
                      >
                        <Text
                          fontWeight={"medium"}
                          fontSize={"14px"}
                          color={"#747780"}
                        >
                          Transfer of Your Personal Data
                        </Text>
                      </Box>
                      <Box
                        h={"2.5rem"}
                        p={"1rem"}
                        alignItems={"center"}
                        display={"flex"}
                        justifyContent={"start"}
                        as={Link}
                        href={"#Delete"}
                        _hover={{
                          bgColor: "#F5F7FA",
                          textDecoration: "none",
                        }}
                      >
                        <Text
                          fontWeight={"medium"}
                          fontSize={"14px"}
                          color={"#747780"}
                        >
                          Delete of Your Personal Data
                        </Text>
                      </Box>
                      <Box
                        h={"2.5rem"}
                        p={"1rem"}
                        alignItems={"center"}
                        display={"flex"}
                        justifyContent={"start"}
                        as={Link}
                        href={"#Disclosure"}
                        _hover={{
                          bgColor: "#F5F7FA",
                          textDecoration: "none",
                        }}
                      >
                        <Text
                          fontWeight={"medium"}
                          fontSize={"14px"}
                          color={"#747780"}
                        >
                          Disclosure of Your Personal Data
                        </Text>
                      </Box>
                      <Box
                        h={"2.5rem"}
                        p={"1rem"}
                        alignItems={"center"}
                        display={"flex"}
                        justifyContent={"start"}
                        as={Link}
                        href={"#Security"}
                        _hover={{
                          bgColor: "#F5F7FA",
                          textDecoration: "none",
                        }}
                      >
                        <Text
                          fontWeight={"medium"}
                          fontSize={"14px"}
                          color={"#747780"}
                        >
                          Security of Your Personal Data
                        </Text>
                      </Box>
                      <Box
                        h={"2.5rem"}
                        p={"1rem"}
                        alignItems={"center"}
                        display={"flex"}
                        justifyContent={"start"}
                        as={Link}
                        href={"#Childrensprivacy"}
                        _hover={{
                          bgColor: "#F5F7FA",
                          textDecoration: "none",
                        }}
                      >
                        <Text
                          fontWeight={"medium"}
                          fontSize={"14px"}
                          color={"#747780"}
                        >
                          Children's Privacy
                        </Text>
                      </Box>
                      <Box
                        h={"2.5rem"}
                        p={"1rem"}
                        alignItems={"center"}
                        display={"flex"}
                        justifyContent={"start"}
                        as={Link}
                        href={"#Linktoothers"}
                        _hover={{
                          bgColor: "#F5F7FA",
                          textDecoration: "none",
                        }}
                      >
                        <Text
                          fontWeight={"medium"}
                          fontSize={"14px"}
                          color={"#747780"}
                        >
                          Link to Other Website
                        </Text>
                      </Box>
                      <Box
                        h={"2.5rem"}
                        p={"1rem"}
                        alignItems={"center"}
                        display={"flex"}
                        justifyContent={"start"}
                        as={Link}
                        href={"#Changestothisprivacy"}
                        _hover={{
                          bgColor: "#F5F7FA",
                          textDecoration: "none",
                        }}
                      >
                        <Text
                          fontWeight={"medium"}
                          fontSize={"14px"}
                          color={"#747780"}
                        >
                          Changes to this Privacy Policy
                        </Text>
                      </Box>
                      <Box
                        h={"2.5rem"}
                        p={"1rem"}
                        alignItems={"center"}
                        display={"flex"}
                        justifyContent={"start"}
                        as={Link}
                        href={"#Contactus"}
                        _hover={{
                          bgColor: "#F5F7FA",
                          textDecoration: "none",
                        }}
                      >
                        <Text
                          fontWeight={"medium"}
                          fontSize={"14px"}
                          color={"#747780"}
                        >
                          Contact Us
                        </Text>
                      </Box>
                    </AccordionPanel>
                  </AccordionItem>

                  <AccordionItem>
                    <AccordionButton>
                      <Box
                        ml={"1rem"}
                        fontWeight={"semibold"}
                        fontSize={"14px"}
                        flex="1"
                        textAlign="left"
                      >
                        Related Content
                      </Box>
                      {/* <AccordionIcon /> */}
                    </AccordionButton>
                    <AccordionPanel pb={4}>
                      <Box
                        h={"2.5rem"}
                        p={"1rem"}
                        alignItems={"center"}
                        display={"flex"}
                        justifyContent={"start"}
                        as={Link}
                        href={"/termsandconditions"}
                        _hover={{
                          bgColor: "#F5F7FA",
                          textDecoration: "none",
                        }}
                      >
                        <Text
                          fontWeight={"medium"}
                          fontSize={"14px"}
                          color={"#747780"}
                        >
                          Terms and Conditions
                        </Text>
                      </Box>
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              </Box>
            </Box>
            <Box
              mb={"10vh"}
              display={"flex"}
              flexDir={"column"}
              justifyContent={"start"}
              alignItems={"center"}
            >
              <Box
                w={{ lg: "70vw", sm: "80vw" }}
                p={"3rem"}
                bgColor={"white"}
                borderRadius={"30px"}
                display={"flex"}
                flexDir={"column"}
                justifyContent={"center"}
                alignItems={"start"}
              >
                <Text
                  mb={"3rem"}
                  fontWeight={"medium"}
                  fontSize={{ lg: "15px", sm: "14px" }}
                  lineHeight={{ lg: "auto", sm: "167%" }}
                  color={"#595959"}
                >
                  This Privacy Statement describes Our policies and procedures
                  for collecting, using, and disclosing Your information when
                  You use the Service, as well as Your privacy rights and the
                  legal safeguards that protect you. We use your personal data
                  to provide and improve the service. By using the service, you
                  agree to the collection and use of information in accordance
                  with this privacy policy. Interpretation and Definitions
                </Text>
                <PrivacyHeading id={"interception"} heading={"Interception"} />
                <PrivacyHeadingandDescription
                  description={
                    "The words in which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural."
                  }
                />
                <PrivacyHeading id={"definitions"} heading={"Definitions"} />
                <PrivacyHeadingandDescription
                  heading={"Account"}
                  description={
                    " is a one-of-a-kind account created for You to use in order to access our service or parts of our service."
                  }
                />
                <PrivacyHeadingandDescription
                  heading={"Company"}
                  description={` (referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to ProficientNow, 748 Dalton Ln, Bolingbrook, IL 60490.`}
                />
                <PrivacyHeadingandDescription
                  description={`Cookies are small files that a website stores on Your computer, mobile device, or other device and contain information about Your browsing history on that website, among other things.`}
                />
                {/* <Box style={inline}>
                  <PrivacyHeading2 heading={"Illinois, United States "} />
                  <PrivacyDescription
                    description={`is referred to as the country.`}
                  /> */}
                <PrivacyHeadingandDescription
                  heading={"Illinois, United States"}
                  description={` is referred to as the country. `}
                />
                <PrivacyHeadingandDescription
                  heading={"Device"}
                  description={
                    " means any device that can access the service, such as a computer, a cellphone, or a digital tablet."
                  }
                />
                <PrivacyHeadingandDescription
                  heading={"Personal Data"}
                  description={` is any information that relates to an identified or identifiable individual.`}
                />
                <PrivacyHeadingandDescription
                  heading={"Service"}
                  description={` refers to the Website.`}
                />
                <PrivacyHeadingandDescription
                  heading={"Service Provider"}
                  description={
                    " means any natural or legal person who processes the data on behalf of the Company. It refers to third-party companies or individuals employed by the Company to facilitate the Service, to provide the Service on behalf of the Company, to perform services related to the Service or to assist the Company in analyzing how the Service is used."
                  }
                />
                <PrivacyHeadingandDescription
                  heading={"Usage Data "}
                  description={
                    "is data that is automatically collected, either by using the service or by the service infrastructure itself (for example, the duration of a page visit)."
                  }
                />
                <PrivacyHeadingandDescription
                  heading={"Website  "}
                  description={
                    "refers to ProficientNow, accessible from https://proficientnow.com/"
                  }
                />
                <PrivacyHeadingandDescription
                  heading={"You  "}
                  description={
                    "mean the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable."
                  }
                />
                <PrivacyHeadingandDescription
                  description={"Personal Data Collection and Use"}
                />
                <PrivacyHeading
                  id={"DataTypesCollected"}
                  heading={"Data Types Collected"}
                />
                <PrivacyHeading2 heading={"Personal Data"} />
                <PrivacyHeadingandDescription
                  description={
                    "We may ask you to provide us with personally identifiable information that can be used to contact or identify you while using Our service. Personally identifiable information may include, but is not limited to:"
                  }
                />
                <PrivacyHeadingandDescription description={"Email address"} />
                <PrivacyHeadingandDescription
                  description={"First name and last name"}
                />
                <PrivacyHeadingandDescription description={"Usage Data"} />
                <PrivacyHeading2 heading={"Usage Data"} />
                <PrivacyHeadingandDescription
                  description={
                    "When you use the service, Usage Data is automatically collected."
                  }
                />
                <PrivacyHeadingandDescription
                  description={
                    "Usage Data may include the Internet Protocol address (e.g., IP address) of Your Device, browser type, browser version, the pages of our service You visit, the time and date of Your visit, the time spent on those pages, unique device identifiers, and other diagnostic data."
                  }
                />
                <PrivacyHeadingandDescription
                  description={
                    "We may collect certain information automatically when You access the Service via or through a mobile device, including, but not limited to, the type of mobile device You use, your mobile device's unique ID, your mobile device's IP address, your mobile operating system, the type of mobile Internet browser You use, unique device identifiers, and other diagnostic data."
                  }
                />
                <PrivacyHeadingandDescription
                  description={
                    "We may also collect information that Your browser sends whenever You visit our service or use a mobile device to access it."
                  }
                />
                <PrivacyHeading2
                  heading={"Tracking Technologies and Cookies"}
                />
                <PrivacyHeadingandDescription
                  description={
                    "To track activity on our service and store certain information, we use cookies and similar tracking technologies. Beacons, tags, and scripts are tracking technologies that are used to collect and track information in order to improve and analyze Our Service. The technologies We use may include:"
                  }
                />
                <ListPHD
                  heading={"Cookies or Browser Cookies. "}
                  description={
                    "A cookie is a small file placed on Your Device. You can instruct Your browser to refuse all Cookies or to indicate when a Cookie is being sent. However, if You refuse to accept cookies, you may be unable to use certain aspects of our service. Unless you have adjusted Your browser setting so that it will refuse Cookies, our Service may use Cookies."
                  }
                />
                <ListPHD
                  heading={"Web Beacons."}
                  description={
                    "Certain sections of our Service and our emails may contain small electronic files known as web beacons (also referred to as clear gifs, pixel tags, and single-pixel gifs) that permit the Company, for example, to count users who have visited those pages or opened an email and for other related website statistics (for example, recording the popularity of a certain section and verifying system and server integrity)."
                  }
                />
                <PrivacyHeading
                  id={"session"}
                  heading={
                    "We use both Session and Persistent Cookies for the purposes set out below:"
                  }
                />
                <PrivacyHeading2 heading={"Necessary / Essential Cookies"} />
                {/* <PrivacyHeading heading={"Headline 5"} /> */}
                <PrivacyHeadingandDescription
                  description={"Type: Session Cookies"}
                />
                <PrivacyHeadingandDescription
                  description={"Administered by: Us"}
                />
                <PrivacyHeadingandDescription
                  description={
                    "Purpose: These Cookies are essential to provide You with services available through the Website and to enable You to use some of its features. They help to authenticate users and prevent fraudulent use of user accounts. We are unable to provide the services You have requested without these cookies, and we only use these cookies to do so."
                  }
                />
                <PrivacyHeading2
                  heading={"Cookies Policy / Notice Acceptance Cookies"}
                />
                <PrivacyHeadingandDescription
                  description={"Type: Persistent Cookies"}
                />
                <PrivacyHeadingandDescription
                  description={"Administered by: Us"}
                />
                <PrivacyHeadingandDescription
                  description={
                    "Purpose: These Cookies identify if users have accepted the use of cookies on the Website."
                  }
                />
                <PrivacyHeading2 heading={"Functionality Cookies"} />
                <PrivacyHeadingandDescription
                  description={"Type: Persistent Cookies"}
                />
                <PrivacyHeadingandDescription
                  description={"Administered by: Us"}
                />
                <PrivacyHeadingandDescription
                  description={
                    "Purpose: These Cookies allow us to remember choices You make when You use the Website, such as remembering your login details or language preference. The purpose of these Cookies is to provide You with a more personal experience and to avoid You having to re-enter your preferences every time You use the Website."
                  }
                />
                <PrivacyHeadingandDescription
                  description={
                    "For more information about the cookies, we use and your choices regarding cookies, please visit our Cookies Policy or the Cookies section of our Privacy Policy."
                  }
                />
                <PrivacyHeading
                  id={"Personaldata"}
                  heading={"Use of Your Personal Data"}
                />
                <PrivacyHeadingandDescription
                  description={
                    "The Company may use Personal Data for the following purposes:"
                  }
                />
                <PrivacyHeadingandDescription
                  heading={"To provide and maintain our Service,"}
                  description={`including to monitor the usage of our Service.`}
                />
                <PrivacyHeadingandDescription
                  heading={"To manage Your Account: "}
                  description={`to manage Your registration as a user of the Service. The Personal Data You provide can give You access to different functionalities of the Service that are available to You as a registered user.`}
                />
                <PrivacyHeadingandDescription
                  description={
                    "We mean the creation, execution, and fulfilment of the purchase contract for the products, items, or services You have purchased, as well as any other contract You have with Us via the Service."
                  }
                />
                <PrivacyHeadingandDescription
                  heading={"To contact You: "}
                  description={`To contact You by email, telephone calls, SMS, or other equivalent forms of electronic communication, such as a mobile application's push notifications regarding updates or informative communications related to the functionalities, products or contracted services, including the security updates, when necessary or reasonable for their implementation.`}
                />
                <PrivacyHeadingandDescription
                  description={
                    "Unless you have opted not to receive such information, we will send you news, special offers, and general information about other goods, services, and events that we offer that are similar to those you have already purchased or inquired about."
                  }
                />

                <PrivacyHeadingandDescription
                  heading={"To manage Your requests: "}
                  description={`to respond to and manage Your requests to Us.`}
                />
                <PrivacyHeadingandDescription
                  description={
                    "To evaluate or conduct a merger, divestiture, restructuring, reorganization, dissolution, or other sale or transfer of some or all of Our assets, whether as a going concern or as part of bankruptcy, liquidation, or similar proceedings, in which Personal Data held by Us about our service users is among the assets transferred."
                  }
                />
                <PrivacyHeadingandDescription
                  description={
                    "Other uses of Your information: We may use Your information for a variety of purposes, including data analysis, identifying usage trends, determining the effectiveness of our promotional campaigns, and evaluating and improving our Service, products, services, marketing, and your experience."
                  }
                />
                <PrivacyHeadingandDescription
                  description={
                    "We may share Your personal information in the following situations:"
                  }
                />
                <ListPHD
                  heading={"With Service Providers: "}
                  description={
                    "We may share Your personal information with Service Providers to monitor and analyze the use of our Service, to contact You."
                  }
                />
                <ListPHD
                  heading={"For business transfers: "}
                  description={
                    "We may share or transfer Your personal information in connection with, or during negotiations of, any merger, sale of Company assets, financing, or acquisition of all or a portion of Our business to another company."
                  }
                />
                <ListPHD
                  heading={"With Affiliates: "}
                  description={
                    "We may share Your information with Our affiliates, in which case we will require those affiliates to honor this Privacy Policy. Affiliates include Our parent company and any other subsidiaries, joint venture partners or other companies that We control or that are under common control with Us."
                  }
                />
                <ListPHD
                  heading={"With business partners: "}
                  description={
                    "We may share Your information with Our business partners to offer You certain products, services or promotions."
                  }
                />
                <ListPHD
                  heading={"With other users: "}
                  description={
                    "when You share personal information or otherwise interact in the public areas with other users, such information may be viewed by all users and may be publicly distributed outside."
                  }
                />
                <ListPHD
                  heading={"With Your consent: "}
                  description={
                    "We may disclose Your personal information for any other purpose with Your consent."
                  }
                />
                <PrivacyHeading
                  id={"Retention"}
                  heading={"Retention of Your Personal Data"}
                />
                <PrivacyHeadingandDescription
                  description={
                    "The Company will retain Your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use Your Personal Data to the extent necessary to comply with our legal obligations (for example, if we are required to retain your data to comply with applicable laws), resolve disputes, and enforce our legal agreements and policies."
                  }
                />
                <PrivacyHeadingandDescription
                  description={
                    "The company will also keep usage information for internal analysis. Usage Data is typically kept for a shorter period of time, unless it is used to improve the security or functionality of Our Service, or if we are legally required to keep this data for a longer period of time."
                  }
                />
                <PrivacyHeading
                  id={"Transfer"}
                  heading={"Transfer of Your Personal Data"}
                />
                <PrivacyHeadingandDescription
                  description={
                    "Your information, including Personal Data, is processed at the Company's operating offices and in any other places where the parties involved in the processing are located. This means that this information could be transferred to and stored on computers outside of Your state, province, country, or other governmental jurisdiction, where data protection laws may differ from those in Your jurisdiction."
                  }
                />
                <PrivacyHeadingandDescription
                  description={
                    "Your consent to this Privacy Policy followed by Your submission of such information represents Your agreement to that transfer."
                  }
                />
                <PrivacyHeadingandDescription
                  description={
                    "The Company will take all reasonable steps to ensure that Your data is treated securely and in accordance with this Privacy Policy, and no transfer of your personal data to an organization or country will take place unless adequate controls, including the security of your data and other personal information, are in place."
                  }
                />
                <PrivacyHeading
                  id={"Delete"}
                  heading={"Delete of Your Personal Data"}
                />
                <PrivacyHeadingandDescription
                  description={
                    "You have the right to request that We delete or assist you in deleting personal data that We have collected about you."
                  }
                />
                <PrivacyHeadingandDescription
                  description={
                    "Our Service may give You the ability to delete certain information about You from within the Service."
                  }
                />
                <PrivacyHeadingandDescription
                  description={
                    "You can change, amend, or delete Your information at any time by logging in to Your Account, if you have one, and going to the account settings section, where you can manage Your personal information. You may also contact Us to request access to, correct, or delete any personal information that You have provided to Us."
                  }
                />
                <PrivacyHeadingandDescription
                  description={
                    "Please note, however, that We may need to retain certain information when we have a legal obligation or lawful basis to do so."
                  }
                />

                <PrivacyHeading
                  id={"Disclosure"}
                  heading={"Disclosure of Your Personal Data"}
                />
                {/* <PrivacyHeading2 heading={""}/> */}
                <PrivacyHeading2 heading={"Business Transactions"} />
                <PrivacyHeadingandDescription
                  description={
                    "If the Company is involved in a merger, acquisition or asset sale, Your Personal Data may be transferred. Before Your personal data is transferred and becomes subject to a different privacy policy, we will notify You."
                  }
                />
                <PrivacyHeading2 heading={"Law enforcement"} />
                <PrivacyHeadingandDescription
                  description={
                    "Under certain conditions, the Company may be required to disclose Your personal data if required by law or in response to valid requests from public authorities (for example, a court or a government agency)."
                  }
                />
                <PrivacyHeading2 heading={"Other legal requirements"} />
                <PrivacyHeadingandDescription
                  description={
                    "The company may disclose your personal information if it believes in good faith that such action is required to:"
                  }
                />
                <ListPHD description={"Comply with a legal obligation"} />
                <ListPHD
                  description={
                    "Protect and defend the rights or property of the Company"
                  }
                />
                <ListPHD
                  description={
                    "Prevent or investigate possible wrongdoing in connection with the Service"
                  }
                />
                <ListPHD
                  description={
                    "Protect the personal safety of Users of the Service or the public"
                  }
                />
                <ListPHD description={"Protect against legal liability"} />
                <PrivacyHeading
                  id={"Security"}
                  heading={"Security of Your Personal Data"}
                />
                <PrivacyHeadingandDescription
                  description={
                    "We are concerned about the security of Your personal information, but please keep in mind that no method of Internet transmission or electronic storage is 100% secure. While We strive to use commercially acceptable means to protect Your Personal Data, we cannot guarantee its absolute security."
                  }
                />
                <PrivacyHeading
                  id={"Childrensprivacy"}
                  heading={"Children's Privacy"}
                />
                <PrivacyHeadingandDescription
                  description={
                    "Our Service does not address anyone under the age of 13. We do not knowingly collect personally identifiable information from anyone under the age of 13. Please contact Us if You are a parent or guardian and believe Your child has provided Us with personal information. If We discover that We have collected personal information without parental consent from anyone under the age of 13, We will take steps to remove that information from Our servers."
                  }
                />
                <PrivacyHeadingandDescription
                  description={
                    "If We need to rely on consent as a legal basis for processing Your information and Your country requires parental consent, we may need to obtain permission from your parents before collecting and using that information."
                  }
                />
                <PrivacyHeading
                  id={"Linktoothers"}
                  heading={"Links to Other Websites"}
                />
                <PrivacyHeadingandDescription
                  description={
                    "Our Service may include links to websites that are not owned or operated by Us. If You click on a third-party link, you will be directed to that third-party's website. We strongly advise You to review the Privacy Policy of every site You visit."
                  }
                />
                <PrivacyHeadingandDescription
                  description={
                    "We have no control over and assume no responsibility for the content, privacy policies or practices of any third-party sites or services."
                  }
                />
                <PrivacyHeading
                  id={"Changestothisprivacy"}
                  heading={"Changes to this Privacy Policy"}
                />
                <PrivacyHeadingandDescription
                  description={
                    "We may update Our Privacy Policy from time to time. We will notify You of any changes by posting the new Privacy Policy on this page."
                  }
                />
                <PrivacyHeadingandDescription
                  description={`We will notify You via email and/or a prominent notice on Our Service prior to the change becoming effective, and we will update the "Last updated" date at the top of this Privacy Policy.`}
                />
                <PrivacyHeadingandDescription
                  description={
                    "You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page."
                  }
                />
                <PrivacyHeading id={"Contactus"} heading={"Contact Us"} />
                <PrivacyHeadingandDescription
                  description={
                    "If you have any questions about this Privacy Policy, you can contact us:"
                  }
                />
                <LinkPHD
                  description={"By email: "}
                  locater={"Info@proficientnow.com"}
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </>
    </ChakraProvider>
  );
};

export default privacypolicy;
