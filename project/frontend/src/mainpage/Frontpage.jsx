// import React from 'react'
// import {NavLink} from "react-router-dom"
import Navbar1 from '../components/Navbar/Navbar1'

// import Header from '../navbar/Header'
import './Frontpage.css'

const Frontpage = () => {
  return (
    <div className="header1">
         {/* <header className="header"> */}
            <div >
                {/* <div className="logo1">
                    <NavLink to="/">Beauty</NavLink>

                </div> */}
                <Navbar1/>
            </div>

            {/* <nav>
                <ul>
                    <button className="navbtn"><li><NavLink to="/register">Add Parlour</NavLink></li></button>
                    <button className="navbtn"><li><NavLink to="/login">Log in</NavLink></li></button>
                    <button className="navbtn mr-12"><li><NavLink to="/sign_up">Sign up</NavLink></li></button>
                    
                </ul>
            </nav> */}
        {/* </header> */}
        
        {/* <div className="content">
            <h1 className="text-4xl pl-12 font-serif"><b>Parlour Name</b></h1>
            <br/>
            <p className="text-2xl font-serif "> Find the best Parlours, Salons<br/> 
                      &nbsp; &nbsp; &nbsp; &nbsp; and Spa in Near city</p>

        </div>  */}
{/* <Content/> */}
    </div>
  )
}

export default Frontpage