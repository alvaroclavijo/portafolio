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
    <div className="bg-white shadow-lg rounded-lg overflow-hidden m-4 w-64">
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-40 object-cover object-center"
      />
      <div className="p-4">
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
        <div className="flex justify-between">
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
