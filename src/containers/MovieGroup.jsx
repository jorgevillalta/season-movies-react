import React from 'react';

import MovieList from '../blocks/MovieList';
import LoaderComponent from '../components/Loader';
import MovieContainer from './MovieContainer';

const MovieGroup = ({ movies, isLoading }) => {
  return (
    <MovieList>
      {movies &&
        movies.map((movie) => (
          <MovieContainer movie={movie} key={movie.id}></MovieContainer>
        ))}
      <LoaderComponent isLoading={isLoading} />
    </MovieList>
  );
};

export default MovieGroup;
