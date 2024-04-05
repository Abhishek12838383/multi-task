import React from 'react'
import img1 from './9351 1.png'
import img2 from './9351 2.png'
import img3 from './9351 3.png'
import img4 from './9351 4.png'
import Page4option from './Page4option'
import { Link } from 'react-router-dom'
import line from './Group 1 (5).png'
import { FaChevronLeft } from "react-icons/fa6";

const Page4 = () => {
  return (
    <div>
      <div className=" flex gap-2 items-center ml-[11vw]">
      <Link to='/page3'>
        <FaChevronLeft/>
        </Link>
      <img className=' mt-8 mb-8' src={line} alt="" />
      </div>
<div className=" mt-[10vh]">
<div className=" font-bold text-3xl  mb-6 ml-[30vw]">What is your math comfort level?</div>
  <div className=" font-semibold ml-[28vw]">Choose the highest level you feel confident in - you can always adjust later.</div>
</div>

<div className=" flex items-center gap-3 ml-[20vw] ">
<Page4option img={img1} title={'Arthimetic'} text={'Introductory'}/>
<Page4option img={img2} title={'Basic algebra'} text={'Foundational'}/>
<Page4option img={img3} title={'Intermediate Algebra'} text={'Intermediate'}/>
<Page4option img={img4} title={'Calcus'} text={'Advanced'} />
</div>

<Link to='/page5'> <button className=' ml-[45vw] mt-[12vh] text-white bg-black h-10 w-[120px] rounded'>Continue</button></Link>

    </div>
  )
}

export default Page4
