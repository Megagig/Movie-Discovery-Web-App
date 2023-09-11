import React from 'react';
import Nav from '../nav/Nav';
import moviecover from '../../Images/Banner.jpg';

const Header = () => {
  return (
    <div className="header">
      <Nav />
      <div>
        <h3>John Wick 3: Parabelleum</h3>
        <div>
          <p>86.0/100</p>
          <p>97%</p>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
          facilis, delectus eius obcaecati aut dolorem et odio provident quod
          maiores.
        </p>
        <div>Watch Trailler</div>
      </div>
    </div>
  );
};

export default Header;
