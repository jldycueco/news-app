import { useState, useEffect } from 'react';
import axios from 'axios';

const api_key = process.env.REACT_APP_GEO_IPIFY_KEY;

const useGetLocation = () => {
  const [lat, setLat] = useState('14.63');
  const [lng, setLng] = useState('121.04');

  useEffect(() => {
    const fetchedData = async () => {
      const result = await axios(
        `https://geo.ipify.org/api/v1?apiKey=${api_key}`,
      );

      setLat(result.data.location.lat);
      setLng(result.data.location.lng);
    };

    fetchedData();
  }, []);

  return { lat, lng };
};

export default useGetLocation;
