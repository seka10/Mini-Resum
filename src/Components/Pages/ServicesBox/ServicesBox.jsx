import React from 'react';
import pic1 from '../../../assets/Materials/pic1.jpg';
import pic2 from '../../../assets/Materials/pic2.jpg';
import pic3 from '../../../assets/Materials/pic3.jpg';
import pic4 from '../../../assets/Materials/pic4.jpg';
import { AiFillLayout } from "react-icons/ai";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { HiMiniComputerDesktop } from "react-icons/hi2";
import { MdSecurity } from "react-icons/md";

const Services = [
  {
    Name: "UI/UX Research",
    desc: "i focuses on understanding user behaviors, needs, and motivations through observation techniques, analysis, and other user's feedback methodologies.",
    img: pic1,
    icon: <AiFillLayout className="text-4xl" />,
    bgColor: "bg-blue-800/70",
  },
  {
    Name: "App Dev Responseve",
    desc: "i can handle creating apps that work perfectly on all devices, providing smooth and consistent user experiences everywhere and updated monthly",
    img: pic2,
    icon: <MdOutlinePhoneAndroid className="text-4xl" />,
    bgColor: "bg-green-800/70",
  },
  {
    Name: "Web Apps",
    desc: "Applications that run on the internet, providing users with access to information and services through web browsers, anytime and from anywhere securely.",
    img: pic3,
    icon: <HiMiniComputerDesktop className="text-4xl" />,
    bgColor: "bg-fuchsia-800/70",
  },
  {
    Name: "Security",
    desc: "Apps that run on the internet, providing users with access to information and services through web browsers, anytime and from anywhere securely and efficiently always.",
    img: pic4,
    icon: <MdSecurity className="text-4xl" />,
    bgColor: "bg-gray-900/70",
  },
]
const ServicesBox = () => {
  return (
    <section id='services' className="my-3 container">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-7 "> 
        {Services.map(({ Name, desc, img, icon, bgColor }) => (
          <div 
            key={Name} 
            className={`${bgColor} rounded-md  hover:rounded-xl text-white bg-cover bg-center bg-no-repeat bg-blend-overlay h-[365px] w-28 mx-auto hover:w-[133px] translate-all duration-500 cursor-pointer`}
            style={{ backgroundImage: `url(${img})` }}
          >
            <div className="p-2 flex flex-col items-center text-center backdrop-blur-md translate-all duration-700 hover:backdrop-blur-none space-y-3 rounded-sm"> 
              {icon}
              <h1 className="text-xl font-bold mt-2">{Name}</h1>
              <p className="text-sm mt-2">{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
export default ServicesBox
