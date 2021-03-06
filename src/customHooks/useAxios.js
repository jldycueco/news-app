import { useState, useEffect } from 'react';
import axios from 'axios';

export default function useAxios(initialData, initialUrl) {
  const [fetchedData, setFetchedData] = useState(initialData);
  const [url, setUrl] = useState(initialUrl);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setIsError(false);
      setIsLoading(true);
      try {
        const result = await axios(url);
        if (result.data.error) {
          setIsError(true);
        } else {
          setFetchedData(result.data);
        }
      } catch (err) {
        setIsError(true);
      }
      setIsLoading(false);
    };
    getData();
  }, [url]);

  return [{ fetchedData, isLoading, isError }, setUrl];
}
