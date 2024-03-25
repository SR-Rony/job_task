import React, { useState } from 'react'
import Heading from '../heading/Heading'
import Images from '../images/Images'
import Profile from '../../assets/profile.png'
import { IoMdNotificationsOutline } from "react-icons/io";
import Paragraph from '../paragraph/Paragraph';
import { IoLogOutOutline } from "react-icons/io5";

const Navbar = () => {
    const [toggle,setToggle]=useState(false)
  return (
    <div className=' flex justify-between items-center p-5 mb-5 bg-white border-l border-secoundary'>
        <Heading className='text-3xl font-semibold' text="Hello, Charlie 👋"/>
        <div className='flex gap-5 items-center '>
            <IoMdNotificationsOutline className='text-2xl cursor-pointer'/>
            <div onClick={()=>{setToggle(!toggle)}} className='relative '>
                <Images className="w-10 h-10 rounded-full cursor-pointer" src={Profile} />
                {toggle && 
                <div className={`${toggle ?"absolute" : "hidden"} top-12 right-5  p-2 bg-white w-60 z-20 rounded-md shadow-lg`}>
                    <div className='absolute top-0 right-3 bg-white w-4 h-4 translate-y-[-7px] -rotate-45 '></div>
                    <div className='flex gap-3 items-center border-b border-white pb-2'>
                        <Images className="w-7 h-7 rounded-full cursor-pointer" src={Profile} />
                         <div>
                            <Paragraph className="font-semibold" text="Charlie John"/>
                            <Paragraph text="10th grade"/>
                        </div>
                    </div>
                    <div className='flex gap-2 items-center mt-2'>
                        <IoLogOutOutline/>
                        <button>Logout</button>
                    </div>
                </div>
                }
            </div>
        </div>
    </div>
  )
}

export default Navbar