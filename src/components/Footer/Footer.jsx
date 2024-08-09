import React from 'react'
import './Footer.css'
import Footer_logo from '../Assets/logo_big.png'
import instagram_icon from '../Assets/instagram_icon.png'
import pinterest_icon from '../Assets/pintester_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'


const Footer = () => {
  return (
    <div className='Footer'>
      <div className="Footer-logo">
        <img src={Footer_logo} alt="" />
        <p>SHOPPER</p>


      </div>
      <ul className="Footer-links">
        <li>Campany</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="Footer-social-icon">
        <div className="Footer-icon-container">
          <img src={instagram_icon} alt="" />
          
        </div>
        <div className="Footer-icon-container">
          <img src={pinterest_icon} alt="" />
          
        </div>
        <div className="Footer-icon-container">
          <img src={whatsapp_icon} alt="" />
          
        </div>
        
      </div>
      <div className="Footer-copyright">
          <hr />
         <p>Copyright @ 2024 - All Right Reserved.</p>
        </div>
    </div>
  )
}

export default Footer
