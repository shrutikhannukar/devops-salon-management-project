// import React from 'react'
import "../Admin.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {
  BsFillBellFill,
  BsPersonCircle,
  BsSearch,
  BsJustify,
} from "react-icons/bs";

const DashHeader = ({ OpenSidebar }) => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.clear();
    alert("Logout Successfully");
    navigate("login");
  };

  return (
    <header className="dashheader">
      <div className="menu-dashicon">
        <BsJustify className="dashicon" onClick={OpenSidebar} />
      </div>
      <div className="header-left">
        <BsSearch className="dashicon" />
      </div>
      <div className="header-right">
        <button>
          <Link to="/notifications">
            <BsFillBellFill className="dashicon" />
          </Link>
        </button>

        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className=" btn-circle avatar">
            <div className=" w-10 h-10 rounded-full ml-1 ">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between">
                Profile
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
    </header>
  );
};

export default DashHeader;
