// pages/index.tsx

import React from "react";
import Navbar from "@/components/NavBar";
import Banner from "../components/Banner";
import SkillsCarousel from "@/components/Skills";
import ContactSection from "@/components/ContactSection";
import Projects from "@/components/Projects";

const Home: React.FC = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <Banner />
      <SkillsCarousel />
      <Projects />
      <ContactSection />
    </div>
  );
};

export default Home;
