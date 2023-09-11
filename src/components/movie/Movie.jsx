import React from 'react';
import moviecover from '../../Images/moviecover.jpg';
import { useNavigate } from 'react-router-dom';

const Movie = ({ allMovies }) => {
  const navigate = useNavigate();
  return (
    <div className="allmovies">
      {allMovies &&
        allMovies.map((movie) => (
          <div onClick={() => navigate(`/${movie.id}`)}>
            <img
              src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
              alt=""
            />
            <p>USA 2016-current</p>
            <h3>{movie.name}</h3>
            <div>
              <p>8.0/10</p>
              <p>8.0/10</p>
            </div>
            <p>Action</p>
          </div>
        ))}
    </div>
  );
};

export default Movie;
