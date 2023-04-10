import { useEffect, lazy } from 'react';
import { useSearchParams } from 'react-router-dom';
import useFetch from 'hooks/useFetch';
import { TMDB_API_V3_KEY, STATUS } from 'services/constants';

import SearchForm from 'components/SearchForm/SearchForm';
import Loader from 'components/Loader/Loader';
import ErrorMessage from 'components/ErrorMessage/ErrorMessage';
const MoviesGallery = lazy(() => import('components/MoviesGallery/MoviesGallery'));


export default function Movies() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { status, setStatus, responseData, errorMessage, setErrorMessage } =
    useFetch(
      searchParams.get('query')
        ? `/search/movie?api_key=${TMDB_API_V3_KEY}&${searchParams.toString()}}`
        : ''
    );

  const onFormSubmit = event => {
    event.preventDefault();
    const formQuery = event.target.querySelector('input').value.trim();
    if (formQuery === searchParams.get('query')) return;
    if (formQuery) {
      setSearchParams({ query: formQuery });
    } else {
      setSearchParams({});
      setErrorMessage('Empty input. Please, write something.');
      setStatus(STATUS.REJECTED);
    }
    event.target.reset();
  };

  useEffect(() => {
    if (status !== STATUS.RESOLVED) return;
    if (!responseData.results.length) {
      setErrorMessage(`No movies found on a query "${searchParams.get('query')}".`);
      setStatus(STATUS.REJECTED);
    }
  }, [status, responseData, searchParams, setErrorMessage, setStatus]);

  return (
    <>
      <SearchForm onSubmit={onFormSubmit} />
      {status === STATUS.PENDING && <Loader />}
      {status === STATUS.REJECTED && <ErrorMessage message={errorMessage} />}
      {status === STATUS.RESOLVED && (
        <MoviesGallery moviesDataArr={responseData.results} />
      )}
    </>
  );
}
