import React from 'react'
import FirstRow from '../components/dashboard/FirstRow'
import Card from '../components/dashboard/Card'

const cardsData = [
    {
        field:"Sales",
        icon:<i class="ri-truck-line "></i>,
        hero:"2.382",
        badgValue:"-3.65%",
    },
    {
        field:"Earnings",
        icon:"$",
        hero:"$21.300",
        badgValue:"-6.65%",
    },
    {
        field:"Visitors",
        icon:<i class="ri-group-line"></i>,
        hero:"14.212",
        badgValue:"5.25%",
    },
    {
        field:"Orders",
        icon:<i class="ri-shopping-cart-2-line"></i>,
        hero:"64",
        badgValue:"-2.25%",
    },
]
const AnalyticsDashboard = () => {

    return (
        <div className='w-full'>
            <FirstRow text="Analytics" />
            <div className='w-full'>
                <div className='w-1/2 px-10 gap-7.5 grid grid-cols-1 sm:grid-cols-2'>
                    {cardsData.map((card) => <Card card={card} />)}
                </div>
            </div>
        </div>
    )
}

export default AnalyticsDashboard
