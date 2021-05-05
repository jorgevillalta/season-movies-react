import { useDispatch } from 'react-redux';

import MovieCard from '../components/MovieCard';
import { layoutOpen } from '../features/layouts/layoutsSlice';
import { fetctMovieDetail } from '../features/movies/moviesSlice';

const MovieContainer = ({ movie }) => {
  const dispatch = useDispatch();
  const clickOpenMovieModal = () => {
    dispatch(fetctMovieDetail({ movieId: movie.id }));
    dispatch(layoutOpen('movieModal'));
  };

  return <MovieCard movie={movie} onClick={clickOpenMovieModal} />;
};

export default MovieContainer;
