import React, { useState, useEffect } from 'react';

import Header from '../../components/header/Header';
import Movie from '../../components/movie/Movie';
import Footer from '../../components/footer/Footer';

const Homepage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [allMovies, setAllMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  useEffect(() => {
    getMovies();
    getAllMovies();
  }, []);
  async function getMovies() {
    const response = await fetch('');
    const data = await response.json();
    // setMovies(data.results);
    console.log(data);
  }

  async function movieSearch() {
    setLoading(true);
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=93995a9232ad6ced80265faeafc129b6&query=${searchTerm}`
    );
    const data = await response.json();
    if (response) setLoading(false);
    if (response.ok) setAllMovies(data.results.slice(0, 10));
    console.log(searchTerm);
    console.log(data);
  }

  async function getAllMovies() {
    setLoading(true);
    const response = await fetch(
      'https://api.themoviedb.org/3/movie/top_rated?api_key=c012f0436866bbf5f024bee3107b5b7d&language=en-US&page=1'
    );
    const data = await response.json();
    if (response) setLoading(false);
    if (response.ok) setAllMovies(data.results.slice(0, 10));
    console.log(data);
  }
  return (
    <div>
      <Header setSearchTerm={setSearchTerm} movieSearch={movieSearch} />
      <Movie allMovies={allMovies} loading={loading} />
      <Footer />
    </div>
  );
};

export default Homepage;
