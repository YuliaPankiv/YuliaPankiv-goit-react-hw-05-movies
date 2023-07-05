import MoviDetailsPages from 'pages/MoviDetailsPages';
import React from 'react';
import { Link, useParams } from 'react-router-dom';

export default function ListMovies({ movies }) {
  return (
    <>
      <ul>
        {movies.map(({ id, title, name }) => (
          <li key={id}>
            <Link to={`/movies/${id}`}>{title || name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
