const { REACT_APP_MOVIE_IMAGE_BASE_URL } = process.env;

const TMDB_IMAGE_BASE_URL = (width = 300) => `${REACT_APP_MOVIE_IMAGE_BASE_URL}${width}`;

export const updateMoviePictureUrls = (movieResult, width = 300) => ({
  ...movieResult,
  backdrop_path:
    movieResult.backdrop_path && `${TMDB_IMAGE_BASE_URL(width)}${movieResult.backdrop_path}`,
  poster_path: movieResult.poster_path && `${TMDB_IMAGE_BASE_URL(width)}${movieResult.poster_path}`
});

export const getMoviesList = (moviesResponse) => {
  return !!moviesResponse
    ? [
        ...moviesResponse.results
          .map((movieResult) => updateMoviePictureUrls(movieResult))
          .sort((a, b) => b.popularity - a.popularity)
      ]
    : null;
};
