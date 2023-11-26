import { useEffect, useState } from 'react';
import { getTrendingMovies } from 'services/movieApi';
import ListMovies from 'components/ListMovies/ListMovies';

const HomePages = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrendingMovies().then(setMovies);
  }, []);

  return (
    <>
      {/* <Slider movies={movies} /> */}
      <h2>Trending Today</h2>
      <ListMovies movies={movies} />
    </>
  );
};

export default HomePages;
