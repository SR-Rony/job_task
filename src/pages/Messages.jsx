import React, { useState } from 'react'
import { CiSearch } from "react-icons/ci";
import MessageUser from '../components/message_user/MessageUser';
import Images from '../components/images/Images';
import Profile from '../assets/profile.png'
import Heading from '../components/heading/Heading';
import Paragraph from '../components/paragraph/Paragraph';
import { FaRegFilePdf } from "react-icons/fa6";
import { VscSend } from "react-icons/vsc";
import { CiImageOn } from "react-icons/ci";
import { HiOutlineLink } from "react-icons/hi";
import Modal from 'react-modal';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { IoMdClose } from "react-icons/io";
import { RiDeleteBin6Line } from "react-icons/ri";
import List from '../components/list/List';
import ListItem from '../components/list/ListItem';
import { space, split } from 'postcss/lib/list';


const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width:"50%",
    borderRadius: "10px"
  },
};

Modal.setAppElement('#root');

const Messages = () => {

const [date,setDate]=useState([])
console.log(date);

const [value, onChange] = useState(new Date());

const handleClick =(e)=>{
  date.push(e)
  // setDate([])
}

  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }

  const [icon,setIcon]=useState(true)

  const handleChange=(e)=>{
    let value = e.target.value;
    let length = value.length
    if(value){
      setIcon(false)
    }
  }

  return (
    <div className='grid grid-cols-12 border-t border-secoundary'>
      <div className="hidden lg:block col-span-4 border-x  border-secoundary">
        <div className='w-full p-6 text-center bg-white border-b border-secoundary'>
          <div className='relative'>
            {icon && <CiSearch className={` absolute bottom-1/2 left-2 translate-y-1/2 text-xl`}/>}
            <input onChange={handleChange} className='py-2 px-7 w-full rounded-md ring-1 ring-secoundary text-xl' type="text" placeholder='Searce' />
          </div>
        </div>
          <MessageUser/>
          <MessageUser/>
          <MessageUser/>
          <MessageUser/>
          <MessageUser/>
      </div>
      <div className="col-span-12 lg:col-span-8">
        <div className='flex justify-between items-center p-5 bg-white'>
          <div className='flex gap-5 items-center'>
              <div className='relative'>
                <div className='w-3 h-3 rounded-full bg-[#17b26a] absolute bottom-0 right-0'></div>
                <Images className="w-10 h-10 rounded-full" src={Profile}/>
              </div>
              <div>
                <Heading className="text-xl font-semibold" text="Taufiq Rahman"/>
                <Paragraph className="text-secoundary" text="Mathematic"/>
              </div>
            </div>
            <Paragraph className="py-2 px-4 rounded-md bg-primary text-white cursor-pointer" text="Schedule sessions"/>
        </div>
        <div className='p-5'>
          <div className=' ml-auto w-2/5 cursor-pointer ' onClick={openModal}>
            <span className='text-secoundary'>Friday 2:20pm</span>
            <Paragraph className="text-white px-5 py-2 bg-primary rounded-s-md rounded-b-md mt-2" text="Hey Taufiq, can you please review the latest design when you can?"/>
          </div>
          <div className=' w-2/5 cursor-pointer ' onClick={openModal}>
            <span className='text-secoundary'>Friday 2:20pm</span>
            <Paragraph className=" px-4 py-2 bg-[#f9fafb] rounded-tr-md rounded-b-md mt-2 ring-1 ring-secoundary" text="Sure thing, I’ll have a look today."/>
          </div>
          <div className=' ml-auto w-2/5 cursor-pointer ' onClick={openModal}>
            <span className='text-secoundary'>Friday 2:20pm</span>
            <Paragraph className="text-white px-5 py-2 bg-primary rounded-s-md rounded-b-md mt-2" text="Some chats here"/>
          </div>
          <div className=' ml-auto w-2/5 cursor-pointer ' onClick={openModal}>
            <Paragraph className="text-white px-5 py-2 bg-primary rounded-s-md rounded-b-md mt-2" text="Hello, I’m available at the moment. I think we can have a session today."/>
          </div>
          <div className=' w-2/5 cursor-pointer ' onClick={openModal}>
            <span className='text-secoundary'>Friday 2:20pm</span>
            <Paragraph className=" px-4 py-2 bg-[#f9fafb] rounded-tr-md rounded-b-md mt-2 ring-1 ring-secoundary" text="Sure thing, I’ll have a look today."/>
          </div>
          <div className='w-2/5 cursor-pointer ' onClick={openModal}>
            <div className=' flex gap-5 items-center px-4 py-2 bg-white rounded-tr-md rounded-b-md mt-2 ring-1 ring-secoundary'>
                <FaRegFilePdf className='text-xl'/>
              <div>
                <Paragraph text="Mathematic Exam.pdf"/>
                <Paragraph text="200 KB"/>
              </div>
            </div>
          </div>
          <div className=' ml-auto w-2/5 cursor-pointer ' onClick={openModal}>
            <span className='text-secoundary'>Friday 2:20pm</span>
            <p className="text-white px-5 py-2 bg-primary rounded-s-md rounded-b-md mt-2">Hello, yes I’m available at the<br/>
             moment. I think we can have a<br/>
              session today.</p> 
          </div>
        </div>
        <div className='py-10 px-5'>
          <div className='relative overflow-hidden shadow-md'>
            <textarea className='w-full h-36 rounded-xl focus:outline-none focus:ring-0 p-5' name="" id="" cols="30" rows="10" placeholder='Type Your Messages'></textarea>
            <input className='rounded-b-lg absolute bottom-0 left-0 w-full border-t border-secoundary py-2 pl-20 focus:none focus:outline-none focus:ring-0' type="text" />
            <VscSend className='absolute bottom-3 right-5 cursor-pointer'/>
            <CiImageOn className='absolute bottom-3 left-10 cursor-pointer'/>
            <HiOutlineLink className='absolute bottom-3 left-3 cursor-pointer'/>
          </div>
        </div>
      </div>

      {/* react modal */}
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className='relative pb-3 mb-3 border-b border-secoundary'>
          <div>
            <Heading className="text-2xl font-semibold" text="Schedule Sessions (45 Minutes)"/>
            <Paragraph className="text-secoundary mt-1" text="Choose your availability to have sessions with Taufiq Rahman"/>
          </div>
          <button className='text-xl absolute top-0 right-0' onClick={closeModal}><IoMdClose/></button>
        </div>
        <div className="lg:flex gap-4">
          <Calendar onClickDay={handleClick} onChange={onChange} value={value} />
          <div className='lg:w-1/2 '>
            <Paragraph text="Select hours"/>
            <div>
              <Paragraph className="text-secoundary mt-2" text="Oct 13"/>
              {date.map((item,index)=>(
                <div key={index} className='flex justify-between items-center gap-2'>
                  {/* <Paragraph text={`${item}`}/> */}
                  <p className='bg-secoundary my-1'>{`${item}`}</p>
                  <button onClick={()=>console.log(index)} className='px-4 py-1 bg-primary rounded-md text-white'>D</button>
                </div>
              ))}
              {/* {date.map((item)=><List><ListItem text={item} /></List>)} */}
            </div>
          </div>
        </div>
        <div className='pt-3 mt-3 flex justify-between items-center border-t border-secoundary'>
          <button className='py-2 px-16 ring-1 ring-secoundary rounded-md'>I’m not available</button>
          <button className='py-2 px-16 ring-1 ring-primary bg-primary text-white rounded-md'>Set schedule</button>
        </div>
      </Modal>

    </div>
  )
}

export default Messages