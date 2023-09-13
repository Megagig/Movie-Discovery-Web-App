import React from 'react';
import moviecover from '../../assets/moviecover.jpg';
import { useNavigate } from 'react-router-dom';
import loader from '../../assets/loader.gif';

const Movie = ({ allMovies, loading }) => {
  const navigate = useNavigate();
  return (
    <div className="allmovies">
      {loading && (
        <div className="loader">
          <img src={loader} alt="" />
        </div>
      )}
      {allMovies &&
        allMovies.map((movie) => (
          <div onClick={() => navigate(`/${movie.id}`)}>
            <img
              src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
              alt=""
            />
            <p>{movie.release_date}</p>
            <h3>{movie.original_title}</h3>

            <p>Action</p>
          </div>
        ))}
    </div>
  );
};

export default Movie;
