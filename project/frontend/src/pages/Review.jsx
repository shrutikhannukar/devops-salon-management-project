

const Review = () => {
  return (
    <section className="review" id="review">
            {/* Your review content here */}
            <h1 className="heading">Customer&apos;s Review</h1>

<div className="box-container">

    <div className="box">
        <img src="quote-img.png" alt="" className="quote"/>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi nulla sit libero nemo fuga sequi nobis? Necessitatibus aut laborum, nisi quas eaque laudantium consequuntur iste ex aliquam minus vel? Nemo.</p>
        <img src="review-1.png" className="user" alt=""/>
        <h3>derek rude</h3>
        <div className="stars">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star-half-alt"></i>
        </div>
    </div>

    <div className="box">
        <img src="quote-img.png" alt="" className="quote"/>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi nulla sit libero nemo fuga sequi nobis? Necessitatibus aut laborum, nisi quas eaque laudantium consequuntur iste ex aliquam minus vel? Nemo.</p>
        <img src="review-2.png" className="user" alt=""/>
        <h3>jenny white</h3>
        <div className="stars">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star-half-alt"></i>
        </div>
    </div>
    
    <div className="box">
        <img src="quote-img.png" alt="" className="quote"/>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi nulla sit libero nemo fuga sequi nobis? Necessitatibus aut laborum, nisi quas eaque laudantium consequuntur iste ex aliquam minus vel? Nemo.</p>
        <img src="review-3.png" className="user" alt=""/>
        <h3>kate mudton</h3>
        <div className="stars">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star-half-alt"></i>
        </div>
    </div>

</div>
        </section>
  )
}

export default Review