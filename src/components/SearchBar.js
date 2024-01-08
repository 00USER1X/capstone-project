import React, { useState } from 'react';
import './SearchBar.css';
import SearchResults from './SearchResults';

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();
    
    
    const apiKey = 'AIzaSyBVd6CLuXMJopr4z4K3IXJ2dCRHG-JGm4o';
    const cx = '40aff3f3f72844a0e'; 
    const url = `https://www.googleapis.com/customsearch/v1?key=${apiKey}&cx=${cx}&q=${searchTerm}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (data.items) {
          setSearchResults(data.items);
        }
      })
      .catch((error) => {
        console.error('Search error:', error);
      });
  };

  return (
    <div className="search-bar">
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search Google"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      {searchResults.length > 0 && <SearchResults results={searchResults} />}
    </div>
  );
}

export default SearchBar;


