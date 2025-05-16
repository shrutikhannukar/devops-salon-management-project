import { useState } from 'react'
import DashHeader from './dash_Components/DashHeader'
import Sidebar from './dash_Components/Sidebar'

const Reports = () => {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return (
    <div className='grid-container body'>
  
    <DashHeader OpenSidebar={OpenSidebar}/>
    <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
    
    <div>Reports</div>
    </div>
  )
}

export default Reports