import { Container } from 'components/MovieDetails/MovieDetails.styled';
import React, { useEffect, useState } from 'react';
import NoImage from '../../image/NoImage.svg.png';
import { useParams } from 'react-router-dom';
import { getMovieById } from 'services/movieApi';

const MovieDetails = () => {
  const [movies, setMovies] = useState([]);
  const { title, poster_path, name, overview, vote_average, genres } = movies;
  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    try {
      getMovieById(id).then(setMovies);
    } catch (error) {
      console.log(error.message);
    }
  }, [id]);
  return (
    <Container>
      <div>
        {title && <h2>{title}</h2>}
        {vote_average && <p>User Score: {vote_average}</p>}
        {overview && (
          <>
            <h3>Overview</h3>
            <p>{overview}</p>
          </>
        )}
        {genres && (
          <>
            <h3>Genres</h3>
            {genres?.map(({ id, name }) => {
              return <span key={id}>{name} </span>;
            })}
          </>
        )}
        {name && <h3>{name}</h3>}
      </div>
      <div style={{ minWidth: 200, maxWidth: 300 }}>
        {poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
            width={`200`}
            alt="preview"
          />
        ) : (
          <img src={NoImage} alt="preview" />
        )}
      </div>
    </Container>
  );
};

export default MovieDetails;
