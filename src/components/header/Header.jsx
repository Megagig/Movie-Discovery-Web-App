import React from 'react';
import Nav from '../nav/Nav';
import moviecover from '../../assets/Poster.png';
import descriptionBox from '../../assets/Description Box.png';

const Header = ({ setSearchTerm, movieSearch }) => {
  return (
    <div className="header">
      <Nav setSearchTerm={setSearchTerm} movieSearch={movieSearch} />
      <div className="moviesample">
        <img src={descriptionBox} alt="" />
        <div className="moviesample">
          {/* <h3 className="text">John Wick 3: Parabelleum</h3> */}
          {/* <div>
            <p> 86.0/100</p>
            <p>97%</p>
          </div> */}
          {/* <p className="text">
            John Wick is the run after killing a memeber of the international
            assassins' guild, and with a $14 million price tag attached to his
            head, he is the target of a hit men and women everywhere.
          </p> */}
          {/* <div>Watch Trailler</div> */}
        </div>
      </div>
    </div>
  );
};

export default Header;
