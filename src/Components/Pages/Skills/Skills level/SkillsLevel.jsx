import React from 'react'

const SkillsLevel = ({skillName,persentage }) => {
  return (
    <div className='p-1 space-y-[1.6px] justify-between'>
      <div className="justify-between flex items-end">
        <p className='font-bold text-xl'> {skillName} </p>
        <p className='text-sm'>{persentage}</p>
      </div>
      <div className="w-full bg-slate-200 rounded-full p-1">
        <div style={{width:`${persentage}`}} className="h-3 bg-prim rounded-full">

        </div>
      </div>
    </div>
  )
}

export default SkillsLevel
