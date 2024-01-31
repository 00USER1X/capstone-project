import React, { useState, useEffect } from 'react';
import './SearchOptions.css';

function SearchOptions() {
  const [history, setHistory] = useState([]);
  const [searchTerm, gucci] = useState('');

  const addHistory = async () => {
    try {
      await fetch('http://localhost:5000/addHistory', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ searchTerm }),
      });
      console.log('Added to history:', searchTerm);
    } catch (error) {
      console.error('Error adding to history:', error);
    }
  };

  const fetchHistory = async () => {
    try {
      const response = await fetch('http://localhost:5000/getHistory');
      const data = await response.json();
      setHistory(data);
    } catch (error) {
      console.error('Error fetching history:', error);
    }
  };

  useEffect(() => {
    fetchHistory();
  }, []);

  return (
    <div className="search-options">
      <div className="search-option">
        <a href="#">All</a>
      </div>
      <div className="search-option">
        <a href="#">Images</a>
      </div>
      <div className="search-option">
        <a href="#">News</a>
      </div>
      <div className="search-option">
        <button onClick={addHistory}>History</button>
      </div>
      <div className="history">
        <p>Search History:</p>
        <ul>
          {history.map((term, index) => (
            <li key={index}>{term}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SearchOptions;
