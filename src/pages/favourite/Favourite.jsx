import React from 'react';

const Favourite = () => {
  const favouriteMovie = JSON.parse(localStorage.getItem('favouriteMovie'));
  return (
    <div>
      <h1>Favourite</h1>
      <ul>
        {favouriteMovie.map((movie) => (
          <div>
            <div className="movie-img">
              <img
                src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                alt=""
                width="50%"
              />
            </div>
            <li>{movie.title}</li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Favourite;
