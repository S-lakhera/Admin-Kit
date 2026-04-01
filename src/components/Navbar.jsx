import React from 'react'
import usFlag from '../assets/us.png'
import avatar from '../assets/avatar.jpg'

const Navbar = ({setSidebarOpen}) => {
  return (
    <div className='w-full bg-white '>
      <div className='w-full flex justify-between px-7 py-3.5 text-center items-center shadow-2xl shadow-slate-200 text-gray-600'>
        <div className='flex items-center gap-7'>
            <div className=''>
                <i 
                onClick={() => setSidebarOpen((prev) => !prev)}
                className="ri-menu-2-fill text-3xl font-bold hover:text-blue-400 cursor-pointer"></i>
            </div>
            <div className='bg-[#f3f5f9] rounded-2xl hidden md:flex items-center'>
                <input type="text" placeholder='Search...' className='rounded-2xl bg-[#f3f5f9] outline-none p-2'/>
                <i class="ri-search-line px-4 text-xl"></i>
            </div>
            <div className='flex items-center'>
                <p>Mega Menu</p>
                <i class="ri-arrow-down-s-line font-semibold"></i>
            </div>
            <div className='flex items-center'>
                <p>Resources</p>
                <i class="ri-arrow-down-s-line font-semibold"></i>
            </div>
        </div>

        <div className='flex gap-6 text-[22px] items-center'>
            <div><i className="ri-notification-2-line"></i></div>
            <div><i class="ri-chat-unread-line"></i></div>
            <a href="#" className=' rounded-4xl'>
                <img src={usFlag} alt="" className='rounded-full w-6 h-6' />
                </a>
            <div><i class="ri-fullscreen-line"></i></div>
            <img src={avatar} alt="" className='rounded w-11 h-11' />

        </div>
      </div>
    </div>
  )
}

export default Navbar
