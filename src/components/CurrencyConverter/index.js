import React from 'react';
import { makeStyles, Button, Typography } from '@material-ui/core';
import useAxios from '../../customHooks/useAxios';

const useStyles = makeStyles({
  title: {
    fontSize: 24,
    textTransform: 'uppercase',
  },
});

const CurrencyConverter = () => {
  const [{ fetchedData }] = useAxios(
    {},
    `https://api.exchangeratesapi.io/latest?base=PHP`,
  );
  const classes = useStyles();

  return (
    <>
      {Object.keys(fetchedData).length > 0 ? (
        <>
          <Typography className={classes.title} gutterBottom>
            Foreign Exchange
          </Typography>
          <Typography>
            {(1 / fetchedData.rates.AUD).toFixed(2)} PHP = 1 AUD
          </Typography>
          <Typography>
            {(1 / fetchedData.rates.CAD).toFixed(2)} PHP = 1 CAD
          </Typography>
          <Typography>
            {(1 / fetchedData.rates.EUR).toFixed(2)} PHP = 1 EUR
          </Typography>
          <Typography>
            {(1 / fetchedData.rates.GBP).toFixed(2)} PHP = 1 GBP
          </Typography>
          <Typography>
            {(1 / fetchedData.rates.USD).toFixed(2)} PHP = 1 USD
          </Typography>
        </>
      ) : (
        <div>No Data</div>
      )}

      <Button size="small">Learn More</Button>
    </>
  );
};

export default CurrencyConverter;
