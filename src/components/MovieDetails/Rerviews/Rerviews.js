import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'services/movieApi';

function Reviews() {
  const { id } = useParams();
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    getMovieReviews(id).then(setMovies);
  }, [id]);
  const { results } = movies;

  return (
    <>
      {results &&
        results.map(({ author, content, id }) => (
          <div key={id}>
            <h5>Author: {author}</h5>
            <p>{content}</p>
          </div>
        ))}
    </>
  );
}

export default Reviews;
