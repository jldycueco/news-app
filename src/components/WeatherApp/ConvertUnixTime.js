import React from 'react';

const ConvertUnixTime = ({ time }) => {
  const date = new Date(time * 1000).toLocaleDateString();

  return <div>{date}</div>;
};

export default ConvertUnixTime;
