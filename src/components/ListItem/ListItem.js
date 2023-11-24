import React from 'react';
import { Link } from 'react-router-dom';

function ListItem({ movie, location }) {
  console.log(movie);
  return (
    <>
      <Link to={`/movies/${movie.id}`} state={{ from: location }}>   
        {movie.title || movie.name}{' '}
      </Link>
    </>
  );
}

export default ListItem;
