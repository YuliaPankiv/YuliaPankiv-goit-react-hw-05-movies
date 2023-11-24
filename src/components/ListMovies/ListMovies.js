import ListItem from 'components/ListItem/ListItem';
import React from 'react';
import { useLocation } from 'react-router-dom';

export default function ListMovies({ movies }) {
  const location = useLocation();
  return (
    <>
      {Array.isArray(movies) ? (
        <ul>
          {movies.map(movie => (
            <li key={movie.id}>
              <ListItem movie={movie} location={location} />
            </li>
          ))}
        </ul>
      ) : (
        <p>Try again</p>
      )}
    </>
  );
}
