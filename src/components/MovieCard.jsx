import React from 'react';

import MoviePoster from '../blocks/MoviePoster';

const MovieCard = ({ movie, onClick }) => {
  return (
    <MoviePoster onClick={onClick} maxWidth="300px">
      <MoviePoster.Image src={movie.poster_path} />
      <MoviePoster.Title>{movie.title}</MoviePoster.Title>
    </MoviePoster>
  );
};

export default MovieCard;
