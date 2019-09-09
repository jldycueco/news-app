import React from 'react';

const ConvertTemperature = ({ temp, units }) => {
  let convertedTemp;
  switch (units) {
    case 'C':
      convertedTemp = (((temp - 32) * 5) / 9).toFixed(0);
      break;
    case 'K':
      convertedTemp = (((temp - 32) * 5) / 9 + 273.15).toFixed(0);
      break;
    default:
      convertedTemp = temp.toFixed(0);
  }

  return <div>{convertedTemp}</div>;
};

export default ConvertTemperature;
