
import React from 'react';
import myPic from '../../../assets/portrait.png';
import port from '../../../assets/port.gif';

const FirstPage = () => {
  return (
    <div className='h-full'>
      <main className='h-full w-full'>
        <div className="px-10 space-y-4">
          {/* Image-container */}
          <div className="">
            <img src={port} alt="" className='w-[250px] -translate-y-14 duration-500 translate-all mx-auto' />
            <img src={myPic} alt="" className='w-[220px] -translate-y-[250px] duration-500 translate-all mx-auto hover:scale-110 z-10' />
          </div>
          {/* Text-container */}
          <div className="text-center -translate-y-[260px] ">
            <div className="space-y-2">
            <p className='uppercase'> Hi There </p>
            <p className='text-4xl md:text-5xl font-bold text-black/80 -translate-y-3'> I'm Sayed Ayman </p>
            <p className='text-black/70 text-3xl'> UI/UX Devoloper </p>
            <p className='text-black/60 '>In the realm of user interface design, every pixel serves a purpose. A well-crafted UI goes beyond visual appeal; It ensures intuitive navigation, accessibility, and responsiveness across devices. As a UX designer, your role anticipate their needs, and deliver solutions that are both functional and delightful For all users.</p>
            </div>
            <div className="">
         <a className='inline-block primary-btn -translate-y-2' href="mailto:sayed.ayman900900@gmail.com">Hire Me </a>
         </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default FirstPage