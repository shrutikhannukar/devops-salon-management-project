// import React from 'react'

const Footer = () => {
  return (
    <section className="footer">

    <div className="box-container">
 
       <div className="box">
          <h3> Find us here </h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, voluptatem.</p>
          <div className="share">
             <a href="#" className="fab fa-facebook-f"></a>
             <a href="#" className="fab fa-twitter"></a>
             <a href="#" className="fab fa-instagram"></a>
             <a href="#" className="fab fa-linkedin"></a>
          </div>
       </div>
 
       <div className="box">
          <h3>contact us</h3>
          <p>+61 (0) 3 8376 6284</p>
          <a href="#" className="link">ninjashub4@gmail.com</a>
       </div>
 
       <div className="box">
          <h3>localization</h3>
          <p>230 Point of the Pines Dr <br/>
            Colorado Springs <br/>
            United States</p>
       </div>
 
    </div>
 
    <div className="credit"> created by <span>ninjashub</span> | all rights reserved! </div>
 
 </section>
  )
}

export default Footer