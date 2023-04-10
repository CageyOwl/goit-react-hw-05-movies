import { useEffect, lazy } from 'react';
import { useParams } from 'react-router-dom';
import useFetch from 'hooks/useFetch';
import { STATUS, TMDB_API_V3_KEY } from 'services/constants';

import Loader from 'components/Loader/Loader';
const CastGallery = lazy(() => import('./CastGallery'));


export default function Cast() {
  const { movieId } = useParams();
  const { status, setStatus, responseData, errorMessage, setErrorMessage } = useFetch(`/movie/${movieId}/credits?api_key=${TMDB_API_V3_KEY}`);

  useEffect(() => {
    if (status !== STATUS.RESOLVED) return;
    if (!responseData) {
      setErrorMessage('No information about cast was received. The reason is unknown.');
      setStatus(STATUS.REJECTED);
    }
    if (responseData.cast.length) return
    setErrorMessage('No information about cast yet.');
    setStatus(STATUS.REJECTED);
  }, [status, responseData, setErrorMessage, setStatus]);

  return (
    <>
      {status === STATUS.PENDING && <Loader />}
      {status === STATUS.REJECTED && errorMessage}
      {status === STATUS.RESOLVED && <CastGallery cast={responseData.cast} />}
    </>
  );
}
