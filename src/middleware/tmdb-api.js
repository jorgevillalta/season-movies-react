import { normalizeMovieList, updateMoviePictureUrls } from './helpers';

const { REACT_APP_MOVIE_DB_API_KEY, REACT_APP_MOVIE_DB_BASE_URL } = process.env;

const createMovieDbUrl = (relativeUrl, queryParams) => {
  let baseUrl = `${REACT_APP_MOVIE_DB_BASE_URL}${relativeUrl}?api_key=${REACT_APP_MOVIE_DB_API_KEY}&language=en-US`;
  if (queryParams) {
    Object.keys(queryParams).forEach(
      (paramName) => (baseUrl += `&${paramName}=${queryParams[paramName]}`)
    );
  }
  return baseUrl;
};

const callApi = async (endpoint) => {
  const response = await fetch(endpoint);

  if (!response.ok) {
    const message = `An error has occured: ${response.status}`;
    throw new Error(message);
  }

  //
  const json = await response.json();

  return { ...json };
};

export const getTopMovies = async ({ page }) => {
  const fullUrl = createMovieDbUrl('/movie/upcoming', {
    page
  });
  return callApi(fullUrl);
};

export const searchMovies = async ({ page, query }) => {
  const fullUrl = createMovieDbUrl('/search/movie', {
    page,
    query
  });
  return callApi(fullUrl);
};

export const getMovieDetails = async ({ movieId }) => {
  const fullUrl = createMovieDbUrl(`/movie/${movieId}`);

  // call
  const response = await callApi(fullUrl);

  // normalize data
  const movie = updateMoviePictureUrls(response);

  return movie;
};

export const getMoviesInDate = async ({ date = new Date(), page = 1 }) => {
  if (!(date instanceof Date)) {
    return Promise.reject('incorrect date object');
  }

  const dateStart = new Date(date.getTime());
  dateStart.setMonth(date.getMonth() - 1);

  const fullUrl = createMovieDbUrl('/discover/movie', {
    page,
    language: 'en-US',
    region: 'US',
    sort_by: 'popularity.desc',
    include_adult: false,
    'primary_release_date.gte': dateStart.toISOString().split('T')[0],
    'primary_release_date.lte': date.toISOString().split('T')[0]
  });

  // call
  const response = await callApi(fullUrl);

  // normalize data
  const movieList = normalizeMovieList(response.results);

  return movieList;
};
