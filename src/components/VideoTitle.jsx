import React from 'react'
import { CiCircleInfo } from "react-icons/ci";
import { FaPlay } from "react-icons/fa";
const VideoTitle = ({title, overview}) => {
  return (
    <div className='w-screen aspect-video pt-[16%] pl-24 absolute text-white bg-gradient-to-r from-black '>
        <h1 className=' text:sm md:text-5xl font-bold'>{title}</h1>
        <p className='py-5 font:xs md:font-lg w-1/4'>{overview}</p>
        <div className='space-x-4 flex '>
            <button className='bg-white hover:bg-gray-300 duration-700 text-black px-1 md:px-5 py-1 md:py-2 text-xs md:text-xl rounded-sm flex items-center'><FaPlay className='mr-1'/>Play</button>
            <button className='bg-gray-500 hover:bg-gray-400 duration-700 text-white px-1 md:px-5 py-1 md:py-2 text-xs md:text-xl rounded-sm flex items-center'><CiCircleInfo className='mr-1 text-3xl'/> More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle