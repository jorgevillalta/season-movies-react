import { Classes, Dialog, H1, H5 } from '@blueprintjs/core';
import React, { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components/macro';

import Loader from '../components/Loader';
import { layoutClose, selectIsMovieModalOpen } from '../features/layouts/layoutsSlice';
import { selectIsLoading, selectMovieSelected } from '../features/movies/moviesSlice';

const StyledDialog = styled(Dialog)`
  /*.bp3-dialog-body {
    background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
      url(${(props) => props.backgroundImg});
    background-repeat: no-repeat;
    background-size: 100%;
    height: 100%;
    min-height: 400px;
    color: white;
  }*/
`;

/* Custom hook */
const useFormatMovie = (movie) => {
  movie = movie || {};

  return useMemo(
    () => ({
      ...movie,
      date: (movie.release_date && new Date(movie.release_date).toLocaleDateString()) || '',
      genres: movie.genres ? movie.genres.map((genre) => genre.name).join(', ') : '',
      budget: (movie.budget && `$${movie.budget.toLocaleString()}`) || '(unknown)'
    }),
    [movie]
  );
};

const MovieModal = () => {
  const dispatch = useDispatch();

  const isOpened = useSelector(selectIsMovieModalOpen);
  const isLoading = useSelector(selectIsLoading);

  /* */
  const { title, date, genres, overview, popularity, budget } = useFormatMovie(
    useSelector(selectMovieSelected)
  );

  /* */
  const clickCloseMovieModal = () => dispatch(layoutClose('movieModal'));

  return (
    <StyledDialog title={null} onClose={clickCloseMovieModal} isOpen={isOpened}>
      <div className={Classes.DIALOG_BODY}>
        <Loader isLoading={isLoading}>
          <H1>{title}</H1>
          <H5>{date}</H5>
          <H5>{genres}</H5>
          <p>{overview}</p>
          <p>Popularity: {popularity}</p>
          <p>Budget: {budget}</p>
        </Loader>
      </div>
    </StyledDialog>
  );
};

export default MovieModal;
