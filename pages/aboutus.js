/** @format */

import Navbar from "../components/sections/navbar";
import AboutUsComponent from "../components/aboutus";
import OurStory from "../components/ourstory";
import OurTeam from "../components/ourTeam";
import MainLayout from "../components/layout/mainLayout";

const Aboutus = () => {
  return (
    <MainLayout>
      <AboutUsComponent />
      <OurStory />
      {/* <OurTeam /> */}
    </MainLayout>
  );
};

export default Aboutus;
