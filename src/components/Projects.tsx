import React, { useEffect } from "react";
import FixedWidthContainer from "./UI/FixedWidthContainer";
import ProjectCard from "./ProjectCard";
import { getProjects } from "@/services/user";
import { Project } from "@/types";

interface ProjectsProps {}

const Projects: React.FC<ProjectsProps> = ({}) => {
  const [projects, setProjects] = React.useState<Project[]>([]);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async (): Promise<void> => {
    try {
      const res = (await getProjects("clavibaldi91")) as Project[];
      setProjects(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <FixedWidthContainer id="projects" className="py-8">
      <div className="max-w-5xl mb-4">
        <h2 className="text-3xl font-semibold">Projects</h2>
      </div>
      <div className="w-full flex flex-col items-center md:flex-row md:justify-start flex-wrap gap-10 justify-center">
        {projects.map((project) => (
          <ProjectCard {...project} key={project.id} />
        ))}
      </div>
    </FixedWidthContainer>
  );
};

export default Projects;
