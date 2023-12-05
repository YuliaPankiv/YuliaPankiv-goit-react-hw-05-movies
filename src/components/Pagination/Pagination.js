import { Pagination, PaginationItem, Stack } from '@mui/material';
import { NavLink } from 'react-router-dom';

export const PaginationMovie = ({ totalPage, movies, page }) => {
  return (
    <Stack>
      {!!totalPage && (
        <Pagination
          count={totalPage}
          movies={movies}
          page={page}
          // onChange={(_, num) => setPage(num)}
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
  );
};
