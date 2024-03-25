import React from 'react'
import Heading from '../heading/Heading'
import Paragraph from '../paragraph/Paragraph'
import Images from '../images/Images'
import Profile from "../../assets/profile.png"
import { FaRegCalendarMinus } from "react-icons/fa";
import { CiClock2 } from "react-icons/ci";

const Upcoming = () => {
  return (
    <div className='p-4 ring-1 ring-secoundary rounded-md'>
        <div className='flex justify-between items-center'> 
            <div>
            <Heading className="text-2xl font-semibold" text="Mathematic"/>
            <Paragraph className="text-base text-secoundary" text="Theorema Pytagoras"/>
            </div>
            <Images className="w-10 h-10 rounded-full" src={Profile}/>
        </div>
        <div className='mt-12'>
            <div className='flex items-center gap-3'>
                <FaRegCalendarMinus className='inline-block'/>
                <p className='text-secoundary'> Sunday, Oct 2</p>
            </div>
            <div className='flex justify-between items-center'>
                <div className='flex items-center gap-3'>
                    <CiClock2 className='inline-block'/>
                    <p className='text-secoundary'> 3:30 pm</p>
                </div>
                <button className='p-1 px-2 bg-bg_primary rounded-full'>in 2 hours</button>
            </div>
        </div>
    </div>
  )
}

export default Upcoming