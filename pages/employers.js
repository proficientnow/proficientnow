/** @format */

import React from "react";
import Employers from "../components/employers";
import Jobcategories from "../components/jobcategories";
import RequestCall from "../components/requestCallback";
import Recuriter from "../components/recuriter";
import OurEasy from "../components/ourEasy";
import ChatUs from "../components/chatUs";

import heroHomeContent from "../data/static/heroHomeContent.json";
import MainLayout from "../components/layout/mainLayout";
import { OurClients } from "../components/ourClients";

// import heroHomeContent

const employers = () => {
  return (
    <MainLayout>
      <Employers />
      <OurClients />
      <RequestCall />
      <Jobcategories
        content={[
          {
            title: "Information Technology",
            description:
              "As new, cutting–edge technologies arise, partner with ProficientNow – the technology staffing and solutions experts. We provide strategies, innovation, and insights you need to connect with today’s top talent. We’ll deliver growth and value to your business, and offer a full range of flexible, efficient solutions to help you expand into new products and technologies. We connect the candidate to the desired client focusing on the growth of both the client and the candidate. We aim to move forward with the embraced technology and get you the candidate adapted to modernized technologies.",
          },
          {
            title: "Banking & Finance",
            description:
              "Faster, more talented, and easier finance and banking talent solutions. Whether you need talent through contract-based senior-level professionals for ongoing projects, Finance administrators, or permanent hires, our finance and accounting staffing specialists are ready to help. From talent hunters to talented employees, we have opportunities for everyone.",
          },
          {
            title: "Oil, Gas, Power, and Energy",
            description:
              "One of the leading industries and we keenly look forward to prioritizing the talent-hunting opportunities in the given sectors. We believe in being the road map, to connect talent hunters and opportunity seekers. Our adhered focus is on sourcing and providing the talent and service that deliver efficiency and innovation in a safety-focused environment. We commit to providing a knowledgeable, proactive, and attentive recruitment process. ",
          },
          {
            title: "Biotechnology",
            description:
              "We took the initiative to evolve the energy sector by delivering market-leading recruitment services. Renewable energy sources are predicted to account for more than half of global electricity production by 2035. The industry is changing fast, and ProficientNow understands the importance of providing the appropriate talent. We ensure to place the talent in the appropriate sector which counts on there seamless skills and capabilities",
          },
          {
            title: "Telecom",
            description:
              "The telecom industry is growing by leaps and bounds. Telecom industry also plays a vital role in the country’s economy. We efficiently work on understanding the current status, budget, and requirement of the market. We look forward to help thousands of candidates finding the appropriate company, hundreds of clients for the right recruitment. ",
          },
        ]}
        mainTitle={heroHomeContent[0].jobCategories[0].mainTitle}
        mainDescription={heroHomeContent[0].jobCategories[0].mainDescription}
        buttonText={heroHomeContent[0].jobCategories[0].buttonText}
      />
      <Recuriter />
      {/* <OurEasy /> */}
      <ChatUs />
    </MainLayout>
  );
};

export default employers;
