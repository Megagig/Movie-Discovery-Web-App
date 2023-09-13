import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Nav = ({ setSearchTerm, movieSearch }) => {
  const navigate = useNavigate();

  return (
    <nav>
      <a href="/">
        <i class="ri-movie-fill"></i>
        <span>MovieBox</span>
      </a>
      <div className="search">
        <input
          type="text"
          placeholder="What do you want to watch?"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <i class="ri-search-line" onClick={movieSearch}></i>
      </div>
      <div className="signin" onClick={() => navigate('/favourite')}>
        <p>Favourite</p>
        <i class="ri-menu-line"></i>
      </div>
    </nav>
  );
};

export default Nav;
