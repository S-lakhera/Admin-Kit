import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import AnalyticsDashboard from './pages/AnalyticsDashboard'

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  return (
    <div className={`flex `}>
    <Sidebar sidebarOpen={sidebarOpen}/>
    
    <div className="w-screen" >
      <Navbar setSidebarOpen={setSidebarOpen}/>
      <AnalyticsDashboard/>
    </div>
    </div>
  )
}

export default App
