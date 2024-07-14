import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './App.css';

function H2() {
    const navigate = useNavigate();
    const goToPage = () => {
        navigate('/Home');
      };
    
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
          <Link to="/Contact">Contact</Link>
        </li>

        <li>
          <Link to="/logout"> <button onClick={goToPage()}>logout</button></Link>
         
         </li>
      </ul>
    </nav>

  
    </div>
    
  );
}

export default H2;
