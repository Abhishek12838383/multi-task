import React from 'react'
import img from './9353 2.png'
import { Link } from 'react-router-dom'

const Page6 = () => {
  return (
    <div>
        <Link to='/page7'>
      <img className=' h-32 mt-[22vh] ml-[40vw]' src={img} alt="" />
      <div className=" font-bold text-2xl ml-[25vw]">Finding learning path recommendations for you based on</div>
      <div className=" font-bold text-2xl ml-[40vw]">your responses</div>

    </Link>
    </div>
  )
}

export default Page6
