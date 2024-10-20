import React from 'react'

const Inputs = ({label, type, placeholder}) => {
  return (
    <div className='flex flex-col sm:max-w-[500px] sm:mx-auto my-6 max-w-[300px] '  >
    <label className=' text-xl ml-4 font-bold ' htmlFor={label}>{label} {"*"}</label>
    <input className=' w-[100%] mx-auto h-12 pl-4 bg-opacity-5 bg-blue-stone-500 outline-none border-none p-2  rounded-full ' type={type} placeholder={placeholder} />
    </div>
  )
}

export default Inputs
