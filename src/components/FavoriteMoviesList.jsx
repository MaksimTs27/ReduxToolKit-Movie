
import { useSelector, useDispatch } from 'react-redux';
import { removeMovie } from '../features/favoriteMoviesSlice';

const FavoriteMoviesList = () => {
  const movies = useSelector((state) => state.favoriteMovies.movies);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Favorite movies</h2>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            {movie.title}
            <button onClick={() => dispatch(removeMovie(movie.id))}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FavoriteMoviesList;
