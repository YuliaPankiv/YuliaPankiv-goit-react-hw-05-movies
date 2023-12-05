import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';

import Layout from '../Layout/Layout';
const Reviews = lazy(() => import('../MovieDetails/Rerviews/Rerviews'));
const Cast = lazy(() => import('../MovieDetails/Cast/Cast'));

const HomePages = lazy(() => import('pages/HomePages'));
const MoviesPages = lazy(() => import('pages/MoviesPages'));
const MoviDetailsPages = lazy(() => import('pages/MoviDetailsPages'));

export const App = () => {
  return (
    <>
      {/* <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePages />} />
          <Route path="movies" element={<MoviesPages />}></Route>{' '}
          <Route path="/movies/:idMovie" element={<MoviDetailsPages />}>
            <Route path="reviews" element={<Reviews />} />
            <Route path="cast" element={<Cast />} />
          </Route>
          <Route path="*" element={<p>Not Found</p>} />
        </Route>
      </Routes> */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePages />} />
          <Route path="/movies/:id" element={<MoviDetailsPages />}>
            <Route path="reviews" element={<Reviews />} />
            <Route path="cast" element={<Cast />} />
          </Route>
          <Route path="movies" element={<MoviesPages />}></Route>
          <Route path="*" element={<p>Not Found</p>} />
        </Route>
      </Routes>
    </>
  );
};
