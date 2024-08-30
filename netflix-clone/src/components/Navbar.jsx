// src/components/Navbar.js

import React, { useState } from 'react';

function Navbar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    if (searchTerm.trim()) {
      onSearch(searchTerm);
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="/">NetFlix Clone</a> {/* Altere o texto para o nome do seu projeto */}
      </div>
      <form className="navbar-search" onSubmit={handleSearchSubmit}>
        <input
          type="text"
          placeholder="Buscar..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <button type="submit">Pesquisar</button>
      </form>
    </nav>
  );
}

export default Navbar;
