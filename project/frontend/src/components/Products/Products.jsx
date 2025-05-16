// import React from "react";
import Img1 from "../../assets/women/20.jpg";
import Img2 from "../../assets/women/19.jpg";
import Img3 from "../../assets/women/18.jpg";
import Img4 from "../../assets/women/17.jpg";
import { FaStar } from "react-icons/fa6";
import {Link} from 'react-router-dom'

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Naturals",
    rating: 5.0,
   
  },
  {
    id: 2,
    img: Img2,
    title: "Dipak salon",
    rating: 4.5,
  
  },
  {
    id: 3,
    img: Img3,
    title: "Lorel paris",
    rating: 4.7,
   
  },
  {
    id: 4,
    img: Img4,
    title: "Beauty store",
    rating: 4.4,
   
  },
  {
    id: 5,
    img: Img2,
    title: "The Looks",
    rating: 4.5,
    
  },
];

const Products = () => {
  return (
    <div className="mt-14 mb-12">
      <div className="container">
        {/* Header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
        
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Best Parlours
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
            asperiores modi Sit asperiores modi
          </p>
        </div>
        {/* Body section */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
            {/* card section */}
            {ProductsData.map((data) => (
              <div
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                key={data.id}
                className="space-y-3"
              ><Link to="/page">
                <img
                  src={data.img}
                  alt=""
                  className="h-[220px] w-[150px] object-cover rounded-md"
                /></Link>
                <div>
                  <h3 className="font-semibold">{data.title}</h3>
                  <p className="text-sm text-gray-600">{data.color}</p>
                  <div className="flex items-center gap-1">
                    <FaStar className="text-yellow-400" />
                    <span>{data.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
         
       
        </div>
      </div>
    </div>
  );
};

export default Products;
