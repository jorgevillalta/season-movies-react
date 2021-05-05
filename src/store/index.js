import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import layoutsSlice from '../features/layouts/layoutsSlice';
import moviesReducer from '../features/movies/moviesSlice';

const store = configureStore({
  reducer: {
    movies: moviesReducer,
    layouts: layoutsSlice
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
});

export default store;
