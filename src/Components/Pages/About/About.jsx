import React from 'react'
import {
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaWhatsapp,
  FaTwitter,
  FaGithub,
} from "react-icons/fa";

const About = () => {
  return (
    <div>
      <div className="flex flex-col items-center">
        <h1 className=' inline-block text-3xl text-center justify-center font-bold border-b-2 mb-3 pb-1 border-prim'>About Me</h1>
        <p className='text-sm text-slate-500 md:w-[80%] mx-auto text-center'>Highly skilled front-end UI and web developer with strong problem-solving skills, seeking to return to work after a period of training and personal development.!</p>
      </div>
      {/* Details sec */}
      <div className="mt-1 text-slate-500 p-4">
        <p>Professional with 2 years of experience in developing interactive web applications, proficient in HTML5, CSS3, JavaScript, and React JS. Contributed to projects that improved user interaction, functionality, maintainable code, and site speed. Seeking a position in a reputable organization to utilize and develop skills.</p>
        <br />
        <p className=' -translate-y-4'> Worked as a freelancer with experience in IT support at a real estate investment firm and as a junior programmer at a software development company. Responsibilities included analyzing customer data, developing dashboards, and streamlining data entry processes. Skills include brand identity design, software performance optimization, and interactive web application design.</p>
        {/* social links  */}
        <div className="flex gap-4 items-center mt-5 translate-x-4 text-center justify-center -translate-y-4">
          <a
            className="hover:scale-125 scale social-btn "
            href="https://www.instagram.com/Sayed_X_ayman"
            aria-label="Instagram"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="text-3xl" />
          </a>
          <a
            className="hover:scale-125 scale social-btn"
            href="https://www.facebook.com/XSeka10X"
            aria-label="Facebook"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className="text-3xl" />
          </a>
          <a
            className="hover:scale-125 scale social-btn"
            href="https://linkedin.com/in/xseka10x"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-3xl" />
          </a>
          <a
            className="hover:scale-125 scale social-btn"
            href="https://api.whatsapp.com/send/?phone=201095463272"
            aria-label="WhatsApp"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp className="text-3xl" />
          </a>
          <a
            className="hover:scale-125 scale social-btn"
            href="https://x.com/sayedayman92?mx=2"
            aria-label="X Twitter"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="text-3xl" />
          </a>
          <a
            className="hover:scale-125 scale social-btn"
            href="https://github.com/seka10"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-3xl " />
          </a>
        </div>
        {/* buttons Links */}
        <div className="flex space-x-3 mt-4 text-center items-center justify-center translate-x-4 -translate-y-5">
          <a href="https://seka10.github.io/Portfolio-V3.0/" className='primary-btn text-sm' target="_blank"
            rel="noopener noreferrer">Download Resume</a>
          <a href="" className='secoundry-btn text-sm'> Contact me</a>

        </div>
      </div>
    </div>
  )
}

export default About
