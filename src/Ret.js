import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { databaseURL } from './firebaseConfig';
import './App.css';
import { useNavigate } from 'react-router-dom';
import Header from './Header';

function Ret() {
  const [farray, setFarray] = useState([]);
  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      const response = await axios.get(`${databaseURL}/books/book.json`);
      if (response.data) {
        setFarray(Object.entries(response.data).map(([id, data]) => ({ id, ...data })).filter(item => !item.isDeleted));
      } else {
        setFarray([]);
      }
    } catch (error) {
      alert(`Error: ${error.message}`);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="read-container">
  
      <Header />
      <div className="card-container">
        {farray.map((item) => (
          <div className="card" key={item.id}>
            <h3>{item.fname}</h3>
            <p>{item.fdefi}</p>
           
          </div>
        ))}
      </div>
    </div>
  );
}

export default Ret;
