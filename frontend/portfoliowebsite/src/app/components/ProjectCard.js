import React from "react";

const ProjectCard = ({ title, description, link }) => {
  return (
    <div className="border rounded-lg shadow-lg p-4 bg-white hover:shadow-xl transition duration-200">
      <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm mb-4">{description}</p>
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          View Project →
        </a>
      )}
    </div>
  );
};

export default ProjectCard;
