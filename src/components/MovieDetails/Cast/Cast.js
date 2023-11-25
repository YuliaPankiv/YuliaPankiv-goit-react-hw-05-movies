import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from 'services/movieApi';
import NoImage from '../../../image/NoImage.svg.png';
import { List } from '../Cast/Container.styled';
import Slider from '../Slider/Slider';

function Cast() {
  const { id } = useParams();
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    getMovieCredits(id).then(setMovies);
  }, [id]);
  const { cast } = movies;
  console.log(Array.isArray(cast));
  return (
    <>
      <Slider movie={movies} />
      {/* <List>
        <div cast={cast} />
        {cast &&
          cast.map(({ id, name, character, profile_path }) => (
            <li key={id}>
              {profile_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w200/${profile_path}`}
                  alt="img"
                  width={100}
                />
              ) : (
                <img src={NoImage} alt="preview" width={100} />
              )}
              <p>{name}</p>
              <p>Character: {character}</p>
            </li>
          ))}
      </List> */}
    </>
  );
}

export default Cast;
