import React from 'react'
import { Outlet } from 'react-router-dom'
import Sightbar from '../sightbar/Sightbar'
import Navbar from '../navbar/Navbar'

const Root = () => {
  return (
    <div className='grid grid-cols-12 bg-secoundary'>
        <div className='col-span-2'>
            <Sightbar/>
        </div>
        <div className='col-span-10 relative'>
            <div className='w-full  absolute top-0 left-0'>
                <Navbar/>
            </div>
            <Outlet/>
        </div>
    </div>
  )
}

export default Root