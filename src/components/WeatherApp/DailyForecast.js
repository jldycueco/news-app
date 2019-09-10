import React from 'react';
import WeatherIcon from 'react-icons-weather';
import TemperatureComponent from './TemperatureComponent';
import GetDay from './GetDay';

const DailyForecast = ({ isToggle, daily }) => {
  return (
    <div>
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
