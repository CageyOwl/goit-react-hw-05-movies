import { useState, useEffect } from 'react';
import { STATUS, TMDB_API_V3_BASE_URL } from 'services/constants';


const useFetch = (apiQuery, apiBaseURL = TMDB_API_V3_BASE_URL) => {
  const [status, setStatus] = useState(STATUS.IDLE);
  const [responseData, setResponseData] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    async function fetchData(apiQuery, apiBaseURL) {
      if (!apiQuery) return;

      setStatus(STATUS.PENDING);
      let response = {};
      try {
        response = await fetch(`${apiBaseURL}${apiQuery}`);
        if (!response.ok) {
          throw new Error(
            'No data found, please, change your request and try again.'
          );
        }
        response = response.json();
      } catch (error) {
        setErrorMessage(error.message);
        setStatus(STATUS.REJECTED);
      }

      const data = await response;
      setResponseData(data);
      setStatus(STATUS.RESOLVED);
    }

    fetchData(apiQuery, apiBaseURL);
  }, [apiQuery, apiBaseURL]);

  return {status, setStatus, responseData, errorMessage, setErrorMessage};
};


export default useFetch;
