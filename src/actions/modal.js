// List of movie modal action type keys
/*export const modalKeys = {
  OPEN_MOVIE_MODAL: 'OPEN_MOVIE_MODAL',
  CLOSE_MOVIE_MODAL: 'CLOSE_MOVIE_MODAL'
};*/

export const OPEN_MOVIE_MODAL = 'OPEN_MOVIE_MODAL';
export const CLOSE_MOVIE_MODAL = 'CLOSE_MOVIE_MODAL';

// Opens the <MovieModal /> with a movieId
export const openMovieModal = (movieId) => {
  return {
    type: OPEN_MOVIE_MODAL,
    movieId
  };
};

// Closes the <MovieModal />
export const closeMovieModal = () => {
  return {
    type: CLOSE_MOVIE_MODAL
  };
};
