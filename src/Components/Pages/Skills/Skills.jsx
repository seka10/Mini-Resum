import React from 'react'
import SkillsLevel from "../Skills/Skills level/SkillsLevel"
const Skills = () => {
  return (
    <div>
      <div className="page-shadow h-full bg-white px-10">
        {/* Heading */}
        <div className=""></div>
        {/* skills */}
        <div className="">
          <div className="relative">
            <div className="text-center text-6xl xl:text-8xl font-bold text-black/10"> SKILLS </div>
          <h1 className=' absolute text-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-2 text-3xl md:text-4xl'> Skills</h1>
          </div>
        </div>
        {/* skills sec */}
        <div className="-translate-y-8">
          <SkillsLevel skillName="HTML" persentage={"100%"}/>
          <SkillsLevel skillName="CSS" persentage={"93%"}/>
          <SkillsLevel skillName="Java Script" persentage={"84%"}/>
          <SkillsLevel skillName="Bootstrap" persentage={"91%"}/>
          <SkillsLevel skillName="React" persentage={"82%"}/>
          <SkillsLevel skillName="Tailwind" persentage={"97%"}/>
          <SkillsLevel skillName="Vue" persentage={"80%"}/>
        </div>
        </div>
    </div>
  )
}

export default Skills
