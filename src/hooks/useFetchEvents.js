import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieById } from 'services/movieApi';

const useFetchEvents = () => {
  const [event, setEvent] = useState(null);

  const { id } = useParams();

  console.log(id);

  useEffect(() => {
    getMovieById(id).then(setEvent);
  }, [id]);
  
  return event;
};

export default useFetchEvents;
