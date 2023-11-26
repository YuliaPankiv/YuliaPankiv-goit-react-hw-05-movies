import { Suspense, useEffect, useRef, useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { getMovieById } from 'services/movieApi';
import ButtonBack from '../components/BtnBack/BtnBack';
import MovieDetails from 'components/MovieDetails/MoviDetails';
import LinkAdditionalInform from 'components/MovieDetails/LinkAdditionanlInform/LinkAdditionalInform';

const MoviDetailsPages = () => {
  const [movie, setMovie] = useState([]);
  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? '/');
  const { id } = useParams();

  useEffect(() => {
    getMovieById(id).then(setMovie);
  }, [id]);

  return (
    <>
      <ButtonBack backLinkHref={backLinkHref} />
      <MovieDetails movie={movie} />
      <LinkAdditionalInform />
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MoviDetailsPages;
