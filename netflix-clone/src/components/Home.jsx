import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MovieSection from './MovieSection';
import './Home.css'; // Importe o arquivo de estilos

function Home() {
  const [topRated, setTopRated] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [actionMovies, setActionMovies] = useState([]);
  const [comedyMovies, setComedyMovies] = useState([]);
  const [popularTV, setPopularTV] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        console.log('API Key:', process.env.REACT_APP_TMDB_API_KEY);

        const topRatedResponse = await axios.get(
          `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=1`
        );
        setTopRated(topRatedResponse.data.results);

        const popularMoviesResponse = await axios.get(
          `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=1`
        );
        setPopularMovies(popularMoviesResponse.data.results);

        const actionMoviesResponse = await axios.get(
          `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&with_genres=28`
        );
        setActionMovies(actionMoviesResponse.data.results);

        const comedyMoviesResponse = await axios.get(
          `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&with_genres=35`
        );
        setComedyMovies(comedyMoviesResponse.data.results);

        const popularTVResponse = await axios.get(
          `https://api.themoviedb.org/3/tv/popular?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=1`
        );
        setPopularTV(popularTVResponse.data.results);

      } catch (error) {
        console.error('Erro ao buscar os dados da API do TMDB:', error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div className="home">
      <MovieSection title="Mais Votados" movies={topRated} />
      <MovieSection title="Populares" movies={popularMovies} />
      <MovieSection title="Ação" movies={actionMovies} />
      <MovieSection title="Comédias" movies={comedyMovies} />
      <MovieSection title="Séries Populares" movies={popularTV} />
    </div>
  );
}

export default Home;
