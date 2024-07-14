import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { databaseURL } from './firebaseConfig';
import './App.css';
import { useNavigate } from 'react-router-dom';
import Write from './write.js';

function Read() {
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

  const handleUpdate = (id) => {
    navigate('/update', { state: { id } });
  };
  
  const goToPage = () => {
    navigate('/write');
  };
  
  const handleSoftDelete = async (id) => {
    try {
      await axios.patch(`${databaseURL}/books/book/${id}.json`, { isDeleted: true });
      fetchData();
    } catch (error) {
      alert(`Error: ${error.message}`);
    }
  };

  return (
    <div className="read-container">
      {/* <button onClick={fetchData}>Refresh Data</button> */}
      <div className="card-container">
        {farray.map((item) => (
          <div className="card" key={item.id}>
            <h3>{item.fname}</h3>
            <p>{item.fdefi}</p>
            <div className="button-group">
              <button className="update-button" onClick={() => handleUpdate(item.id)}>Update</button>
              <button className="delete-button" onClick={() => handleSoftDelete(item.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
      <button className="add-button" onClick={goToPage}>Add</button>
    </div>
  );
}

export default Read;
