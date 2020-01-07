import React, { useState } from 'react';
import WeatherIcon from 'react-icons-weather';
import './index.css';
import useGetLocation from '../../customHooks/useGetLocation';
import useAxios from '../../customHooks/useAxios';
import TemperatureComponent from './TemperatureComponent';
import DailyForecast from './DailyForecast';
import { makeStyles, Typography } from '@material-ui/core';

const proxy = `https://cors-anywhere.herokuapp.com/`;
const api_key = process.env.REACT_APP_DARKSKY_API_KEY;

const useStyles = makeStyles({
  card: {
    minWidth: 300,
    marginBottom: '20px',
  },
  title: {
    fontSize: 24,
    textTransform: 'uppercase',
  },
});

const WeatherApp = () => {
  const classes = useStyles();

  const [isToggle, setIsToggle] = useState({
    C: true,
    F: false,
  });

  const { lat, lng } = useGetLocation();
  const [{ fetchedData }] = useAxios(
    {},
    `${proxy}https://api.darksky.net/forecast/${api_key}/${lat},${lng}`,
  );

  const handleToggleButton = (event) => {
    const name = event.target.name;
    if (name === 'C') {
      setIsToggle({ C: true, F: false });
    } else if (name === 'F') {
      setIsToggle({ C: false, F: true });
    }
  };

  return (
    <>
      <div className="weather-app-container">
        {Object.keys(fetchedData).length > 0 ? (
          <div>
            <Typography>{fetchedData.timezone}</Typography>
            <div>
              <p>{fetchedData.currently.summary}</p>
              <TemperatureComponent
                data={fetchedData.currently.temperature}
                isToggle={isToggle}
              />
              <WeatherIcon
                name="darksky"
                iconId={fetchedData.currently.icon}
                className="weather-icon"
              />
            </div>

            <div className="daily-weather-forecast">
              {fetchedData.daily.data.map((daily) => (
                <DailyForecast
                  key={daily.time}
                  daily={daily}
                  isToggle={isToggle}
                />
              ))}
            </div>
          </div>
        ) : (
          <div>No data</div>
        )}
        <input
          type="submit"
          name="C"
          value="C"
          onClick={handleToggleButton}
        />
        <input
          type="submit"
          name="F"
          value="F"
          onClick={handleToggleButton}
        />
      </div>
    </>
  );
};

export default WeatherApp;
