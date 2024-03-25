import React from 'react'
import Heading from '../heading/Heading'
import Paragraph from '../paragraph/Paragraph'
import Images from '../images/Images'
import Profile from "../../assets/profile.png"
import { IoVideocamOutline } from "react-icons/io5";

const UpcomingActive = () => {
  return (
    <div className='p-4 ring-1 ring-secoundary rounded-md bg-primary text-white'>
        <div className='flex justify-between items-center'> 
            <div>
            <Heading className="text-2xl font-semibold" text="Mathematic"/>
            <Paragraph className="text-base" text="Theorema Pytagoras"/>
            </div>
            <div className='active w-10 h-10 rounded-full relative z-20'>
                <Images className="w-full" src={Profile}/>
            </div>
        </div>
        <div className='flex justify-between items-center mt-16'>
                <button className='flex items-center gap-3 p-2 px-3 bg-bg_primary text-black font-semibold rounded-lg'>
                    <IoVideocamOutline className='inline-block'/>
                    <p className=''> Join Session</p>
                </button>
                <button className='p-1 px-2 bg-[#ecfdf3] text-primary rounded-full'>Now</button>
            </div>
    </div>
  )
}

export default UpcomingActive