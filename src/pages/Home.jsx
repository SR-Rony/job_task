import React, { useState } from 'react'
import Heading from '../components/heading/Heading'
import Images from '../components/images/Images'
import Icon from '../assets/Icon.png'
import Paragraph from '../components/paragraph/Paragraph'
import { IoStarSharp } from "react-icons/io5";
import { FaRegCalendarMinus } from "react-icons/fa";
import Upcoming from '../components/upcoming/Upcoming'
import UpcomingActive from '../components/upcoming/UpcomingActive'
import { AreaChart, ResponsiveContainer, ReferenceLine, XAxis, YAxis, Tooltip, CartesianGrid,Area } from 'recharts';

const Home = () => {

    const data = [
        {
          name: 'Mon',
          uv: 1,
          pv: 4,
          amt: 4,
        },
        {
          name: 'Tue',
          uv: 2.5,
          pv: 3,
          amt: 3,
        },
        {
          name: 'Wed',
          uv: 1.5,
          pv: 2,
          amt: 2,
        },
        {
          name: 'Thu',
          uv: 4,
          pv: 1,
          amt: 1,
        },
        {
          name: 'Fri',
          uv: 0,
          pv: 0,
          amt: 0,
        },
        {
          name: 'Sat',
          uv: 0,
          pv: 0,
          amt: 0,
        },
        {
          name: 'Sun',
          uv: 1.5,
          pv: 0,
          amt: 0,
        },
      ];

  return (
    <div className='px-7 pt-7'>
        {/*========== hero section start========= */}
        <section className='grid grid-cols-12 gap-5 lg:gap-7'>
            <div className='col-span-12 lg:col-span-8 py-5 w-full bg-white shadow-md rounded-md'>
                <div className='flex justify-between items-center px-5'>
                    <Heading className="text-3xl font-semibold" text="Tutoring Statistics"/>
                    <div className='py-2 px-4 ring-1 ring-secoundary rounded-lg flex items-center gap-2 cursor-pointer '>
                        <FaRegCalendarMinus className='inline-block'/> 
                        <Paragraph text="This Week"/>
                    </div>
                </div>
                <ResponsiveContainer width={"100%"} height="85%">
                <AreaChart data={data}
                    margin={{ top: 30, right: 30, left: 0, bottom: 0 }}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <CartesianGrid strokeDasharray="" />
                    <Tooltip />
                    <ReferenceLine x="Page C" stroke="#6C737F" label="Min PAGE" />
                    <ReferenceLine y={4} label="Max" stroke="#235940" strokeDasharray="" />
                    <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#235940" />
                </AreaChart>
                </ResponsiveContainer>
            </div>
            <div className='col-span-12 lg:col-span-4 w-full p-5 bg-white shadow-md rounded-md text-center'>
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
        </section>
        {/*========== hero section end========= */}
        {/*========== Upcoming section start========= */}
        <section className='mt-7 p-7 bg-white rounded-md shadow-md'>
            <Heading className="text-3xl font-semibold" text="Upcoming Sessions"/>
            <div className='grid grid-cols-12 mt-7 gap-6'>
                <div className='col-span-12 md:col-span-6 lg:col-span-4'>
                    <UpcomingActive/>
                </div>
                <div className='col-span-12 md:col-span-6 lg:col-span-4'>
                    <Upcoming/>
                </div>
                <div className='col-span-12 md:col-span-6 lg:col-span-4'>
                    <Upcoming/>
                </div>
            </div>
        </section>
        {/*========== Upcoming section end========= */}
        {/*========== post section start========= */}
        <section className='mt-7 p-7 bg-white rounded-md shadow-md'>
            <Heading className="text-3xl font-semibold" text="Post Survey"/>
            <Paragraph className="text-secoundary mt-2 text-2xl" text="How was your session?"/>
            <div className='grid grid-cols-12 mt-7 gap-6'>
                <div className='col-span-12 md:col-span-6 lg:col-span-4'>
                    <Upcoming/>
                </div>
                <div className='col-span-12 md:col-span-6 lg:col-span-4'>
                    <Upcoming/>
                </div>
                <div className='col-span-12 md:col-span-6 lg:col-span-4'>
                    <Upcoming/>
                </div>
            </div>
        </section>
        {/*========== post section end========= */}
    </div>
  )
}

export default Home