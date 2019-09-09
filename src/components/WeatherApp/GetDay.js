import React from 'react';

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

export default GetDay;
