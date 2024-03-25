import React, { useState } from 'react'
import ListItem from '../list/ListItem'
import List from '../list/List'
import Images from '../images/Images'
import Logo from '../../assets/logo.png'
import { RiHome6Line } from "react-icons/ri";
import { LiaAngleLeftSolid,LiaAngleRightSolid } from "react-icons/lia";
import { Link } from 'react-router-dom'

const Sightbar = () => {
    const [url,setUrl]=useState("home")

  return (
    <div className='p-5 border-r border-secoundary w-full h-screen bg-white'>
        <div className='flex justify-between items-center mb-5'>
            <Link to="/">
                <Images src={Logo} alt="logo"/>
            </Link>
            <div className='flex bg-secoundary w-7 h-7 justify-center items-center rounded-md text-[#9da4ae] cursor-pointer'>
                <LiaAngleLeftSolid/>
                <LiaAngleRightSolid />
            </div>
        </div>
        <List>
            <Link to="/"  onClick={()=>setUrl("home")}>
                <div className={` ${url=="home" && 'bg-primary text-white ml-0'} flex ml-3 my-2 hover:ml-0 gap-2 items-center text-xl text-secoundary p-2 bg-transparent hover:bg-primary hover:text-white rounded-md duration-100`}>
                    <RiHome6Line/>
                    <ListItem to="/" className="font-medium" text="Home"/>
                </div>
            </Link>
            <Link to="/schedule" onClick={()=>setUrl("schedule")}>
            <div className={` ${url=="schedule" && 'bg-primary text-white ml-0'} flex ml-3 my-2 hover:ml-0 gap-2 items-center text-xl text-secoundary p-2 bg-transparent hover:bg-primary hover:text-white rounded-md duration-100`}>
                    <RiHome6Line/>
                    <ListItem to="/schedule" className="font-medium" text="Schedule"/>
                </div>
            </Link>
            <Link to="/messages" onClick={()=>setUrl("messages")}>
            <div className={` ${url=="messages" && 'bg-primary text-white ml-0'} flex ml-3 my-2 hover:ml-0 gap-2 items-center text-xl text-secoundary p-2 bg-transparent hover:bg-primary hover:text-white rounded-md duration-100`}>
                    <RiHome6Line/>
                    <ListItem to="/messages" className="font-medium" text="Messages"/>
                </div>
            </Link>
            <Link to="/student" onClick={()=>setUrl("student")}>
                <div className={` ${url=="student" && 'bg-primary text-white ml-0'} flex ml-3 my-2 hover:ml-0 gap-2 items-center text-xl text-secoundary p-2 bg-transparent hover:bg-primary hover:text-white rounded-md duration-100`}>
                    <RiHome6Line/>
                    <ListItem to="/student" className="font-medium" text="Student"/>
                </div>
            </Link>
        </List>
    </div>
  )
}

export default Sightbar