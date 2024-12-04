import React, { useState } from 'react';
import './Nav.css';

const NavbarWithSearch = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    alert(`Searching for: ${searchQuery}`);
    // You can integrate with your search logic or API here
    setSearchQuery('');
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="/">MyLogo</a>
      </div>

      <div className="navbar-links">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/addcontact">ADD CONTACT</a></li>
        </ul>
      </div>

      <form className="search-form" onSubmit={handleSearchSubmit}>
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="search-input"
        />
        <button type="submit" className="search-button">SEARCH<i className="fas fa-search"></i>
        </button>
      </form>
    </nav>
  );
};

export default NavbarWithSearch;
