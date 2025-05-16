import { useState, useEffect } from "react";
import axios from "axios";
import DashHeader from "./dash_Components/DashHeader";
import Sidebar from "./dash_Components/Sidebar";
const Parlours = () => {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    console.log("ji");
    try {
      const result = await axios.get(
        "http://localhost:7000/api/parlour/getallparlours"
      );
      console.log("result=" + result);
      setData(result.data);
      // setData("");
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  useEffect(() => {
    fetchData();
  }, []); // Empty array means this effect runs once when the component mounts

  return (
    <div className="grid-container body">
      <DashHeader OpenSidebar={OpenSidebar} />
      <Sidebar
        openSidebarToggle={openSidebarToggle}
        OpenSidebar={OpenSidebar}
      />

      <div>
        <div className="parlour1">
          <b>
            <h2>PARLOUR_NAME</h2>
          </b>
          <b>
            {" "}
            <h2>CITY</h2>
          </b>
          <b>
            {" "}
            <h2>OWNER_NAME</h2>
          </b>
          <b>
            {" "}
            <h2>EMAIL</h2>
          </b>
          <b>
            {" "}
            <h2>PHONE_NO.</h2>
          </b>
          <b>
            {" "}
            <h2>ADDRESS</h2>
          </b>
        </div>
        
        {data.map((item, i) => {
          return (
            <div key={i} className="parlour2">
              <p>{item.parlourname}</p>
              <p>{item.city}</p>
              <p>
                {item.fname}
                {item.lname}
              </p>
              <p>{item.email}</p>
              <p>{item.number}</p>
              <p>{item.address}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Parlours;
