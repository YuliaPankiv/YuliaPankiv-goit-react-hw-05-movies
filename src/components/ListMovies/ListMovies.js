import ListItem from 'components/ListItem/ListItem';
import React from 'react';
import { useLocation } from 'react-router-dom';
import { Item, List } from './ListMovies.styled';

export default function ListMovies({ movies }) {
  const location = useLocation();
  return (
    <>
      {Array.isArray(movies) ? (
        <List>
          {movies.map(movie => (
            <Item key={movie.id}>
              <ListItem movie={movie} location={location} />
            </Item>
          ))}
        </List>
      ) : (
        <p>Try again</p>
      )}
    </>
  );
}
