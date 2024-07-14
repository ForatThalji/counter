import React from 'react';
import { Link } from 'react-router-dom';
import Signup from './Signup';

import './App.css';

function Header() {
  return (
    <div>
<nav className="topnav">
      <ul>
       
        <li>
        
          <Link to="/Home">Home</Link>
         
        </li>
        
        <li>
          <Link to="/About">About</Link>
        </li>

        <li>
          <Link to="/Catalog">Catalog</Link>
        </li>
        <li>
          <Link to="/Contact">Contact</Link>
        </li>

        <li>
          <Link to="/Signup"> <button >Sign up</button></Link>
         
         </li>
      </ul>
    </nav>

  
    </div>
    
  );
}

export default Header;
