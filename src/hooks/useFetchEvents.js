import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieById, getMovieReviews } from 'services/movieApi';

export const useFetchEvents = () => {
  const [event, setEvent] = useState(null);

  const { id } = useParams();

  console.log(id);

  useEffect(() => {
    getMovieById(id).then(setEvent);
  }, [id]);

  return event;
};

export const useReviewsEvents = () => {
  const { id } = useParams();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovieReviews(id).then(setMovies);
  }, [id]);
  const { results } = movies;
  console.log(movies);
  console.log(results);
  console.log(Array.isArray(results));
  return results;
};
