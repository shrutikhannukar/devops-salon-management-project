

const Blog = () => {
    return (
      <section className="blogs" id="blog">
      {/* Your blog content here */}
      <h1 className="heading"> our blogs </h1>
  
  <div className="box-container">
  
  <div className="box">
  <div className="image">
      <img src="blog1.jpg" alt=""/>
  </div>
  <div className="content">
      <a href="#" className="title">Styling hair service</a>
      <span>by admin / 19th july, 2021</span>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic aut eligendi, doloremque nihil sapiente fugit aliquam? Error nisi velit, a atque fugit laborum.</p>
  </div>
  </div>
  
  <div className="box">
  <div className="image">
      <img src="blog2.jpg" alt=""/>
  </div>
  <div className="content">
      <a href="#" className="title">Styling hair service</a>
      <span>by admin / 19th july, 2021</span>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic aut eligendi, doloremque nihil sapiente fugit aliquam? Error nisi velit, a atque fugit laborum.</p>
  </div>
  </div>
  
  <div className="box">
  <div className="image">
      <img src="blog3.jpg" alt=""/>
  </div>
  <div className="content">
      <a href="#" className="title">Styling hair service</a>
      <span>by admin / 19th july, 2021</span>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic aut eligendi, doloremque nihil sapiente fugit aliquam? Error nisi velit, a atque fugit laborum.</p>
      
  </div>
  </div>
  
  </div>
  </section>
    )
  }
  
  export default Blog