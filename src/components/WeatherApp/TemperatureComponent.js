import React from 'react';
import ConvertTemperature from './ConvertTemperature';

const TemperatureComponent = ({ isToggle, data }) => {
  return (
    <>
      {isToggle.C && (
        <div>
          <ConvertTemperature temp={data} units="C" />
        </div>
      )}
      {isToggle.F && (
        <div>
          <ConvertTemperature temp={data} units="F" />
        </div>
      )}
      {isToggle.K && (
        <div>
          <ConvertTemperature temp={data} units="K" />
        </div>
      )}
    </>
  );
};

export default TemperatureComponent;
