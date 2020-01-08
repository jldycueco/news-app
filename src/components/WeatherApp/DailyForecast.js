import React from 'react';
import WeatherIcon from 'react-icons-weather';
import TemperatureComponent from './TemperatureComponent';

const GetDay = ({ day }) => {
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

      {new Date().getDay() === new Date(daily.time * 1000).getDay() &&
      new Date().toLocaleDateString() ===
        new Date(daily.time * 1000).toLocaleDateString() ? (
        <div>Today</div>
      ) : (
        <div>
          <GetDay day={new Date(daily.time * 1000).getDay()} />
        </div>
      )}
    </div>
  );
};

export default DailyForecast;
