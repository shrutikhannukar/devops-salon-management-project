import { useState, useEffect } from 'react';
import axios from 'axios';
import DashHeader from './dash_Components/DashHeader'
import Sidebar from './dash_Components/Sidebar'
const Appointment = () => {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    console.log("ji")
    try {
      const result = await axios.get('http://localhost:7000/api/book/getallappointments');
      console.log("result="+result)
      setData(result.data);
    } catch (error) {
      console.error('Error fetching data: ', error);
    }
  };
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }


  useEffect(() => {
    
    fetchData();
  }, []); // Empty array means this effect runs once when the component mounts

  return (
    <div className='grid-container body'>
  
    <DashHeader OpenSidebar={OpenSidebar}/>
    <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>

    <div>
    <div className="visit1">
     <b><h2>ID</h2></b> 
     <b><h2>NAME</h2></b> 
     <b> <h2>PHONE</h2></b> 
     <b> <h2>EMAIL</h2></b> 
     <b> <h2>CATEGORY</h2></b> 
     <b> <h2>DATE</h2></b> 
    </div>
      {data.map((item,i )=>{
        return(
        <div key={i} className='visit2'>
          <p>{item._id}</p>
          <p>{item.name}</p>
          <p>{item.phone}</p>
          <p>{item.email}</p>
          <p>{item.category}</p>
          <p>{item.date}</p>
        </div>
)})}

    </div>
    </div>
   
  );
}


export default Appointment


 



 



 
