import { useState } from 'react'
import DashHeader from './dash_Components/DashHeader'
import Sidebar from './dash_Components/Sidebar'

const Forms = () => {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return (
    <div className='grid-container body'>
  
    <DashHeader OpenSidebar={OpenSidebar}/>
    <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
    <div>forms</div>
    </div>
  )
}

export default Forms