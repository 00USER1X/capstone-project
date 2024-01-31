import React from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';
import SearchOptions from './components/SearchOptions';


function App() {
  const backgroundStyle = {
    backgroundImage: `url('https://i.ytimg.com/vi/jnGMmqolUD0/maxresdefault.jpg')`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'top center',
    backgroundSize: 'contain',
    backgroundColor: '#f2f2f2',
    paddingTop: '180px',
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
