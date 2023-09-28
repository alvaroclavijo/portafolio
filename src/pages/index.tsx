// pages/index.tsx

import React from "react";
import Navbar from "@/components/NavBar";
import Banner from "../components/Banner";
import SkillsCarousel from "@/components/Skills";
import ProjectCard from "../components/ProjectCard";
import ContactSection from "@/components/ContactSection";

const projects = [
  {
    title: "Project 1",
    imageUrl: "/images/project1.jpg",
    technologies: ["React", "Node.js", "MongoDB"],
    projectUrl: "https://example.com/project1",
    githubUrl: "https://github.com/yourusername/project1",
  },
  // Add more projects here...
];

const Home: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <SkillsCarousel />

      {/* Projects Section */}
      <section id="projects" className="bg-gray-100 py-8">
        <div className="max-w-5xl mx-auto mb-4 pl-8">
          <h2 className="text-3xl font-semibold">Projects</h2>
        </div>
        <div className="max-w-5xl mx-auto flex flex-wrap justify-center">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </section>
      <ContactSection />

      {/* Add other sections (e.g., Contact) as needed */}
    </div>
  );
};

export default Home;
