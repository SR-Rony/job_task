import React from 'react'
import Images from '../images/Images'
import Paragraph from '../paragraph/Paragraph'
import Profile from '../../assets/profile.png'
import Heading from '../heading/Heading'

const MessageUser = () => {
  return (
    <div className='flex p-5 items-center bg-white gap-5 border-b border-secoundary hover:bg-bg_primary duration-100 cursor-pointer'>
        <div className='relative'>
            <div className='w-3 h-3 rounded-full bg-[#17b26a] absolute bottom-0 right-0'></div>
            <Images className="w-10 h-10 rounded-full" src={Profile}/>
        </div>
        <div >
            <div className='flex justify-between items-center'>
                <Heading className="text-xl font-semibold" text="Taufiq Rahman"/>
                <Paragraph className="text-secoundary ml-16" text="11:25 AM"/>
            </div>
            <Paragraph className="text-secoundary mt-2" text="Hello, yes I’m available at the..."/>
        </div>
    </div>
  )
}

export default MessageUser