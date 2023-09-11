import React from 'react';

const Nav = () => {
  return (
    <nav>
      <a href="/">
        <i class="ri-movie-fill"></i>
        <span>MovieBox</span>
      </a>
      <div className="search">
        <input type="text" placeholder="What do you want to watch?" />
        <i class="ri-search-line"></i>
      </div>
      <div className="signin">
        <p>Sign in</p>
        <i class="ri-menu-line"></i>
      </div>
    </nav>
  );
};

export default Nav;
