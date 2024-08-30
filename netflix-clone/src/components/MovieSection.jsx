import React from 'react';
import './MovieSection.css';

function MovieSection({ title, movies }) {
  return (
    <div className="movie-section">
      <h2>{title}</h2>
      <div className="movie-cards">
        {movies.map(movie => (
          <div key={movie.id} className="movie-card">
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default MovieSection;
