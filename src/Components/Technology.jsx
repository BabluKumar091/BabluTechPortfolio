import React from 'react';
import { FaReact } from "react-icons/fa";
import { BiLogoMongodb } from "react-icons/bi";
import { FaNodeJs } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io";



const Technology = () => {
  return (
   <>
    <div className='border-b border-neutral-800 pb-24'>
      <h1 className='my-20 text-4xl font-thin text-center'>Technologies</h1>
      <div className='flex flex-wrap items-center justify-center gap-4'>
        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
              <FaReact className='text-4xl text-cyan-400'/>
        </div>
        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
              <IoLogoJavascript className='text-4xl text-yellow-400'/>
        </div>
        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
              <BiLogoMongodb className='text-4xl text-green-500'/>
        </div>
        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
              <FaNodeJs className='text-4xl text-green-400'/>
        </div>
    </div>
    </div>
   </>
  )
}

export default Technology
