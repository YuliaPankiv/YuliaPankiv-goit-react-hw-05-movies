import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from 'services/movieApi';

function Cast() {
  const { id } = useParams();
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    getMovieCredits(id).then(setMovies);
  }, [id]);
  const { cast, name } = movies;
  console.log(Array.isArray(cast));
  return (
    <ul>
      {cast &&
        cast.map(({ id, name, character, profile_path }) => (
          <li key={id}>
            <img
              src={`https://image.tmdb.org/t/p/w200/${profile_path}`}
              alt="img"
              width={100}
            />
            <p>{name}</p>
            <p>Character: {character}</p>
          </li>
        ))}
    </ul>
  );
}

export default Cast;
