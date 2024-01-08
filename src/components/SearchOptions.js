import React from 'react';
import './SearchOptions.css';

function SearchOptions() {
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
    </div>
  );
}

export default SearchOptions;
