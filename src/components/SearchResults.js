import React from 'react';

function SearchResults({ results }) {
  if (!results || results.length === 0) {
    return <div>No results available</div>;
  }

  return (
    <div className="search-results">
      {results.map((result, index) => (
        <div key={index} className="result-item">
          <a href={result.link} target="_blank" rel="noopener noreferrer">
            {result.title}
          </a>
          <p>{result.snippet}</p>
        </div>
      ))}
    </div>
  );
}

export default SearchResults;


