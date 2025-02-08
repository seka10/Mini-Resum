import React from 'react';
import Image1 from "../../../assets/pro/pro1.png";
import Image2 from "../../../assets/pro/pro3.png";

const DataProjects = [
  {
    id: "Food Restaurant",
    desc: "sleek and modern restaurant website...",
    img: Image1,
    PreviewLinks: "https://resto-x-project.vercel.app/"
  },
  {
    id: "Egyptian Tourism",
    desc: "simple website that offers a quick glimpse...",
    img: Image2,
    PreviewLinks: "https://egypt0mini.netlify.app/"
  },
];

const ProjectsContainer = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-4">
      {DataProjects.map((project) => (
        <div 
          key={project.id} 
          className="bg-slate-200 rounded-xl hover:shadow-2xl shadow-lg overflow-hidden translate-all transition-transform duration-700 hover:scale-105  "
        >
          <img 
            src={project.img} 
            alt={project.id} 
            className="w-full h-40 object-cover"
          />
          <div className="p-6">
            <h3 className="text-md font-bold text-gray-800 mb-2">
              {project.id}
            </h3>
            <p className="text-gray-600 mb-4 text-sm">
              {project.desc}
            </p>
            <a
              href={project.PreviewLinks}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block primary-btn"
            >
              View Project
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectsContainer;