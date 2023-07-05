import ListMovies from 'components/ListMovies';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMovieByName } from 'services/movieApi';

const MoviesPages = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  useEffect(() => {
    if (query.trim() === '' || query === null) return;
    getMovieByName(query).then(setMovies);
  }, [query]);

  const ClickOnButton = e => {
    e.preventDefault();
    const form = e.currentTarget;
    setSearchParams({ query: form.elements.query.value });
    form.reset();
  };

  console.log(movies);
  return (
    <div>
      <form onSubmit={ClickOnButton}>
        <input type="text" name="query" />
        <button type="submit">Search</button>
      </form>

      {query && <ListMovies movies={movies.results} />}
    </div>
  );
};

export default MoviesPages;
