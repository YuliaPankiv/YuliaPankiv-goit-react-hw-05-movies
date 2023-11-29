import React from 'react';
import { useLocation } from 'react-router-dom';
import { Item, List } from './ListMovies.styled';
import ListMovie from 'components/ListItem/ListItem';

export default function ListMovies({ movies }) {
  const location = useLocation();
  return (
    <>
      {Array.isArray(movies) ? (
        <List>
          {movies.map(movie => (
            <Item key={movie.id}>
              <ListMovie movie={movie} location={location} />
            </Item>
          ))}
        </List>
      ) : (
        <p>Try again</p>
      )}
    </>
  );
}
