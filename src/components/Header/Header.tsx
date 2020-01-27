import React from 'react';
import PropTypes from 'prop-types';

import searchIcon from '../../assets/search-icon.svg';

import './Header.css';

interface SearchProps {
  updateQuery: any;
}

const Header: React.FC<SearchProps> = ({ updateQuery }) => (
  <header className="header">
    <div className="logo-container">
      <a href="#home" className="logo">nevermark</a>
    </div>
    <div className="search-bar-container">
      <div className="search-icon-container">
        <img src={searchIcon} alt="Search Icon" className="search-icon" />
      </div>
      <div className="search-input-container">
        <input
          className="search-bar"
          spellCheck="false"
          autoComplete="off"
          name="query"
          placeholder="Search"
          type="text"
          onChange={updateQuery}
        />
      </div>
    </div>
    <nav className="header-nav">
      <ul className="nav-list">
        <li className="nav-element"><a href="#settings" className="settings-link">Settings</a></li>
        <li className="nav-element last"><a href="#settings" className="settings-link">Logout</a></li>
      </ul>
    </nav>
  </header>
);

Header.propTypes = {
  updateQuery : PropTypes.func.isRequired,
};

export default Header;