import Image from "next/image";
import React from "react";

interface ProjectCardProps {
  title: string;
  imageUrl: string;
  technologies: string[];
  projectUrl: string;
  githubUrl: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  imageUrl,
  technologies,
  projectUrl,
  githubUrl,
}) => {
  return (
    <div className="relative bg-white shadow-lg rounded-lg overflow-hidden flex flex-col aspect-[2/3] w-full md:w-[45%] lg:w-[30%]">
      <Image
        width={300}
        height={200}
        src={imageUrl}
        alt={title}
        className="w-full aspect-[2/1.5] object-cover object-center"
      />
      <div className="p-4 flex-1">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <div className="flex flex-wrap mb-2">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="bg-gray-300 text-gray-700 rounded-full px-2 py-1 text-sm mr-2 mb-2"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="absolute bottom-5 w-[90%] flex justify-between">
          <a
            href={projectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            View Project
          </a>
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
