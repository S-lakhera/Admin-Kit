import React from 'react'

const FirstRow = ({text}) => {
  return (
    <div className='p-10 pb-5 flex justify-between items-center'>
      <div>
        <p className='text-2xl'><span className='font-semibold'>{text}</span> Dashboard</p>
      </div>

      <div className='flex gap-5'>
        <button className='bg-white cursor-pointer rounded hover:border border-slate-400 px-3 py-1.5'>Invite a Friend</button>
        <button className='px-3 py-1.5 cursor-pointer bg-blue-500 text-white rounded'>New Project</button>
      </div>
    </div>
  )
}

export default FirstRow
