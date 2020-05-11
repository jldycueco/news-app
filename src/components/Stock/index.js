import React from 'react';
import useAxios from '../../customHooks/useAxios';
import { makeStyles, Typography, Button } from '@material-ui/core';

const API_KEY = process.env.REACT_APP_STOCK_API_KEY;

const useStyles = makeStyles({
  title: {
    fontSize: 24,
    textTransform: 'uppercase',
    marginBottom: '20px',
  },
  stock: {
    marginBottom: '10px',
  },
});

const StockComponent = () => {
  const classes = useStyles();

  const [{ fetchedData }] = useAxios(
    {},
    `https://api.worldtradingdata.com/api/v1/stock?symbol=SNAP&api_token=${API_KEY}`,
  );

  console.log(fetchedData);

  return (
    <>
      <Typography className={classes.title}>Stock Market</Typography>
      {Object.keys(fetchedData).length > 0 && (
        <div>
          {fetchedData.data.map((stock) => (
            <Typography key={stock.symbol} className={classes.stock}>
              {stock.symbol} = {stock.price} {stock.currency}
            </Typography>
          ))}
        </div>
      )}
      <Button>See More</Button>
    </>
  );
};

export default StockComponent;
