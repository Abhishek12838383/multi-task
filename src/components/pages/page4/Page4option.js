import React from 'react'


const Page4option = (props) => {
  return (
    <div className=' mt-[30px] border-gray-300 bg-white shadow rounded-md p-2 active:border-orange-400'>
      <img className=' h-20' src={props.img} alt="" />

<div className=" flex items-center ml-[3vw]">{props.title}</div>
<div className=" text-gray-500 font-normal ml-[3vw]">{props.text}</div>

    </div>
  )
}

export default Page4option
