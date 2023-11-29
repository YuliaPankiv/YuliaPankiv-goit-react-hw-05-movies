import React from 'react';
import { Link } from 'react-router-dom';
import NoImage from '../../image/NoImage.svg.png';
import { Container, Rating } from '@mui/material';

function ListItem({ movie, location }) {
  const {
    title,
    name,
    id,
    poster_path,
    vote_average,
    release_date,
    first_air_date,
  } = movie;
  console.log(vote_average);
  return (
    <>
      <div>
        {poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
            width={`80`}
            alt="preview"
          />
        ) : (
          <img src={NoImage} width={`50`} alt="preview" />
        )}
      </div>
      <div>
        <Link to={`/movies/${id}`} state={{ from: location }}>
          {title || name}
        </Link>{' '}
        <p> {first_air_date || release_date}</p>
        <Rating
          name="size-small"
          defaultValue={vote_average / 2}
          precision={0.5}
          readOnly
          size="small"
        />
      </div>
    </>
  );
}

export default ListItem;
