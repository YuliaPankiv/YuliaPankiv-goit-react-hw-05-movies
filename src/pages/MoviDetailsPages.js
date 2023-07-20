import { Suspense, useEffect, useRef, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { getMovieById } from 'services/movieApi';
import NoImage from '../image/NoImage.svg.png';
const MoviDetailsPages = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? '/');
  const { id } = useParams();
  useEffect(() => {
    getMovieById(id).then(setMovies);
  }, [id]);
  const { title, poster_path, name, overview, vote_average, genres } = movies;
  return (
    <>
      <Link to={backLinkHref.current}>Back to products</Link>
      {title && <h2>{title}</h2>}
      {vote_average && <p>User Score: {vote_average}</p>}
      {overview && (
        <>
          <h3>Overview</h3>
          <p>{overview}</p>
        </>
      )}
      {genres && (
        <>
          <h3>Genres</h3>
          {genres?.map(({ id, name }) => {
            return <p key={id}>{name}</p>;
          })}
        </>
      )}
      {name && <h3>{name}</h3>}
      {poster_path ? (
        <img
          src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
          width={`200`}
          alt="preview"
        />
      ) : (
        <img src={NoImage} alt="preview" />
      )}
      <div>
        <hr />
        <h3>Additional information</h3>
        <ul>
          <li>
            <Link to={'cast'}>Cast</Link>
          </li>
          <li>
            <Link to={'reviews'}>Reviews</Link>
          </li>
        </ul>
        <hr />
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MoviDetailsPages;
