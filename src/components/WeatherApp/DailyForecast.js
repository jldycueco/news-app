import React from 'react';
import WeatherIcon from 'react-icons-weather';
import TemperatureComponent from './TemperatureComponent';
import { isToday, getDay } from 'date-fns';

const ReturnDay = ({ day }) => {
  let dayString;
  switch (day) {
    case 0:
      dayString = 'Sun';
      break;
    case 1:
      dayString = 'Mon';
      break;
    case 2:
      dayString = 'Tue';
      break;
    case 3:
      dayString = 'Wed';
      break;
    case 4:
      dayString = 'Thu';
      break;
    case 5:
      dayString = 'Fri';
      break;
    case 6:
      dayString = 'Sat';
      break;
    default:
      dayString = 'N/A';
  }

  return <div>{dayString}</div>;
};

const DailyForecast = ({ isToggle, daily }) => {
  const day = new Date(daily.time * 1000);

  return (
    <div
      style={{
        marginRight: '0.75em',
      }}
    >
      <div>
        <WeatherIcon name="darksky" iconId={daily.icon} />
      </div>

      <TemperatureComponent
        data={daily.apparentTemperatureHigh}
        isToggle={isToggle}
      />

      <TemperatureComponent
        data={daily.temperatureHigh}
        isToggle={isToggle}
      />

      {isToday(day) ? (
        <div>Today</div>
      ) : (
        <div>
          <ReturnDay day={getDay(day)} />
        </div>
      )}
    </div>
  );
};

export default DailyForecast;
