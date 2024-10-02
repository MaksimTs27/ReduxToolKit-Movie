
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addMovie } from '../features/favoriteMoviesSlice';

const MovieInput = () => {
  const [movieTitle, setMovieTitle] = useState('');
  const dispatch = useDispatch();

  const handleAddMovie = () => {
    if (movieTitle.trim()) {
      const newMovie = {
        id: Date.now(),
        title: movieTitle,
      };
      dispatch(addMovie(newMovie));
      setMovieTitle('');
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter movie name"
        value={movieTitle}
        onChange={(e) => setMovieTitle(e.target.value)}
      />
      <button onClick={handleAddMovie}>Add to favorite</button>
    </div>
  );
};

export default MovieInput;
