import React from 'react'
import { Outlet } from 'react-router-dom'
import Sightbar from '../sightbar/Sightbar'
import Navbar from '../navbar/Navbar'

const Root = () => {
  return (
    <div className='grid grid-cols-12 gap-5'>
        <div className='col-span-2'>
            <Sightbar/>
        </div>
        <div className='col-span-10'>
            <Navbar/>
            <Outlet/>
        </div>
    </div>
  )
}

export default Root