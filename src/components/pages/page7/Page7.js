import React from 'react'
import Page7option from './Page7option'

const Page7 = () => {
  return (
    <div className=' mt-[20vh]'>
      <div className=" font-bold text-[35px] ml-[27vw] mb-[3vh]">Learning paths based on your answers</div>
  <div className=" font-semibold text-gray-600 ml-[35vw]">Choose one to get started. You can switch anytime</div>


<button className=' bg-yellow-500 h-6 w-[100px] ml-[33vw] mt-4 flex items-center justify-center rounded-full text-xs font-medium'>
MOST POPULAR
</button>
  <div className=" flex items-center gap-10 ml-[23vw] mt-5">
  <Page7option strong={'Foundational Math'} para={'Build your foundational skills in algebra,geometry and probality'} />
  <Page7option strong={'Mathematically thinking'} para={'Build your foundational skills in algebra,geometry and probality'} />
  </div>
    </div>
  )
}

export default Page7
