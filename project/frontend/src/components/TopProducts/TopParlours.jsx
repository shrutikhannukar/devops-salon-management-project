// import React from 'react'
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const TopParlours = () => {
  const [parlourlist, setparlourlist] = useState([]);

  let getParlours = () => {
    axios
      .get("http://localhost:7000/api/parlour/getallparlours")
      .then((res) => res.data)
      .then((finalres) => {
        console.log(finalres);
        setparlourlist(finalres);
      });
  };
  useEffect(() => {
    getParlours();
  }, []);

  return (
    <>
      <div className="mt-14 mb-12 ml-36">
        <div className="container">
          {/* Header section */}
          <div className=" mb-10 pl-80 max-w-[600px] mx-auto">
            <h1 data-aos="fade-up" className="text-3xl font-bold ">
              Best Parlours
            </h1>
          </div>
          <div className="grid grid-cols-5 gap-6  pb-9 ">
            {parlourlist.map((item, i) => {
              return (
                <div
                  key={i}
                  data-aos="fade-up"
                  className="h-[220px] w-[70%] mb-8"
                >
                  <Link to={item.weblink}>
                    <img
                      className="h-[220px] w-[150px] object-cover rounded-md"
                      alt=""
                      src={item.images}
                    />
                    <h4 className="text-2xl pt-2 ">
                      <b>{item.parlourname}</b>
                    </h4>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default TopParlours;
