// pages/index.tsx

import React from "react";
import Navbar from "@/components/NavBar";
import Banner from "../components/Banner";
import SkillsCarousel from "@/components/Skills";
import ContactSection from "@/components/ContactSection";
import Projects from "@/components/Projects";
import SideMenu from "@/components/SideMenu/SideMenu";

const Home: React.FC = () => {
  return (
    <div className="relative">
      {/* <Navbar /> */}
      <SideMenu/>
      <Banner />
    </div>
  );
};

export default Home;
