import { useEffect, lazy, Suspense } from 'react';
import { Outlet, useParams, useLocation } from 'react-router-dom';
import useFetch from 'hooks/useFetch';
import {
  STATUS,
  TMDB_API_V3_KEY,
  TMDB_IMAGES_BASE_URL,
  DEFAULT_POSTER_URL
} from 'services/constants';

import { BackLink } from 'components/app.styles';

import Loader from 'components/Loader/Loader';
import ErrorMessage from 'components/ErrorMessage/ErrorMessage';
const MovieGeneralInfo = lazy(() => import('components/MovieInfo/MovieGeneralInfo'));
const MovieInfoLinks = lazy(() => import('components/MovieInfo/MovieInfoLinks'));


export default function MovieDetails() {
  const { movieId } = useParams();
  const { status, setStatus, responseData, errorMessage, setErrorMessage } =
    useFetch(`/movie/${movieId}?api_key=${TMDB_API_V3_KEY}`);

  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/movies';
  let r = responseData;

  useEffect(() => {
    if (status !== STATUS.RESOLVED) return;
    if (!responseData) {
      setErrorMessage('No data about the movie received.');
      setStatus(STATUS.REJECTED);
    }
  }, [status, responseData, setErrorMessage, setStatus]);

  return (
    <>
      <BackLink to={backLinkHref}>Go Back</BackLink>
      {status === STATUS.PENDING && <Loader />}
      {status === STATUS.REJECTED && <ErrorMessage message={errorMessage} />}
      {status === STATUS.RESOLVED && (
        <>
          <MovieGeneralInfo
            posterURL={r.poster_path ? `${TMDB_IMAGES_BASE_URL}${r.poster_path}` : DEFAULT_POSTER_URL}
            title={r.title || r.original_title || `Movie ${movieId}`}
            userScore={r.vote_average}
            overview={r.overview}
            genres={r.genres}
          />
          <MovieInfoLinks location={location} />
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </>
      )}
    </>
  );
}
