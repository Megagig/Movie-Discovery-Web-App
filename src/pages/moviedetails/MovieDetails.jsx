import React from 'react';
import { useState, useEffect } from 'react';

import { useParams } from 'react-router-dom';

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState();
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

  return (
    <div>
      {movie && (
        <div className="movieDetail">
          <img
            src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
            alt=""
          />
        </div>
      )}
    </div>
  );
};

export default MovieDetails;
