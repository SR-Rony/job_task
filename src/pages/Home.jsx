import React from 'react'
import Heading from '../components/heading/Heading'
import Images from '../components/images/Images'
import Icon from '../assets/Icon.png'
import Paragraph from '../components/paragraph/Paragraph'
import { IoStarSharp } from "react-icons/io5";
import { FaRegCalendarMinus } from "react-icons/fa";
import List from '../components/list/List'
import ListItem from '../components/list/ListItem'

const Home = () => {
  return (
    <div className='w-full h-screen'>
        <div className='grid grid-cols-12 gap-5'>
            <div className='col-span-8 w-full p-5 bg-white shadow-md rounded-md'>
                <div className='flex justify-between items-center'>
                    <Heading className="text-3xl font-semibold" text="Tutoring Statistics"/>
                    <div className='py-2 px-4 ring-1 ring-secoundary rounded-lg flex items-center gap-2 cursor-pointer '>
                        <FaRegCalendarMinus className='inline-block'/> 
                        <Paragraph text="This Week"/>
                    </div>
                </div>
                <List>
                    <div className='flex gap-5 items-center justify-between my-5'>
                        <ListItem className="text-secoundary" text="4"/>
                        <div className='w-full h-[2px] bg-bg_primary'></div>
                    </div>
                    <div className='flex gap-5 items-center justify-between my-5'>
                        <ListItem className="text-secoundary" text="3"/>
                        <div className='w-full h-[2px] bg-bg_primary'></div>
                    </div>
                    <div className='flex gap-5 items-center justify-between my-5'>
                        <ListItem className="text-secoundary" text="2"/>
                        <div className='w-full h-[2px] bg-bg_primary'></div>
                    </div>
                    <div className='flex gap-5 items-center justify-between my-5'>
                        <ListItem className="text-secoundary" text="1"/>
                        <div className='w-full h-[2px] bg-bg_primary'></div>
                    </div>
                    <div className='flex gap-5 items-center justify-between my-5'>
                        <ListItem className="text-secoundary" text="0"/>
                        <div className='w-full h-[2px] bg-bg_primary'></div>
                    </div>
                </List>
                <div className='flex justify-between items-center px-5 text-secoundary'>
                    <Paragraph text="Mon"/>
                    <Paragraph text="Tue"/>
                    <Paragraph text="Wed"/>
                    <Paragraph text="Thu"/>
                    <Paragraph text="Fri"/>
                    <Paragraph text="Sat"/>
                    <Paragraph text="Sun"/>
                </div>
            </div>
            <div className='col-span-4 w-full p-5 bg-white shadow-md rounded-md text-center'>
                
                <Images className="mx-auto mt-5 mb-7" src={Icon}/>
                <Heading className="text-3xl font-semibold" text="Silver Award"/>
                <Paragraph className="text-base text-secoundary mt-2" text="Great job, keep it up!"/>
                <div className='w-full h-2 bg-[#f3f4f6] rounded-full mt-8 relative overflow-hidden'>
                    <div className='absolute w-1/4 h-full bg-[#86cb3c] rounded-full'></div>
                </div>
                <div className='flex justify-between items-center mt-4'>
                    <p className='text-start text-base text-secoundary'><span className='font-semibold'>9 / 40 </span>hours</p>
                    <div className='flex items-center text-[Gold] gap-1'>
                        <IoStarSharp className='inline-block'/>
                        <p className='font-semibold'>Gold</p>
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Home