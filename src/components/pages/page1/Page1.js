import React from 'react'
import { Link } from 'react-router-dom'
import Page1option from './Page1option'
import img1 from  './img1.png'
import img2 from './9347 2.png'
import img3 from './9347 3.png'
import img4 from './9347 4.png'
import img5 from './9347 5.png'
import img6 from './9347 6.png'
import line from './Group 1 (2).png'


const Page1 = () => {
  return (
    <div className=' '>
      
  <img className=' ml-[12vw] mt-8 mb-8' src={line} alt="" />
<h2 className='text-4xl font-bold text-center mt-2'>Which Describes you best?</h2>
<div className=" text-gray-600 font-normal mt-3 ml-[36vw] mb-4">This will help us personalize your experience.</div>

<Page1option img={img1} title={'Student'} text={'or soon to be enrolled'}/>
<Page1option img={img2} title={'Proffesional'} text={'pursuing a carrier'}/>
<Page1option img={img3} title={'Parent'} text={'Of a school-age child'}/>
<Page1option img={img4} title={'Lifelong learner'}/>
<Page1option img={img5} title={'Teacher'}/>
<Page1option img={img6} title={'Other'} />

      <Link to='/page2'> <button className=' ml-[45vw] mt-2 text-white bg-slate-400 h-10 w-[120px] rounded hover:border-black'>Continue</button></Link>
    </div>
  )
}

export default Page1
