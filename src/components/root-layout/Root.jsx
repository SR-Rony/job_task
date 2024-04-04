import React from 'react'
import { Outlet } from 'react-router-dom'
import Sightbar from '../sightbar/Sightbar'
import Navbar from '../navbar/Navbar'
// import { FaBars } from "react-icons/fa6";
// import { IoMdClose } from "react-icons/io";

const Root = () => {
  return (
    <div className='grid grid-cols-12'>
        <div className='lg:col-span-2 hidden lg:block '>
            <Sightbar/>
        </div>
        <div className='col-span-12 lg:col-span-10 bg-bg_primary'>
                <Navbar/>
            <div>
                <Outlet/>
            </div>
        </div>
    </div>
  )
}

export default Root