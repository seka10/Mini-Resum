import React from 'react';
import Img1 from "../../../assets/pro/pro4.png";
import Img2 from "../../../assets/pro/pro2.png";

const ProjectData = [
  {
    id: "E-Commercial Website",
    desc: "modern e-commerce website designed for a seamless shopping experience...",
    img: Img2,
    PreviewLinks: "https://online-e-store007.netlify.app/"
  },
  {
    id: "Online Computer Shopping",
    desc: "dynamic and modern website designed to showcase creative projects...",
    img: Img1,
    PreviewLinks: "https://mega-frame.vercel.app/"
  },
];

const Projects = () => {
  return (
    <div className="container mx-auto ">
      <div className="flex flex-col items-center mb-12">
        <h1 className='inline-block text-3xl text-center font-bold border-b-2 mb-3 pb-1 border-prim'>
          Projects
        </h1>
        <p className='text-sm text-slate-500 md:w-[80%] mx-auto text-center'>
          My projects involve developing modern web applications that deliver exceptional 
          and user-friendly experiences. Leveraging the power of React, I create interactive, 
          high-performance, and scalable user interfaces!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-4 -translate-y-14 ">
        {ProjectData.map((project) => (
          <div 
            key={project.id} 
            className="bg-slate-200 rounded-xl hover:shadow-2xl shadow-lg overflow-hidden translate-all transition-transform duration-700 hover:scale-105  ">
            <img 
              src={project.img} 
              alt={project.id} 
              className="w-full h-[155px] object-cover"
            />
            <div className="p-6">
              <h3 className="text-md font-bold text-gray-800">
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
    </div>
  );
};

export default Projects;