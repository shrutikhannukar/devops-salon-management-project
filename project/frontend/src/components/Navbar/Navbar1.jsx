// import React from "react";
// import { FaUserCircle } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";
// import { FaCartShopping } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Profile from "../../mainpage/image.jpg";

const Navbar1 = () => {
  const [inputText, setInputText] = useState("");
  let inputHandler = (e) => {
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.clear();
    alert("Logout Successfully");
    navigate("login");
  };
  const user_local = localStorage.getItem("user");
  console.log("user1=" + user_local);
  const aa = JSON.parse(user_local);
  console.log("user2=" + aa);

  //6620bcbdd7e17f7f1c56ea9f
  return (
    <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40  ">
      {/* upper Navbar */}
      <div className="bg-primary/40 py-2 header">
        <div className="container flex justify-between items-center">
          <div>
            <a
              href="#"
              className="font-bold text-2xl sm:text-3xl flex gap-2 text-black"
            >
              Beauty Icon
            </a>
          </div>
          {aa || aa?.role != "User" ? (
            <div>
              <ul>
                <button className="text-2xl text-black">
                  <li>
                    <NavLink to="/page">Home</NavLink>
                  </li>
                </button>
                <button className="text-2xl text-black">
                  <li>
                    <NavLink to="/about">About Us</NavLink>
                  </li>
                </button>
                <button className="text-2xl text-black">
                  <li>
                    <NavLink to="/services">Services</NavLink>
                  </li>
                </button>
                <button className="text-2xl text-black">
                  <li>
                    <NavLink to="/visit">Visit</NavLink>
                  </li>
                </button>
                <button className="text-2xl text-black">
                  <li>
                    <NavLink to="/register">Add Parlour</NavLink>
                  </li>
                </button>
                <button className="text-2xl text-black">
                  <li>
                    <NavLink to="/login">Log in</NavLink>
                  </li>
                </button>
                <button className="text-2xl text-black">
                  <li>
                    <NavLink to="/sign_up">Sign up</NavLink>
                  </li>
                </button>
              </ul>
            </div>
          ) : (
            <h1></h1>
          )}
          {aa || aa?.role == "User" ? (
            // search bar
            <div className="flex justify-between items-center gap-4">
              <div
                className="haru-search-wrap pl-20"
                data-hint-message="Please type at least 3 character to search..."
              >
                <div className="relative group hidden sm:block">
                  <input
                    type="search"
                    onChange={inputHandler}
                    placeholder="search for ..."
                    className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all
                 duration-300 rounded-full border border-gray-300 px-2 py-1 
                 focus:outline-none focus:border-1 focus:border-primary
                  dark:border-gray-500 dark:bg-gray-800  "
                  />
                  <button type="submit">
                    <IoMdSearch
                      className="text-gray-500 group-hover:text-primary 
              absolute top-1/2 -translate-y-1/2 right-3"
                    />
                  </button>
                </div>
              </div>

              {/* add to favorate button */}
              <button
                className="bg-gradient-to-r from-primary to-secondary transition-all
               duration-200 text-white  py-1 px-4 rounded-full flex items-center gap-3 group"
              >
                <span className="group-hover:block hidden transition-all duration-200">
                  Favourite
                </span>
                <FaHeart className="text-xl text-white drop-shadow-sm cursor-pointer" />
              </button>

              {/* profile */}

              <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className=" btn-circle avatar">
                  <div className="w-20 rounded-full">
                    <span className="group-hover:block hidden transition-all duration-200">
                      Profile
                    </span>
                    <img alt="Tailwind CSS Navbar component" src={Profile} />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
                >
                  <li>
                    <a className="justify-between">
                      profile
                      <span className="badge">New</span>
                    </a>
                  </li>
                  <li>
                    <a>Settings</a>
                  </li>
                  <li onClick={handleLogout}>
                    <a>Logout</a>
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            <h1></h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar1;
