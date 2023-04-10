import { useEffect, lazy } from 'react';
import { useParams } from 'react-router-dom';
import useFetch from 'hooks/useFetch';
import { TMDB_API_V3_KEY, STATUS } from 'services/constants';

import Loader from 'components/Loader/Loader';
const ReviewsList = lazy(() => import('./ReviewsList'));


export default function Reviews() {
  const { movieId } = useParams();
  const { status, setStatus, responseData, errorMessage, setErrorMessage } = useFetch(
    `/movie/${movieId}/reviews?api_key=${TMDB_API_V3_KEY}`
  );

  useEffect(() => {
    if (status !== STATUS.RESOLVED) return;
    if (!responseData) {
      setErrorMessage("Reviews data wasn't received. The reason is unknown.");
      setStatus(STATUS.REJECTED);
    }
    if (responseData.results.length) return;
    setErrorMessage('No reviews on this movie yet.');
    setStatus(STATUS.REJECTED);
  }, [status, responseData, setErrorMessage, setStatus]);

  return (
    <>
      {status === STATUS.PENDING && <Loader />}
      {status === STATUS.REJECTED && errorMessage}
      {status === STATUS.RESOLVED && <ReviewsList reviews={responseData.results} />}
    </>
  );
}
