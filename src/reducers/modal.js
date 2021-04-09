import { CLOSE_MOVIE_MODAL, OPEN_MOVIE_MODAL } from '../actions/modal';
import { createReducer } from '../common/redux.helpers';

// Placeholder reducer for our movie modal
const movieModalReducer = createReducer(
  { isOpen: false, movieId: undefined },
  {
    [OPEN_MOVIE_MODAL]: (state, action) => ({
      isOpen: true,
      movieId: action.movieId
    }),
    [CLOSE_MOVIE_MODAL]: (state, action) => ({
      // Persist the movieId (and any other state tree objects)
      ...state,
      isOpen: false
    })
  }
);

export default movieModalReducer;
