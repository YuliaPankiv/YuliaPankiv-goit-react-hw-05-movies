import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function ListMovies({ movies }) {
  const location = useLocation();
  return (
    <>
      {Array.isArray(movies) ? (
        <ul>
          {movies.map(({ id, title, name }) => (
            <li key={id}>
              <Link to={`/movies/${id}`} state={{ from: location }}>
                {title || name}
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>try agen</p>
      )}

      {/* <ul>
        {Array.isArray(movies) ? (
          movies.map(({ id, title, name }) => (
            <li key={id}>
              <Link to={`/movies/${id}`}>{title || name}</Link>
            </li>
          ))
        ) : (
          <p>try agen</p>
        )}
      </ul> */}
    </>
  );
}
