import React from 'react';
import { makeStyles, Button, Typography } from '@material-ui/core';
import useAxios from '../../customHooks/useAxios';

const useStyles = makeStyles({
  title: {
    fontSize: 24,
    textTransform: 'uppercase',
    marginBottom: '20px',
  },
  currency: {
    marginBottom: '10px',
  },
});

const CurrencyConverter = () => {
  const [{ isLoading, isError, fetchedData }] = useAxios(
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
          <Typography className={classes.currency}>
            {(1 / fetchedData.rates.AUD).toFixed(2)} PHP = 1.00 AUD
          </Typography>
          <Typography className={classes.currency}>
            {(1 / fetchedData.rates.CAD).toFixed(2)} PHP = 1.00 CAD
          </Typography>
          <Typography className={classes.currency}>
            {(1 / fetchedData.rates.EUR).toFixed(2)} PHP = 1.00 EUR
          </Typography>
          <Typography className={classes.currency}>
            {(1 / fetchedData.rates.GBP).toFixed(2)} PHP = 1.00 GBP
          </Typography>
          <Typography className={classes.currency}>
            {(1 / fetchedData.rates.USD).toFixed(2)} PHP = 1.00 USD
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
