import { useEffect, useState } from 'react';
import { getTrendingMovies } from 'services/movieApi';
import ListMovies from 'components/ListMovies/ListMovies';
// import { PaginationI } from 'components/Pagination/Pagination';
import { Container } from './Container.styled';
import { PaginationMovie } from 'components/Pagination/Pagination';
const HomePages = props => {
  const [movies, setMovies] = useState([]);
  const [totalPage, setTotalPage] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  // const [moviePerPage] = useState(50);

  useEffect(() => {
    try {
      setLoading(true);
      getTrendingMovies(page).then(res => {
        setMovies(res.results);
        setTotalPage(res.total_pages);
        setLoading(false);
      });
    } catch (error) {
      console.log(error.message);
    }
  }, [page]);
  console.log(props);
  // const lastMovieIndex = currentPage * moviePerPage;
  // const firstMovieIndex = lastMovieIndex - moviePerPage;
  // const currentMovie = movies.slice(firstMovieIndex, lastMovieIndex);

  // const paginate = pageNumber => {
  //   setCurrentPage(pageNumber);
  // };
  return (
    <Container>
      <h2>Trending Today</h2>
      <PaginationMovie
        totalPage={totalPage}
        movies={movies}
        page={page}
        setPage={setPage}
      />
      <ListMovies movies={movies} loading={loading} />
      <PaginationMovie
        totalPage={totalPage}
        movies={movies}
        page={page}
        setPage={setPage}
      />
    </Container>
  );
};

export default HomePages;
