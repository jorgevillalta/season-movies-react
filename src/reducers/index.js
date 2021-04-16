import { combineReducers } from 'redux';

import { GET_MOVIE_DETAILS, GET_MOVIES, SEARCH_MOVIES } from '../actions';
import { createAsyncReducer } from '../common/redux.helpers';
import movieModalReducer from './modal';

const movieStartReducer = (state, action) => {
  // Reset current results if date changes
  const response = state.response && !action.request.reset ? { ...state.response } : undefined;
  return {
    ...state,
    isLoading: true,
    request: action.request,
    response: response
  };
};

// This will create a new state with both the existing
// movies and new pages of movies
const moviesSuccessReducer = (state, action) => {
  const existingMovies = state.response ? state.response.results : [];
  // Create a new state object to be returned
  // When creating the new state, be sure to include any
  // existing properties we want to persist
  return {
    ...state,
    isLoading: false,
    response: {
      ...action.response,
      results: [...existingMovies, ...action.response.results]
    }
  };
};

// Combines our movie browser related reducers to build our movieBrowser reducer
const movieBrowserReducer = combineReducers({
  movieModal: movieModalReducer,
  movieList: createAsyncReducer(GET_MOVIES, {
    [`${GET_MOVIES}_START`]: movieStartReducer,
    [`${GET_MOVIES}_SUCCESS`]: moviesSuccessReducer
  }),
  movieSearch: createAsyncReducer(SEARCH_MOVIES, {
    [`${SEARCH_MOVIES}_SUCCESS`]: moviesSuccessReducer
  }),
  movieDetails: createAsyncReducer(GET_MOVIE_DETAILS)
});

export default movieBrowserReducer;
