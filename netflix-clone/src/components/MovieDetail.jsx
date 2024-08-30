// src/pages/MovieDetail.js

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function MovieDetail() {
  const { id } = useParams(); // Captura o ID do filme a partir da URL
  const [movieDetail, setMovieDetail] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Função para buscar detalhes do filme
    const fetchMovieDetail = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=YOUR_API_KEY&language=pt-BR`
        );
        if (!response.ok) {
          throw new Error('Erro ao buscar os detalhes do filme.');
        }
        const data = await response.json();
        setMovieDetail(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetail();
  }, [id]);

  if (loading) return <div>Carregando...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="movie-detail">
      {movieDetail && (
        <>
          <h1>{movieDetail.title}</h1>
          <p>{movieDetail.overview}</p>
          <p>Data de lançamento: {movieDetail.release_date}</p>
          <p>Avaliação: {movieDetail.vote_average}</p>
          {/* Adicione mais detalhes conforme necessário */}
        </>
      )}
    </div>
  );
}

export default MovieDetail;
