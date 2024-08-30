// src/App.js

import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Corrigido a duplicação e importação correta
import Navbar from './components/Navbar';
import Home from './components/Home';
import MovieDetail from './components/MovieDetail';

function App() {
  const handleSearch = (searchTerm) => {
    console.log('Termo de pesquisa:', searchTerm);
    // Chame a API do TMDB com o termo de pesquisa aqui
  };

  return (
    <div className="App">
      <Navbar onSearch={handleSearch} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
      </Routes>
    </div>
  );
}


export default App;
