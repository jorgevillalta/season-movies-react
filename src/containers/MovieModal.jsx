import { Classes, Dialog, H1, H5 } from '@blueprintjs/core';
import React, { useCallback, useEffect, useMemo } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components/macro';

import { getMovieDetails } from '../actions';
import { closeMovieModal } from '../actions/modal';
import Loader from '../components/Loader';

/*const styles = {
  // Can use functions to dynamically build our CSS
  dialogContent: (backgroundUrl) => ({
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${backgroundUrl})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100%',
    height: '100%',
    minHeight: 400,
    color: 'white',
    padding: 10
  })
};*/

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
      date:
        (movie.release_date &&
          new Date(movie.release_date).toLocaleDateString()) ||
        '',
      genres: movie.genres
        ? movie.genres.map((genre) => genre.name).join(', ')
        : '',
      budget:
        (movie.budget && `$${movie.budget.toLocaleString()}`) || '(unknown)'
    }),
    [movie]
  );
};

const MovieModal = () => {
  const dispatch = useDispatch();

  const { isOpen, movieId, isLoading, response } = useSelector(
    (state) => ({
      isOpen: state.movieBrowser.movieModal.isOpen || false,
      movieId: state.movieBrowser.movieModal.movieId,
      isLoading: state.movieBrowser.movieDetails.isLoading || false,
      response: state.movieBrowser.movieDetails.response
    }),
    shallowEqual
  );

  /* */
  useEffect(() => {
    if (movieId) {
      dispatch(getMovieDetails(movieId));
    }
  }, [dispatch, movieId]);

  /* */
  const { title, date, genres, overview, popularity, budget } = useFormatMovie(
    response
  );

  /* */
  const clickCloseMovieModal = useCallback(() => {
    dispatch(closeMovieModal());
  }, [dispatch]);

  return (
    <StyledDialog title={null} onClose={clickCloseMovieModal} isOpen={isOpen}>
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
// "connect" our movie modal to the component store
/*export default connect(
  // Map nodes in our state to a properties of our component
  (state) => ({
    // Using lodash get, recursively check that a property is defined
    // before try to access it - if it is undefined, it will return your default value
    // _.get(object, 'path.to.targets[0].neat.stuff', defaultValue)
    isOpen: _.get(state, 'movieBrowser.movieModal.isOpen', false),
    movieId: _.get(state, 'movieBrowser.movieModal.movieId'),
    movie: _.get(state, 'movieBrowser.movieDetails.response', {}),
    isLoading: _.get(state, 'movieBrowser.movieDetails.isLoading', false)
  }),
  // Map an action to a prop, ready to be dispatched
  { closeMovieModal, getMovieDetails }
)(MovieModalContainer);*/

export default MovieModal;
