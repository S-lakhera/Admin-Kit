import React from 'react'

const Card = ({card}) => {
  return (
    <div className='card bg-white p-5 rounded shadow hover:shadow-md shadow-slate-200'>
      <div className='flex justify-between'>
        <p className='text-gray-500'>{card.field}</p>
        <div className='bg-[#d3e2f7] py-2 px-3 rounded-full text-2xl text-blue-400'>
            {card.icon}
        </div>
      </div>
      <div>
        <p className='text-3xl  pb-4'>{card.hero}</p>
      </div>
      <div className='flex gap-2 items-center py-1.5'>
        <div className='bg-[#d3e2f7] rounded px-1 text-xs text-blue-500'>
            <p>{card.badgValue}</p>
        </div>
        <p className='text-slate-500'>
            Since last week
        </p>

      </div>
    </div>
  )
}

export default Card
