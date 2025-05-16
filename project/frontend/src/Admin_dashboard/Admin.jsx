// import { useState } from 'react'
import './Admin.css'
// import Header from './dash_Components/DashHeader'
// import Home from './dash_Components/Sidebar'
// import Sidebar from './dash_Components/Sidebar'
// import Appointment from './Appointment'
// import Setting from './Setting'
// import Parlours from './Parlours'
// import Customers from './Customers'
// import Forms from './Forms'
// import Reports from './Reports'
// import Notifications from './Notifications'
// import Profile from './Profile'
// import DashHeader from './dash_Components/DashHeader'
import DashHome from './dash_Components/DashHome'
const Admin = () => {

  // const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  // const OpenSidebar = () => {
  //   setOpenSidebarToggle(!openSidebarToggle)
  // }

  return (
    <div >
  
      {/* <DashHeader OpenSidebar={OpenSidebar}/>
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/> */}
      <DashHome/><br/>
      {/* <Appointment/><br/>
      <Parlours/><br/>
      <Customers/><br/>
      <Forms/><br/>
      <Reports/><br/>
      <Setting/><br/>
      <Notifications/><br/>
      <Profile/>
      */}
    </div>
  )
}

export default Admin


