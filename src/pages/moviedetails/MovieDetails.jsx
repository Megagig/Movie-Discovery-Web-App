import React from 'react';
import { useState, useEffect } from 'react';

import { useParams } from 'react-router-dom';

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState();
  const favouriteMovie =
    JSON.parse(localStorage.getItem('favouriteMovie')) || [];
  //   const [loading, setLoading] = useState(false);
  useEffect(() => {
    getMovie();
  }, []);

  async function getMovie() {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=c012f0436866bbf5f024bee3107b5b7d&language=en-US`
    );
    const data = await response.json();
    setMovie(data);
    console.log(data);
  }

  const addToFavourite = () => {
    favouriteMovie.push(movie);
    localStorage.setItem('favouriteMovie', JSON.stringify(favouriteMovie));
    console.log(favouriteMovie);
  };

  return (
    <div>
      {movie && (
        <div className="movieDetail">
          <div className="movie-img">
            <img
              src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
              alt=""
              width="50%"
            />
          </div>
          <div className="movie-info">
            <h2>{movie.title}</h2>

            <p>{movie.release_date}</p>
            <p className="runtime">{movie.runtime} minuites</p>
            <p className="overview">{movie.overview}</p>
            <button className="favourite-btn" onClick={addToFavourite}>
              Add to Favourite
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieDetails;
