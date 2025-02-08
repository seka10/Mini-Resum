import React from 'react';
import ServicesBox from '../ServicesBox/ServicesBox';

const Services = () => {
  return (
    <div className='h-full page-shadow bg-white px-10'>
      {/* Heading */}
      <div className="flex flex-col items-center">
        <h1 className=' inline-block text-3xl text-center justify-center font-bold border-b-2 mb-3 pb-1 border-prim'>Services</h1>
        <p className='text-sm text-slate-500 md:w-[80%] mx-auto text-center'>Highly skilled front-end UI and web developer with strong problem-solving skills, seeking to return to work after a period of training and personal development.!</p>
      </div>
      {/* Services Cards */}
      <ServicesBox/> 
    </div>
  )
}

export default Services
