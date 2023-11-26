import React from 'react';
import { Link } from 'react-router-dom';
import NoImage from '../../image/NoImage.svg.png';

function ListItem({ movie: { title, name, id, poster_path }, location }) {
  return (
    <>
      <>
        {poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
            width={`50`}
            alt="preview"
          />
        ) : (
          <img src={NoImage} width={`50`} alt="preview" />
        )}
      </>
      <>
        <Link to={`/movies/${id}`} state={{ from: location }}>
          {title || name}
        </Link>
      </>
    </>
  );
}

export default ListItem;
