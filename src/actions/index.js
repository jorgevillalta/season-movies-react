import { createAsyncActionCreator } from '../common/redux.helpers';
import * as movieService from '../middleware/tmdb-api';

export const GET_MOVIES = 'GET_MOVIES';
export const SEARCH_MOVIES = 'SEARCH_MOVIES';
export const GET_MOVIE_DETAILS = 'GET_MOVIE_DETAILS';

export const getMovies = (date, page, reset = false) =>
  createAsyncActionCreator(
    // actionType
    GET_MOVIES,
    // requestFn
    movieService.getMoviesInDate,
    // requestParams
    { date, page, reset }
  );

export const searchMovies = (query, page) =>
  createAsyncActionCreator(SEARCH_MOVIES, movieService.searchMovies, {
    query,
    page
  });

export const getMovieDetails = (movieId) =>
  createAsyncActionCreator(GET_MOVIE_DETAILS, movieService.getMovieDetails, {
    movieId
  });
