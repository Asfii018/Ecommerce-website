import React from 'react';
import { Link } from 'react-router-dom'; // Ensure this import statement is present
import './Navbar.css';

import logo from '../Assets/th.jpeg';
import cart_icon from '../Assets/cart_icon.jpeg';

export default function Navbar() {
  return (
    <div className='navbar'>
      <div className="nav_logo">
        <img src={logo} alt="Logo" />
        <p>SHOPPER</p>
      </div>
      <ul className='Nav-menu'>
        <li><Link style={{textDecoration :'none'}}  to='/'>Shop</Link></li>
        <li><Link style={{textDecoration :'none'}}  to='/Mens'>Mens</Link></li>
        <li><Link style={{textDecoration :'none'}}  to='/Womens'>Womens</Link></li>
        <li><Link style={{textDecoration :'none'}}  to='/Kids'>Kids</Link></li>
      </ul>
      <div className='Nav-login-cart'>
        <Link style={{textDecoration :'none'}}  to='/Login'><button>Login</button></Link>
        <Link style={{textDecoration :'none'}}  to='/Cart'><img src={cart_icon} alt="Cart Icon" /></Link>
      </div>
    </div>
  );
}
