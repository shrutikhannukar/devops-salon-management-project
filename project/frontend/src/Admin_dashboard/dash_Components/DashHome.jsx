// import React from 'react'
import '../Admin.css'
import { useState } from 'react';
import {Link} from 'react-router-dom' 
import 
{ BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill}
 from 'react-icons/bs'
 import 
 { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } 
 from 'recharts';
 import DashHeader from './DashHeader'
import Sidebar from './Sidebar';
 const DashHome = () => {
     const data = [
        {
          name: 'Page A',
          uv: 4000,
          pv: 2400,
          amt: 2400,
        },
        {
          name: 'Page B',
          uv: 3000,
          pv: 1398,
          amt: 2210,
        },
        {
          name: 'Page C',
          uv: 2000,
          pv: 9800,
          amt: 2290,
        },
        {
          name: 'Page D',
          uv: 2780,
          pv: 3908,
          amt: 2000,
        },
        {
          name: 'Page E',
          uv: 1890,
          pv: 4800,
          amt: 2181,
        },
        {
          name: 'Page F',
          uv: 2390,
          pv: 3800,
          amt: 2500,
        },
        {
          name: 'Page G',
          uv: 3490,
          pv: 4300,
          amt: 2100,
        },
      ];
     
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return (
    <div className='grid-container body'>
  
    <DashHeader OpenSidebar={OpenSidebar}/>
    <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
    <main className='main-container'>
        <div className='main-title text-3xl'>
            <h3>DASHBOARD</h3>
        </div>

        <div className='main-cards'>
        
            <div className='card'>
            <Link to="/appointment">
                <div className='card-inner'>
                    <h3>APPOINTMENTS</h3>
                    <BsFillArchiveFill className='card_dashicon'/>
                </div>
                <h1>300</h1>
                </Link>
            </div>
          
          
            <div className='card'>
            <Link to="/parlour">
                <div className='card-inner'>
                    <h3>PARLOURS</h3>
                    <BsFillGrid3X3GapFill className='card_dashicon'/>
                </div>
                <h1>12</h1>
                </Link>
            </div>
            
            
            <div className='card'>
            <Link to="/customers">
                <div className='card-inner'>
                    <h3>CUSTOMERS</h3>
                    <BsPeopleFill className='card_dashicon'/>
                </div>
                <h1>33</h1>
                </Link>
            </div>
            
            
            <div className='card'>
            <Link to="/notifications">
                <div className='card-inner'>
                    <h3>NOTIFICATION</h3>
                    <BsFillBellFill className='card_dashicon'/>
                </div>
                
                <h1>42</h1>
                </Link>
            </div>
            
        </div>

        <div className='charts'>
            <ResponsiveContainer width="100%" height="100%">
            <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
            }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="pv" fill="#8884d8" />
                <Bar dataKey="uv" fill="#82ca9d" />
                </BarChart>
            </ResponsiveContainer>

            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
                >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                </LineChart>
            </ResponsiveContainer>

        </div>
    </main>
    </div>
  )
}

export default DashHome


