import {
  createAsyncThunk,
  createDraftSafeSelector,
  createEntityAdapter,
  createSlice
} from '@reduxjs/toolkit';
import { getMovieDetails, getMoviesInDate } from '../../middleware/tmdb-api';

const moviesAdapter = createEntityAdapter();

// Initial state
const initialState = moviesAdapter.getInitialState({
  isLoading: false,
  currentPage: 1,
  movieSelected: null
});

// Action thunk to fetch movies
export const fetchMovies = createAsyncThunk(
  'movies/fetchMovies',
  async ({ date = new Date() }, { getState }) => {
    const currentPage = 1;
    const movieList = await getMoviesInDate({ date, page: currentPage });
    return { movieList, currentPage };
  }
);

// Action thunk to fetch next movies
export const fetchMoviesNext = createAsyncThunk(
  'movies/fetchMoviesNext',
  async ({ date }, { getState }) => {
    const nextPage = selectCurrentPage(getState()) + 1;
    const movieList = await getMoviesInDate({ date, page: nextPage });
    return { movieList, currentPage: nextPage };
  }
);

// Action thunk to fetch movie detail
export const fetctMovieDetail = createAsyncThunk(
  'movies/fetctMovieDetail',
  async ({ movieId }, { getState }) => {
    // check if current state has movie details
    const movie = selectMoviesById(getState(), movieId);

    if (movie?.detailLoaded) {
      return { id: movieId, movieDetail: movie };
    }

    const movieDetail = await getMovieDetails({ movieId });
    return { id: movieId, movieDetail };
  }
);

//
export const moviesSlice = createSlice({
  name: 'movies', // name of this slice state
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.fulfilled, (state, action) => {
        moviesAdapter.setAll(state, action.payload.movieList);
        state.currentPage = action.payload.currentPage;
        state.isLoading = false;
      })
      .addCase(fetchMoviesNext.fulfilled, (state, action) => {
        moviesAdapter.addMany(state, action.payload.movieList);
        state.currentPage = action.payload.currentPage;
        state.isLoading = false;
      })
      .addCase(fetctMovieDetail.fulfilled, (state, action) => {
        const { id, movieDetail } = action.payload;

        moviesAdapter.updateOne(state, {
          id,
          changes: { ...movieDetail, detailLoaded: true }
        });
        state.movieSelected = id;
        state.isLoading = false;
      })
      .addMatcher(
        // any action ending with 'pending' should mark as 'isLoading'
        (action) => action.type.startsWith('movies/') && action.type.endsWith('pending'),
        (state, action) => {
          state.isLoading = true;
          state.movieSelected = null;
        }
      );
  }
});

// Action creators
// export const {} = movieBrowserSlice.actions;

// Reducer
export default moviesSlice.reducer;

// Selectors
const selectSelf = (state) => state;

export const {
  selectAll: selectMovies,
  selectById: selectMoviesById,
  selectTotal: selectMoviesTotal
} = moviesAdapter.getSelectors((state) => state.movies);

export const selectCurrentPage = createDraftSafeSelector(
  selectSelf,
  (state) => state.movies.currentPage
);

export const selectIsLoading = createDraftSafeSelector(
  selectSelf,
  (state) => state.movies.isLoading
);

export const selectMovieSelected = createDraftSafeSelector(selectSelf, (state) =>
  selectMoviesById(state, state.movies.movieSelected)
);
