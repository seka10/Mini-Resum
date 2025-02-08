import React from 'react';
import ProjectsContainer from '../ProjectContainer/ProjectContainer';

const Projects = ({ DataProjects }) => {
  return (
    <div>
      <div className="">   
        <div className="flex flex-col items-center">
        <h1 className=' inline-block text-3xl text-center justify-center font-bold border-b-2 mb-3 pb-1 border-prim'>Project</h1>
        <p className='text-sm text-slate-500 md:w-[80%] mx-auto text-center'>A collection of React projects showcasing dynamic, responsive interfaces with a focus on performance and modern design using Vite </p>
      </div>
      </div>
      {/* project Details */}
      <div className="">
        <ProjectsContainer DataProjects={DataProjects}/>
      </div>
    </div>
  )
}

export default Projects
