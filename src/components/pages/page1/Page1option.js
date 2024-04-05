import React from 'react'

const Page1option = (props) => {

  return (
    <div className='  flex items-center justify-start ml-[35vw] w-[400px] border-2 border-solid border-gray-300 mb-1 cursor-pointer hover:border-black'>
      
      <img className=' h-[56px] ml-2' src={props.img} alt="" />
   
   <div className=' flex gap-1 p-1 ml-2'>
   <div className=' font-medium'>{props.title}</div>
      <div className=' text-gray-600'>{props.text}</div>
   </div>
    </div>
  )
}

export default Page1option
