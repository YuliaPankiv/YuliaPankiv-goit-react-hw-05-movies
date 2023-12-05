import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'services/movieApi';

function Reviews() {
  const { id } = useParams();
  const [movie, setMovies] = useState([]);
  useEffect(() => {
    getMovieReviews(id).then(setMovies);
  }, [id]);
  const { results } = movie;

  return (
    <>
      {results?.length > 0 ? (
        results.map(({ author, content, id }) => (
          <div key={id}>
            <h5>Author: {author}</h5>
            <p>{content}</p>
          </div>
        ))
      ) : (
        <p>There are currently no reviews for this film.</p>
      )}
    </>
  );
}

export default Reviews;
