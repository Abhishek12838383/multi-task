import React from 'react'
import Page2option from './Page2option'
import img1 from './9349 2.png'
import img2 from './9349 3.png'
import img3 from './9349 4.png'
import img4 from './9349 5.png'
import img5 from './9349 6.png'
import { Link } from'react-router-dom'
import line from './Group 1 (3).png'
import { FaChevronLeft } from "react-icons/fa6";

const Page2 = () => {
  return (
    <div>
      <div className=" flex gap-2 items-center ml-[11vw]">
<Link to='/'>
        <FaChevronLeft/>
        </Link>
      <img className=' mt-8 mb-8' src={line} alt="" />
      </div>
<h2 className='text-4xl font-bold text-center mt-2'>Which Describes you best?</h2>
<div className=" text-gray-600 font-normal mt-3 ml-[36vw] mb-4">This will help us personalize your experience.</div>

<Page2option img={img1} title={'Learning specific skills to advance my career'}/>
<Page2option img={img2} title={'Exploring new Topics Im interested in'}/>
<Page2option img={img3} title={'Refreshing my math foundations'} />
<Page2option img={img4} title={'Exercising my brain to stay sharp'}/>
<Page2option img={img5} title={'Something else'}/>

      <Link to='/page3'> <button className=' ml-[45vw] mt-2 text-white bg-black h-10 w-[120px] rounded'>Continue</button></Link>
    
    </div>
  )
}

export default Page2
