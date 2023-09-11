import React, { useState, useEffect } from 'react';

import Header from '../../components/header/Header';
import Movie from '../../components/movie/Movie';

const Homepage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [allMovies, setAllMovies] = useState([]);
  useEffect(() => {
    getMovies();
    getAllMovies();
  }, []);
  async function getMovies() {
    const response = await fetch(
      'https://api.themoviedb.org/3/movie/popular?api_key=c012f0436866bbf5f024bee3107b5b7d&language=en-US&page=1'
    );
    const data = await response.json();
    // setMovies(data.results);
    console.log(data);
  }

  async function getAllMovies() {
    const response = await fetch(
      'https://api.themoviedb.org/3/trending/all/day?api_key=c012f0436866bbf5f024bee3107b5b7d&language=en-US'
    );
    const data = await response.json();
    if (response.ok) setAllMovies(data.results);
    console.log(data);
  }
  return (
    <div>
      <Header />
      <Movie allMovies={allMovies} />
    </div>
  );
};

export default Homepage;
