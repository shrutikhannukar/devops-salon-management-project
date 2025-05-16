import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./forms/Login";
import Sign_up from "./forms/Sign_up";
import { Register } from "./forms/Register";
import Secondpage from "./mainpage/Secondpage";
import Frontpage from "./mainpage/Frontpage";
import Visit from "./pages/Visit";
import Blog from "./pages/Blog";
import Services from "./pages/Services";
import About from "./pages/About";
import Home from "./pages/Home";
import Review from "./pages/Review";
import Firstpage from "./mainpage/Firstpage";
import Admin from "./Admin_dashboard/Admin";
import DashHome from "./Admin_dashboard/dash_Components/DashHome";
import Appointment from "./Admin_dashboard/Appointment";
import Parlours from "./Admin_dashboard/Parlours";
import Customers from "./Admin_dashboard/Customers";
import Forms from "./Admin_dashboard/Forms";
import Reports from "./Admin_dashboard/Reports";
import Setting from "./Admin_dashboard/Setting";
import Notifications from "./Admin_dashboard/Notifications";
import Profile from "./Admin_dashboard/Profile";



function App() {
  

  return (
    <>
   <div className="frontimage">
    <BrowserRouter>
    <Frontpage/>

      <Routes>

      <Route path="/login" element={<Login/>} />
        <Route path="/sign_up" element={<Sign_up/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/page" element={<Secondpage/>} /> 
        <Route path="/home" element={<Home/>} /> 
        <Route path="/about" element={<About/>} /> 
        <Route path="/services" element={<Services/>} /> 
        <Route path="/blog" element={<Blog/>} /> 
        <Route path="/visit" element={<Visit/>} /> 
        <Route path="/review" element={<Review/>} /> 
        <Route path="/beauty_icon" element={<Firstpage/>} /> 

        {/* admin dashboard */}
        <Route path="/dashboard" element={<DashHome/>}/>
        <Route path="/appointment" element={<Appointment/>}/>
        <Route path="/parlour" element={<Parlours/>}/>
        <Route path="/customers" element={<Customers/>}/>
        <Route path="/forms" element={<Forms/>}/>
        <Route path="/reports" element={<Reports/>}/>
        <Route path="/setting" element={<Setting/>}/>
        <Route path="/notifications" element={<Notifications/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/admin" element={<Admin/>} />             
       
        </Routes>
  </BrowserRouter>
  </div> 
  
 

    </>
  )
}

export default App



