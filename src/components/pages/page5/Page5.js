import React from 'react'
import { Link } from 'react-router-dom'
import img from './9352 1.png'
import img1 from './9352 2.png'
import line from './Rectangle 2.png'
import { FaChevronLeft } from "react-icons/fa6";

const Page5 = () => {
  return (
    <>
     <div className=" flex gap-2 items-center mb-4 ml-[11vw]">
     <Link to='/page4'>
        <FaChevronLeft/>
        </Link>
      <img className=' mt-8 mb-8' src={line} alt="" />
      </div>
    <div className=' flex items-center gap-[10vw] ml-[13vw]'>

<img className=' h-[350px]' src={img} alt="" />

<div className=" ">
  <h1 className=' font-bold text-3xl'>You're on your way</h1>
  <img className=' h-[30px] mt-[5vh]' src={img1} alt="" />
  <p className=' font-medium italic w-[530px]'>
    "Through its engaging and well-structerd courses,Brilliant has taught me mathematical concepts that I previously strugled to understand Now i feel confident approaching both technical job interviews and real-world problem solving solutions."
  </p>
  <div className=" font-semibold italic mt-[50px]">
    - Jacob S.
  </div>
</div>
</div>

      <Link to='/page6'> <button className=' ml-[42vw] mt-6 text-white bg-black h-10 w-[120px] rounded'>Continue</button></Link>
      </>
  )
}

export default Page5
