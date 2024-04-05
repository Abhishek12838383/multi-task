import React from 'react'
import img from './9350 1.png'
import { Link } from 'react-router-dom'
import line from './Group 1 (4).png'
import { FaChevronLeft } from "react-icons/fa6";

const Page3 = () => {
  return (
    <div>
     <div className=" flex gap-2 items-center ml-[11vw]">
     <Link to='/page2'>
        <FaChevronLeft/>
        </Link>
      <img className=' mt-8 mb-8' src={line} alt="" />
      </div>
<div className=" flex justify-center items-center gap-24 mt-20">
  <img src={img} className=" h-[350px]" alt="" />
<div className="">
<div className=" font-bold text-3xl  mb-3">You're in the right place</div>
  <div className=" font-medium w-[450px]">Brilliant gets you hands-on to help improve your proffesional skills and knowledge. You'll interact with concepts and solve fun problems in math,science and computer science</div>
</div>
</div>

<Link to='/page4'> <button className=' ml-[45vw] mt-2 text-white bg-black h-10 w-[120px] rounded'>Continue</button></Link>

    </div>
  )
}

export default Page3
