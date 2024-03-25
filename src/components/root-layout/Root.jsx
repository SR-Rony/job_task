import React from 'react'
import { Outlet } from 'react-router-dom'
import Sightbar from '../sightbar/Sightbar'
import Navbar from '../navbar/Navbar'

const Root = () => {
  return (
    <div className='grid grid-cols-12'>
        <div className='col-span-2'>
            <Sightbar/>
        </div>
        <div className='col-span-10 bg-bg_primary'>
                <Navbar/>
            <div className='px-5'>
                <Outlet/>
            </div>
        </div>
    </div>
  )
}

export default Root