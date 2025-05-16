import React from 'react'

// import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
// import Products from "../components/Products/Products";
import AOS from "aos";
import "aos/dist/aos.css";
import TopProducts from "../components/TopProducts/TopProducts";
import Banner from "../components/Banner/Banner";

import Testimonials from "../components/Testimonials/Testimonials";
import Footer from "../components/Footer/Footer";
import Popup from "../components/Popup/Popup";
import TopParlours from '../components/TopProducts/TopParlours';

const Firstpage = () => {
    const [orderPopup, setOrderPopup] = React.useState(false);

 
    React.useEffect(() => {
      AOS.init({
        offset: 100,
        duration: 800,
        easing: "ease-in-sine",
        delay: 100,
      });
      AOS.refresh();
    }, []);
  return (
    <div>
         <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
      {/* <Navbar /> */}
      <Hero  />
      {/* <Products /> */}
      <TopParlours/>
      <TopProducts />
      <Banner />
      <Testimonials />
      <Footer />
      <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
    </div>
    </div>
  )
}

export default Firstpage

