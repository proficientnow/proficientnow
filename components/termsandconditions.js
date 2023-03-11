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

const TermsHeading2 = ({ heading, id }) => {
  return (
    <Text
      id={id}
      my={"0.5rem"}
      fontWeight={"bold"}
      fontSize={{ lg: "16px", sm: "16px" }}
      color={"#79797B"}
    >
      {heading}
    </Text>
  );
};

const TermsHeading = ({ heading, id }) => {
  return (
    <Text
      id={id}
      my={"1rem"}
      fontWeight={"semibold"}
      fontSize={{ lg: "18px", sm: "16px" }}
      color={"#232323"}
    >
      {heading}
    </Text>
  );
};

const TermsDescription = ({ description }) => {
  return (
    <Text
      my={"1rem"}
      fontWeight={"regular"}
      fontSize={{ lg: "12px", sm: "14px" }}
      lineHeight={"155%"}
      color={"#79797B"}
    >
      {description}
    </Text>
  );
};
const TermsHeadingandDescription = ({ heading, description, id }) => {
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

const ListPHD = ({ heading, description, id, locater }) => {
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
export const TermsandConditions = () => {
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
              Terms And Conditions
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
                        href={"#InterpretationandDefinitions"}
                        _hover={{ bgColor: "#F5F7FA", textDecoration: "none" }}
                      >
                        <Text
                          fontWeight={"medium"}
                          fontSize={"14px"}
                          color={"#747780"}
                        >
                          Interpretation and Definitions
                        </Text>
                      </Box>
                      <Box
                        h={"2.5rem"}
                        p={"1rem"}
                        alignItems={"center"}
                        display={"flex"}
                        justifyContent={"start"}
                        as={Link}
                        href={"#Acknowledgment"}
                        _hover={{ bgColor: "#F5F7FA", textDecoration: "none" }}
                      >
                        <Text
                          fontWeight={"medium"}
                          fontSize={"14px"}
                          color={"#747780"}
                        >
                          Acknowledgment
                        </Text>
                      </Box>
                      <Box
                        h={"2.5rem"}
                        p={"1rem"}
                        alignItems={"center"}
                        display={"flex"}
                        justifyContent={"start"}
                        as={Link}
                        href={"#LinkstoOtherWebsites"}
                        _hover={{ bgColor: "#F5F7FA", textDecoration: "none" }}
                      >
                        <Text
                          fontWeight={"medium"}
                          fontSize={"14px"}
                          color={"#747780"}
                        >
                          Links to Other Websites
                        </Text>
                      </Box>
                      <Box
                        h={"2.5rem"}
                        p={"1rem"}
                        alignItems={"center"}
                        display={"flex"}
                        justifyContent={"start"}
                        as={Link}
                        href={"#Termination"}
                        _hover={{ bgColor: "#F5F7FA", textDecoration: "none" }}
                      >
                        <Text
                          fontWeight={"medium"}
                          fontSize={"14px"}
                          color={"#747780"}
                        >
                          Termination
                        </Text>
                      </Box>
                      <Box
                        h={"2.5rem"}
                        p={"1rem"}
                        alignItems={"center"}
                        display={"flex"}
                        justifyContent={"start"}
                        as={Link}
                        href={"#LimitationofLiability"}
                        _hover={{ bgColor: "#F5F7FA", textDecoration: "none" }}
                      >
                        <Text
                          fontWeight={"medium"}
                          fontSize={"14px"}
                          color={"#747780"}
                        >
                          Limitation of Liability
                        </Text>
                      </Box>
                      <Box
                        h={"2.5rem"}
                        p={"1rem"}
                        alignItems={"center"}
                        display={"flex"}
                        justifyContent={"start"}
                        as={Link}
                        href={"#Disclaimer"}
                        _hover={{ bgColor: "#F5F7FA", textDecoration: "none" }}
                      >
                        <Text
                          fontWeight={"medium"}
                          fontSize={"14px"}
                          color={"#747780"}
                        >
                          "AS IS" and "AS AVAILABLE" Disclaimer
                        </Text>
                      </Box>
                      <Box
                        h={"2.5rem"}
                        p={"1rem"}
                        alignItems={"center"}
                        display={"flex"}
                        justifyContent={"start"}
                        as={Link}
                        href={"#GoverningLaw"}
                        _hover={{ bgColor: "#F5F7FA", textDecoration: "none" }}
                      >
                        <Text
                          fontWeight={"medium"}
                          fontSize={"14px"}
                          color={"#747780"}
                        >
                          Governing Law
                        </Text>
                      </Box>
                      <Box
                        h={"2.5rem"}
                        p={"1rem"}
                        alignItems={"center"}
                        display={"flex"}
                        justifyContent={"start"}
                        as={Link}
                        href={"#DisputesResolution"}
                        _hover={{ bgColor: "#F5F7FA", textDecoration: "none" }}
                      >
                        <Text
                          fontWeight={"medium"}
                          fontSize={"14px"}
                          color={"#747780"}
                        >
                          Disputes Resolution
                        </Text>
                      </Box>
                      <Box
                        h={"2.5rem"}
                        p={"1rem"}
                        alignItems={"center"}
                        display={"flex"}
                        justifyContent={"start"}
                        as={Link}
                        href={"#Severability"}
                        _hover={{ bgColor: "#F5F7FA", textDecoration: "none" }}
                      >
                        <Text
                          fontWeight={"medium"}
                          fontSize={"14px"}
                          color={"#747780"}
                        >
                          Severability
                        </Text>
                      </Box>
                      <Box
                        h={"2.5rem"}
                        p={"1rem"}
                        alignItems={"center"}
                        display={"flex"}
                        justifyContent={"start"}
                        as={Link}
                        href={"#Waiver"}
                        _hover={{ bgColor: "#F5F7FA", textDecoration: "none" }}
                      >
                        <Text
                          fontWeight={"medium"}
                          fontSize={"14px"}
                          color={"#747780"}
                        >
                          Waiver
                        </Text>
                      </Box>
                      <Box
                        h={"2.5rem"}
                        p={"1rem"}
                        alignItems={"center"}
                        display={"flex"}
                        justifyContent={"start"}
                        as={Link}
                        href={"#TranslationInterpretation"}
                        _hover={{ bgColor: "#F5F7FA", textDecoration: "none" }}
                      >
                        <Text
                          fontWeight={"medium"}
                          fontSize={"14px"}
                          color={"#747780"}
                        >
                          Translation Interpretation
                        </Text>
                      </Box>
                      <Box
                        h={"2.5rem"}
                        p={"1rem"}
                        alignItems={"center"}
                        display={"flex"}
                        justifyContent={"start"}
                        as={Link}
                        href={"#ChangestotheseTermsandConditions"}
                        _hover={{ bgColor: "#F5F7FA", textDecoration: "none" }}
                      >
                        <Text
                          fontWeight={"medium"}
                          fontSize={"14px"}
                          color={"#747780"}
                        >
                          Changes to these Terms and Conditions
                        </Text>
                      </Box>
                      <Box
                        h={"2.5rem"}
                        p={"1rem"}
                        alignItems={"center"}
                        display={"flex"}
                        justifyContent={"start"}
                        as={Link}
                        href={"#Contact Us"}
                        _hover={{ bgColor: "#F5F7FA", textDecoration: "none" }}
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
                        href={"/privacypolicy"}
                        _hover={{ bgColor: "#F5F7FA", textDecoration: "none" }}
                      >
                        <Text
                          fontWeight={"medium"}
                          fontSize={"14px"}
                          color={"#747780"}
                        >
                          Privacy Policy
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
                  fontWeight={"bold"}
                  fontSize={{ lg: "15px", sm: "14px" }}
                  lineHeight={{ lg: "auto", sm: "167%" }}
                  color={"#595959"}
                >
                  Please read these terms and conditions carefully before using
                  our service.
                </Text>
                {/* <TermsHeading heading={""}/> */}
                {/* <TermsHeading2 heading={""}/> */}
                {/* <TermsHeadingandDescription heading={""} description={``} /> */}

                <TermsHeading
                  id={"InterpretationandDefinitions"}
                  heading={"Interpretation and Definitions"}
                />
                <TermsHeading2 heading={"Interpretation"} />
                <TermsHeadingandDescription
                  description={`The words in which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in the singular or the plural.`}
                />

                <TermsHeading2 heading={"Definitions"} />
                <TermsHeadingandDescription
                  description={"In accordance with these Terms and Conditions:"}
                />
                <TermsHeadingandDescription
                  heading={"Affiliate "}
                  description={`means an entity that controls, is controlled by, or is under common control with a party, where "control" means ownership of 50% or more of the shares, equity interests, or other securities entitled to vote for the election of directors or other managing authorities.`}
                />
                <TermsHeadingandDescription
                  heading={"Country "}
                  description={`refers to: Illinois, United States`}
                />
                <TermsHeadingandDescription
                  heading={"Company "}
                  description={`(referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to ProficientNow, 748 Dalton Ln, Bolingbrook, IL 60490.`}
                />
                <TermsHeadingandDescription
                  heading={"Device "}
                  description={`means any device that can access the service, such as a computer, a cellphone, or a digital tablet.`}
                />
                <TermsHeadingandDescription
                  heading={"Service "}
                  description={`refers to the website.`}
                />

                <TermsHeading2
                  heading={`Terms and Conditions (also known as "Terms") refer to the Terms and Conditions that constitute the entire agreement between You and the Company regarding the use of the service.`}
                />
                <TermsHeadingandDescription
                  heading={"Third-party Social Media Service "}
                  description={`means any services or content (including data, information, products, or services) provided by a third-party that may be displayed, included, or made available by the service.`}
                />
                <TermsHeadingandDescription
                  heading={"Website "}
                  description={`refers to ProficientNow, accessible at https://www.proficientnow.com/`}
                />
                <TermsHeadingandDescription
                  heading={"You "}
                  description={`mean the individual accessing or using the service, or the company, or other legal entity on behalf of which such an individual is accessing or using the service, as applicable.`}
                />

                <TermsHeading
                  heading={"Acknowledgment"}
                  id={"Acknowledgment"}
                />
                <TermsHeadingandDescription
                  description={`These are the terms and conditions governing the use of this service and the agreement that operates between you and the company. These Terms and Conditions outline all users' rights and obligations when using the service.`}
                />
                <TermsHeadingandDescription
                  description={`Your access to and use of the services are conditioned on Your acceptance of and compliance with these Terms and Conditions. These Terms and Conditions apply to all visitors, users, and others who access or use the Service.`}
                />
                <TermsHeadingandDescription
                  description={`By accessing or using the service, you agree to be bound by these Terms and Conditions. You may not use the Service if You disagree with any part of these Terms and Conditions.`}
                />
                <TermsHeadingandDescription
                  description={`You represent that you are over the age of 18. The Company does not permit those under 18 to use the Service.`}
                />
                <TermsHeadingandDescription
                  description={`Your access to and use of the Service is also conditioned on Your acceptance of and compliance with the Privacy Policy of the Company. Our Privacy Policy explains Our policies and procedures for collecting, using, and disclosing personal information when You use the app or website, as well as Your privacy rights and how the law protects you. Please read our Privacy Policy carefully before using Our Service.`}
                />

                <TermsHeading
                  heading={"Links to Other Websites"}
                  id={"LinkstoOtherWebsites"}
                />
                <TermsHeadingandDescription
                  description={`Our Service may contain links to third-party web sites or services that are not owned or controlled by the Company.`}
                />
                <TermsHeadingandDescription
                  description={`The Company has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third-party web sites or services. You further acknowledge and agree that the Company shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods, or services available on or through any such web sites or services.`}
                />
                <TermsHeadingandDescription
                  description={`We strongly recommend that You read the terms and conditions as well as the privacy policies of any third-party web sites or services that You visit.`}
                />
                {/* <TermsHeadingandDescription  description={``} /> */}

                <TermsHeading heading={"Termination"} id={"Termination"} />
                <TermsHeadingandDescription
                  description={`We reserve the right to terminate or suspend Your access at any time and for any reason, including but not limited to violations of these Terms and Conditions.`}
                />
                <TermsHeadingandDescription
                  description={`Upon termination, your right to use the Service will cease immediately.`}
                />
                <TermsHeading
                  heading={"Limitation of Liability"}
                  id={"LimitationofLiability"}
                />
                <TermsHeadingandDescription
                  description={`Regardless of any damages You may incur, the Company's and any of its suppliers' entire liability under any provision of these Terms, and Your sole remedy for all of the foregoing, shall be limited to the amount actually paid by You through the Service, or $100 USD if You haven't purchased anything through the Service.`}
                />
                <TermsHeadingandDescription
                  description={`To the maximum extent permitted by applicable law, in no event shall the Company or its suppliers be liable for any special, incidental, indirect, or consequential damages whatsoever (including, but not limited to, damages for loss of profits, loss of data or other information, business interruption, personal injury, loss of privacy arising out of or in any way related to the use of or inability to use the Service, third-party software and/or third-party hardware used with the Service, or otherwise in connection with any provision of these terms), even if the Company or any supplier has been advised of the possibility of such damages and even if the remedy fails of its essential purpose.`}
                />
                <TermsHeadingandDescription
                  description={`Some states do not allow the exclusion of implied warranties or the limitation of liability for incidental or consequential damages, which means that some of the above limitations may not apply. In these states, each party's liability will be limited to the greatest extent permitted by law.`}
                />
                <TermsHeading
                  id={"Disclaimer"}
                  heading={`"AS IS" and "AS AVAILABLE" Disclaimer`}
                />
                <TermsHeadingandDescription
                  description={`The Service is provided to You "AS IS" and "AS AVAILABLE," with all faults and defects, and without any warranty. To the maximum extent permitted under applicable law, the Company, on its own behalf and on behalf of its Affiliates and its and their respective licensors and service providers, expressly disclaims all warranties, whether express, implied, statutory, or otherwise, with respect to the Service, including all implied warranties of merchantability, fitness for a particular purpose, title, and non-infringement, and warranties that may arise out of course of dealing, course of performance, usage, or trade practice. Without limiting the foregoing, the Company makes no warranty, undertaking, or representation that the service will meet Your requirements, achieve any intended results, be compatible with or work with any other software, applications, systems, or services, operate without interruption, meet any performance or reliability standards, be error-free, or that any errors or defects can or will be corrected.`}
                />
                <TermsHeadingandDescription
                  description={`Without limiting the foregoing, neither the Company nor any of the company's providers makes any representation or warranty of any kind, express or implied: (i) as to the operation or availability of the Service, or the information, content, and materials or products included thereon; (ii) that the Service will be uninterrupted or error-free; (iii) as to the accuracy, reliability, or currency of any information or content provided through the Service; or (iv) that the Service, its servers, the content, or e-mails sent from or on behalf of the Company are free of viruses, scripts, Trojan horses, worms, malware, timebombs, or other harmful components.`}
                />
                <TermsHeadingandDescription
                  description={`Because some jurisdictions do not permit the exclusion of certain types of warranties or limitations on a consumer's applicable statutory rights, some or all of the above exclusions and limitations may not apply to You. But in such a case the exclusions and limitations set forth in this section shall be applied to the greatest extent enforceable under applicable law.`}
                />
                <TermsHeading heading={"Governing Law"} id={"GoverningLaw"} />
                <TermsHeadingandDescription
                  description={`These terms and Your use of the service will be governed by the laws of the country, excluding its conflict of laws rules. Your use of the application may also be subject to other local, state, national, or international laws.`}
                />
                <TermsHeading
                  heading={"Disputes Resolution"}
                  id={"DisputesResolution"}
                />
                <TermsHeadingandDescription
                  description={`If You have a question or a complaint about the Service, you agree to first try to resolve it informally by contacting the company.`}
                />
                <TermsHeading2 heading={"For European Union (EU) Users"} />
                <TermsHeadingandDescription
                  description={
                    "If You are a European Union consumer, you will benefit from any mandatory provisions of the law of the country in which you are resident in."
                  }
                />
                <TermsHeading2 heading={"United States Legal Compliance"} />
                <TermsHeadingandDescription
                  description={`You represent and warrant that (i) You are not located in a country that is subject to the United States government embargo, or that has been designated by the United States government as a "terrorist supporting" country, and (ii) You are not listed on any United States government list of prohibited or restricted parties.`}
                />
                <TermsHeading heading={"Severability"} id={"Severability"} />
                <TermsHeadingandDescription
                  description={
                    "If any provision of these Terms is held to be unenforceable or invalid, such provision will be changed and interpreted to accomplish the objectives of such provision to the greatest extent possible under applicable law, and the remaining provisions will continue in full force and effect."
                  }
                />
                <TermsHeading heading={"Waiver"} id={"Waiver"} />
                <TermsHeadingandDescription
                  description={
                    "Except as provided herein, the failure to exercise a right or to require performance of an obligation under these Terms shall not affect a party's ability to exercise such right or require such performance at any time thereafter, nor shall the waiver of a breach constitute a waiver of any subsequent breach."
                  }
                />
                <TermsHeading
                  heading={"Translation Interpretation"}
                  id={"TranslationInterpretation"}
                />
                <TermsHeadingandDescription
                  description={
                    "These Terms and Conditions may have been translated if We made them available to You through our service. You agree that the original English text shall prevail in the case of a dispute."
                  }
                />
                <TermsHeading
                  heading={"Changes to these Terms and Conditions"}
                  id={"ChangestotheseTermsandConditions"}
                />
                <TermsHeadingandDescription
                  description={
                    "We reserve the right to change or replace these Terms at any time, at our sole discretion. If a revision is material, we will make reasonable efforts to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at Our sole discretion."
                  }
                />
                <TermsHeadingandDescription
                  description={
                    "You agree to be bound by the revised terms if you continue to access or use Our Service after the revisions become effective. If You do not agree to the new terms in their entirety or in part, please discontinue use of the website and service."
                  }
                />
                <TermsHeading heading={"Contact Us"} id={"Contact Us"} />
                <TermsHeadingandDescription
                  description={
                    "If you have any questions about these Terms and Conditions, you can contact us:"
                  }
                />
                <ListPHD
                  description={"By email: "}
                  locater={"info@proficientnow.com"}
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </>
    </ChakraProvider>
  );
};
