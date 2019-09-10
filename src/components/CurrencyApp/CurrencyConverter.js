import React from 'react';
import useAxios from '../CustomHooks/useAxios';

const CurrencyConverter = () => {
  const [{ fetchedData }] = useAxios(
    {},
    `https://api.exchangeratesapi.io/latest?base=PHP`,
  );

  console.log(fetchedData);
  return (
    <div>
      {Object.keys(fetchedData).length > 0 ? (
        <div>
          <h1>Currency Converter</h1>
          <div>
            {(1 / fetchedData.rates.AUD).toFixed(2)} PHP = 1 AUD
          </div>
          <div>
            {(1 / fetchedData.rates.CAD).toFixed(2)} PHP = 1 CAD
          </div>
          <div>
            {(1 / fetchedData.rates.EUR).toFixed(2)} PHP = 1 EUR
          </div>
          <div>
            {(1 / fetchedData.rates.GBP).toFixed(2)} PHP = 1 GBP
          </div>
          <div>
            {(1 / fetchedData.rates.USD).toFixed(2)} PHP = 1 USD
          </div>
        </div>
      ) : (
        <div>No Data</div>
      )}
    </div>
  );
};

export default CurrencyConverter;
