import React from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';
import SearchOptions from './components/SearchOptions';


function App() {
  const backgroundStyle = {
    backgroundImage: `url('https://pngimg.com/d/google_PNG19642.png')`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'top center',
    backgroundSize: 'contain',
    backgroundColor: '#f2f2f2',
    paddingTop: '50px',
  };

  return (
    <div className="app" style={backgroundStyle}>
      <div className="header">
        <SearchBar />
        <SearchOptions />
      </div>
      <SearchResults />
    </div>
  );
}

export default App;
