import React from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';
import SearchOptions from './components/SearchOptions';


function App() {
  const backgroundStyle = {
    backgroundImage: `url('https://i.pinimg.com/1200x/80/16/aa/8016aa519d53f2953e677ae4d75b715a.jpg')`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'top center',
    backgroundSize: 'contain',
    backgroundColor: '#f2f2f2',
    paddingTop: '155px',
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
