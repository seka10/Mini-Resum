import React from 'react'
import myPic from '../../../assets/portrait.png'

const FirstPage = () => {
  return (
    <div className='h-full'>
      <main className='h-full w-full'>
        <div className="bg-sec page-shadow">
          {/* Image-container */}
          <div className="">
            <img src={myPic} alt="" className='w-[500px] mx-auto bg-sec' />
          </div>
          {/* Text-container */}
          <div className=""></div>
        </div>
      </main>
    </div>
  )
}

export default FirstPage;
