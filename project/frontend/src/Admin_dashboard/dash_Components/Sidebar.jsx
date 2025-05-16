// import React from 'react'
import '../Admin.css'
import {Link} from 'react-router-dom'
import {BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, 
  BsListCheck, BsMenuButtonWideFill, BsFillGearFill} from 'react-icons/bs'

  const Sidebar = ({openSidebarToggle, OpenSidebar}) => {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
        <div className='sidebar-title'>
            <div className='sidebar-brand'>
                BEAUTY ICON
            </div>
            <span className='dashicon close_dashicon' onClick={OpenSidebar}>X</span>
        </div>

        <ol className='sidebar-list'>
            <li className='sidebar-list-item'>
                <Link to="/dashboard">
                    <BsGrid1X2Fill className='dashicon float-left'/> Dashboard
                </Link>
            </li><br/>
            <li className='sidebar-list-item'>
            <Link to="/appointment">
                    <BsFillArchiveFill className='dashicon float-left'/>  Appointments</Link>
            </li><br/>
            <li className='sidebar-list-item'>
            <Link to="/parlour">
                    <BsFillGrid3X3GapFill className='dashicon float-left'/>Parlours</Link>
               
            </li><br/>
            <li className='sidebar-list-item'>
            <Link to="/customers">
                    <BsPeopleFill className='dashicon float-left'/>Customers</Link> 
               
            </li><br/>
            <li className='sidebar-list-item'>
            <Link to="/forms">
                    <BsListCheck className='dashicon float-left'/> Forms</Link> 
               
            </li><br/>
            <li className='sidebar-list-item'>
            <Link to="/reports">
                    <BsMenuButtonWideFill className='dashicon float-left'/> Reports</Link> 
               
            </li><br/>
            <li className='sidebar-list-item'>
            <Link to="/setting">
                    <BsFillGearFill className='dashicon float-left'/>  Setting
                    </Link>  
            </li>
        </ol>
    </aside>
  )
}


export default Sidebar




 