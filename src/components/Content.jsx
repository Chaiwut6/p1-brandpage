import React from 'react'
import './Content.css'
function Content() {
    return (
        <main className="hero">
            <div className="hero-content">
                <h1>YOUR FEET DESERVE THE BEST</h1>
                <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO 
                    HELP YOU WITH OUR SHOES.YOUR FEET DESERVE 
                    THE BEST AND WE’RE HERE TO HELP YOU WITH OUR 
                    SHOES.</p>

                <div className="hero-button">
                    <button>Shop Now</button>
                    <button className='secondary-button'>Category</button>
                </div>
                <div className="shopping">
                    <p>Also Available On</p>
                    <div className="brand-icon">
                        <img src="/images/amazon.png" alt="" />
                        <img src="/images/flipkart.png" alt="" />
                    </div>
                </div>
            </div>

            <div className="hero-image">
                <img src="/images/shoe_image.png" alt="" />
            </div>
        </main>
    )
}

export default Content