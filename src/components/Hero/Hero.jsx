import React from 'react';
import './Hero.css';
import hand_icon from '../Assets/hand_icon.png'; // Ensure the correct import
import image1_image from '../Assets/hero_image.png';

const Hero = () => {
  return (
    <div className='Hero'>
      <div className='Hero__left'>
        <h2>New Arrivals Only</h2>
        <div>
          <div className="hand-icon">
            <p>New</p>
            <img src={hand_icon} alt="Hand Icon" />
          </div>
          <p>Collection</p>
          <p>For Everyone</p>
        </div>
        <div className='Hero-latest-btn'>
          <button>New Collection</button>
        </div>
      </div>
      <div className='Hero-right'>
       <img src={image1_image} alt="" />
      </div>
    </div>
  );
}

export default Hero;
