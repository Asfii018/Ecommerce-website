import React from 'react';
import './Offers.css'; // Corrected import path
import ExclusiveImage from '../Assets/exclusive_image.png';

const Offers = () => {
  return (
    <div className='Offers'>
      <div className="offers-lift">
        <h1>EXCLUSIVE OFFERS FOR YOU</h1>
        <p>ONLY ON BEST SELLER PRODUCTS</p>
        <button>CHECK NOW</button>
      </div>
      <div className="offers-right">
        <img src={ExclusiveImage} alt="Exclusive Offer" />
      </div>
    </div>
  );
};

export default Offers;
