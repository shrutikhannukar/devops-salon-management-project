

const About = () => {
   return (
      <section className="about" id="about">
             <h1 className="heading">about us</h1>
 
 <div className="row" >
 
     <div className="image">
         <img src="about.jpg" alt=""/>
     </div>
 
     <div className="content">
         <h3 className="title">We are a group of stylists</h3>
         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mauris dolor, gravida a varius blandit,
            auctor eget purus. Phasellus scelerisque sapien sit amet mauris laoreet, eget scelerisque nunc cursus.
             Duis ultricies malesuada leo vel aliquet. Curabitur rutrum porta dui eget mollis. Nullam lacinia dictum auctor.</p>        
         <p>className aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Orci varius natoque penatibus et magnis dis parturient montes.</p>
         
         <div className="icons-container">
             <div className="icons">
                <img src="about-icon-1.png" alt=""/>
                <h3>Professional tools</h3>
             </div>
             <div className="icons">
                <img src="about-icon-2.png" alt=""/>
                <h3>quality products</h3>
             </div>
             <div className="icons">
                <img src="about-icon-3.png" alt=""/>
                <h3>hair washing</h3>
             </div>
          </div>
     </div>
 
 </div>
 
 </section>
   )
 }
 
 export default About