import React from 'react'
import './Hero.css'
import hand_icon from '../Assets/hand_icon.png'
import arrow_icon from '../Assets/arrow.png'
import hero_image from '../Assets/hero_image.png'
import logo from '../Assets/ecommerce-seo-packages.png'

function Hero() {
  return (
    <div className='hero'>
      <div className="hero-left">
        <h2>NEW ARRIVALS <span >ONLY</span></h2>

        <div className="hero-hand-icon">
          <p>New</p>
          {/* <img src={hand_icon} alt="hand icon" /> */}
        </div>

        <p>Collection</p>
        <p>For Everyone</p>

        {/* Moved here so it's below everything */}
        <div className="hero-latest-btn">
          <div>Latest Collection</div>
          <img src={arrow_icon} alt="arrow icon" />
        </div>
      </div>

      <div className="hero-right">
        <img src={logo} alt="hero" />
      </div>

    </div>
  )
}

export default Hero
