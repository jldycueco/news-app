import React, { useState } from 'react';
import WeatherIcon from 'react-icons-weather';
import useGetLocation from '../../customHooks/useGetLocation';
import useAxios from '../../customHooks/useAxios';
import TemperatureComponent from './TemperatureComponent';
import DailyForecast from './DailyForecast';
import {
  makeStyles,
  Typography,
  ButtonGroup,
  Button,
} from '@material-ui/core';

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
    margin: 0,
  },
  weatherIcon: {
    fontSize: '50px',
    margin: '0.25em 0 0.25em 0',
  },
  dailyForecast: {
    display: 'flex',
  },
  button: {
    marginTop: '5px',
  },
});

const WeatherApp = () => {
  const classes = useStyles();

  const [isToggle, setIsToggle] = useState({
    C: true,
    F: false,
  });

  const { lat, lng } = useGetLocation();
  const [{ isLoading, isError, fetchedData }] = useAxios(
    {},
    `${proxy}https://api.darksky.net/forecast/${api_key}/${lat},${lng}`,
  );

  const handleToggleButtonC = (event) => {
    event.preventDefault();
    setIsToggle({ C: true, F: false });
  };

  const handleToggleButtonF = (event) => {
    event.preventDefault();
    setIsToggle({ C: false, F: true });
  };

  return (
    <>
      <div>
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
                className={classes.weatherIcon}
              />
            </div>

            <div className={classes.dailyForecast}>
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

        <ButtonGroup variant="text" className={classes.button}>
          <Button onClick={handleToggleButtonC} size="small">
            C
          </Button>
          <Button onClick={handleToggleButtonF} size="small">
            F
          </Button>
        </ButtonGroup>
      </div>
    </>
  );
};

export default WeatherApp;
