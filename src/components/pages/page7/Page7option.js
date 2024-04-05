import React from 'react'
import img from './9354 2.png'

const Page7option = (props) => {
  return (
    <div className=' flex items-center border-gray-400 rounded-md'>
      <div className="  font-medium w-[200px]">
<strong>{props.strong} </strong> {props.para}
      </div>
      <img className=' h-32' src={img} alt="" />
    </div>
  )
}

export default Page7option
