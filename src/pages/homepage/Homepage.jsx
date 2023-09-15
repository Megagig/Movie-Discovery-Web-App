import React, { useState, useEffect } from 'react';

import Header from '../../components/header/Header';
import Movie from '../../components/movie/Movie';
import Footer from '../../components/footer/Footer';

const Homepage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [allMovies, setAllMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [error, setError] = useState('');
  useEffect(() => {
    getMovies();
    getAllMovies();
  }, []);
  async function getMovies() {
    const response = await fetch('');
    const data = await response.json();
    // setMovies(data.results);
  }

  async function movieSearch() {
    setLoading(true);
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=93995a9232ad6ced80265faeafc129b6&query=${searchTerm}`
    );
    const data = await response.json();
    if (response) setLoading(false);
    if (response.ok) setAllMovies(data.results.slice(0, 10));
    if (!response.ok) setError('Something went wrong, please try again latter');
    console.log(searchTerm);
  }

  async function getAllMovies() {
    setLoading(true);
    const response = await fetch(
      'https://api.themoviedb.org/3/movie/top_rated?api_key=c012f0436866bbf5f024bee3107b5b7d&language=en-US&page=1'
    );
    const data = await response.json();
    if (response) setLoading(false);
    if (response.ok) setAllMovies(data.results.slice(0, 10));
    if (!response.ok) setError('Something went wrong, please try again latter');
  }
  return (
    <div>
      <Header
        setSearchTerm={setSearchTerm}
        movieSearch={movieSearch}
        error={error}
      />
      <Movie allMovies={allMovies} loading={loading} error={error} />

      <Footer />
    </div>
  );
};

export default Homepage;
