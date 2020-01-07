import React from 'react';

const ConvertUnixTime = ({ time }) => {
  const date = new Date(time * 1000).toLocaleDateString();

  return <div>{date}</div>;
};

const ConvertTemperature = ({ temp, units }) => {
  let convertedTemp;
  switch (units) {
    case 'C':
      convertedTemp = `${(((temp - 32) * 5) / 9).toFixed(0)}°C`;
      break;
    case 'F':
      convertedTemp = `${temp.toFixed(0)}°F`;
      break;
    default:
      convertedTemp = temp.toFixed(0);
  }

  return <div>{convertedTemp}</div>;
};

export { ConvertUnixTime, ConvertTemperature };
