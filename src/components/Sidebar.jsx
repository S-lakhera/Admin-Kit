import React from 'react'
import avatar from '../assets/avatar.jpg'
import ProBadge from './ProBadge'

const Sidebar = ({sidebarOpen}) => {
    return (
        <div className={`w-93 min-h-screen bg-[#222e3c] text-white  ${sidebarOpen? "block" : "hidden"} `}>
            <div className='flex flex-col gap-8'>
                <div className='pt-5 px-7 flex'>
                    <h1 className='text-[21px] font-semibold flex relative'>AdminKit
                        <div className='absolute -right-8 -top-1'><ProBadge /> </div>
                    </h1>
                </div>

                <div className='px-6 flex gap-3' >
                    <div className=''>
                        <img src={avatar} alt="" className='w-11 h-11 rounded' />
                    </div>
                    <div>
                        <p>Charles Hall <i class="ri-arrow-down-s-line"></i></p>
                        <p className='text-slate-300 '>Designer</p>
                    </div>
                </div>

                <div>
                    <p className='pl-5 py-2 text-slate-300 text-sm'>Pages</p>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
