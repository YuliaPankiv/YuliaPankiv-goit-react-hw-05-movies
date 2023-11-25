import { useEffect, useState } from 'react';
import { getTrendingMovies } from 'services/movieApi';
import ListMovies from 'components/ListMovies/ListMovies';
import Slider from 'components/Slider/Slider';

const HomePages = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrendingMovies().then(setMovies);
  }, []);

  return (
    <>
      <h2>Trending Today</h2>
      <Slider />
      <ListMovies movies={movies} />
    </>
  );
};

export default HomePages;
