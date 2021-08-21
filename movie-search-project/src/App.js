import React from 'react';
import Header from './Header';
import './tailwind.css';
import SearchMovies from './Search';
import './App.css';

function App() {
  return (
    <div className="relative width-full">
      <div className="mx-auto overflow-hidden">
          <Header/>
          <SearchMovies/>
        </div>
    </div>
  );
}

export default App;
