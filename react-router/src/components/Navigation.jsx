//Header
import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const navLinkStyles = {color: 'white'} //thay màu mặc định 

  return (
    <nav>
      <h3>Logo</h3>
      <ul className ='nav-link'>
        <li>
          <Link to="/" style={navLinkStyles}> 
            Home
            </Link>
        </li>
        <li>
          <Link to="/products" style={navLinkStyles}>
            Products
            </Link>
        </li>
        <li>
          <Link to="/about" style={navLinkStyles}>
            About
            </Link>
        </li>
      </ul>
    </nav>
  )
}
export default Navigation