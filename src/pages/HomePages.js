import { useEffect, useState } from 'react';
import { getTrendingMovies } from 'services/movieApi';
import ListMovies from 'components/ListMovies/ListMovies';
// import { PaginationI } from 'components/Pagination/Pagination';
import { Pagination, Stack, PaginationItem, Link } from '@mui/material';
import { Link as NavLink } from 'react-router-dom';
import { Container } from './Container.styled';
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
      <h2>Trending Today</h2>{' '}
      <Stack spacing={1}>
        {!!totalPage && (
          <Pagination
            count={totalPage}
            movies={movies}
            page={page}
            onChange={(_, num) => setPage(num)}
            sx={{ marginY: 3, marginX: 'auto' }}
            showFirstButton
            showLastButton
            renderItem={item => (
              <PaginationItem
                component={NavLink}
                to={`/?page=${item.page}`}
                {...item}
              />
            )}
          />
        )}
      </Stack>
      <ListMovies movies={movies} loading={loading} />
    </Container>
  );
};

export default HomePages;
