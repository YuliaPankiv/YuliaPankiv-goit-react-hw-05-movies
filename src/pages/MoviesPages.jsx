import ListMovies from 'components/ListMovies';
import React, { Suspense } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState, useEffect } from 'react';
import { Outlet, useSearchParams } from 'react-router-dom';
import { getMovieByName } from 'services/movieApi';
const MoviesPages = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  useEffect(() => {
    if (query === '' || query === null) return;
    try {
      getMovieByName(query).then(setMovies);
    } catch (error) {
      console.log('err');
    }
  }, [query]);

  const ClickOnButton = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const searchName = form.elements.query.value;
    if (searchName === '') {
      toast.warn('Try again');
      return setSearchParams({});
    }
    setSearchParams({ query: searchName });
    form.reset();
  };
  // console.log(movies);
  return (
    <div>
      <form onSubmit={ClickOnButton}>
        <input type="text" name="query" />
        <button type="submit">Search</button>
      </form>
      <ToastContainer />
      {query && <ListMovies movies={movies.results} />}
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MoviesPages;
