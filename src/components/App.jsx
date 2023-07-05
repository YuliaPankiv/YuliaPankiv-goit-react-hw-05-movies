import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import HomePages from 'pages/HomePages';
import { Container } from './App.styled';
import MoviDetailsPages from 'pages/MoviDetailsPages';
import MoviesPages from 'pages/MoviesPages';

export const App = () => {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePages />}></Route>
          <Route path="/movies/:id" element={<MoviDetailsPages />} />{' '}
          <Route path="movies" element={<MoviesPages />}>
          </Route>
        </Route>
      </Routes>
    </Container>
  );
};
