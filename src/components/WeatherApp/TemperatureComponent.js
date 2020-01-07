import React from 'react';
import { ConvertTemperature } from './ConvertFunctions';

const TemperatureComponent = ({ isToggle, data }) => {
  const { C, F } = isToggle;

  return (
    <>
      {C && (
        <div>
          <ConvertTemperature temp={data} units="C" />
        </div>
      )}
      {F && (
        <div>
          <ConvertTemperature temp={data} units="F" />
        </div>
      )}
    </>
  );
};

export default TemperatureComponent;
