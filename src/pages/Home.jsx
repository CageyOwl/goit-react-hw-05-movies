import { useEffect, lazy } from 'react';
import useFetch from 'hooks/useFetch';
import {
  TMDB_POPULAR_MOVIES_QUERY_URL_SUFFIX,
  STATUS,
} from '../services/constants';

import Loader from 'components/Loader/Loader';
import ErrorMessage from 'components/ErrorMessage/ErrorMessage';
const MoviesGallery = lazy(() => import('components/MoviesGallery/MoviesGallery'))



export default function Home() {
  const { status, setStatus, responseData, errorMessage, setErrorMessage } = useFetch(
    TMDB_POPULAR_MOVIES_QUERY_URL_SUFFIX
  );

  useEffect(() => {
    if (status !== STATUS.RESOLVED) return;
    if (!responseData.results.length) {
      setErrorMessage('Empty popular movies response received. The reason is unknown. Please, return later.');
      setStatus(STATUS.REJECTED);
    }
  }, [status, responseData, setErrorMessage, setStatus]);

  return (
    <>
      {status === STATUS.PENDING && <Loader />}
      {status === STATUS.REJECTED && <ErrorMessage message={errorMessage} />}
      {status === STATUS.RESOLVED && (
        <MoviesGallery moviesDataArr={responseData.results} />
      )}
    </>
  );
}