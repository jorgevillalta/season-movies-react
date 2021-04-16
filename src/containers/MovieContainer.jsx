import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { openMovieModal } from '../actions/modal';
import MovieCard from '../components/MovieCard';

const MovieContainer = ({ movie }) => {
  const dispatch = useDispatch();

  const clickOpenMovieModal = useCallback(() => dispatch(openMovieModal(movie.id)), [
    dispatch,
    movie.id
  ]);

  return <MovieCard movie={movie} onClick={clickOpenMovieModal} />;
};

export default MovieContainer;
