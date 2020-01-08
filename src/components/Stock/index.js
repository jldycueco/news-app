import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Stock() {
  const [stockData, setStockData] = useState({
    FB: '',
    AMZN: '',
    AAPL: '',
    NFLX: '',
    GOOGL: '',
  });

  const [dataFB, setDataFB] = useState({});
  const [dataAMZN, setDataAMZN] = useState({});
  // const [dataAAPL, setDataAAPL] = useState({});
  const [dataNFLX, setDataNFLX] = useState({});
  const [dataGOOGL, setDataGOOGL] = useState({});

  useEffect(() => {
    const fetchedData = async () => {
      const result = await axios(
        `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=FB&apikey=G27NL98TAJUVYV9O`,
      );

      // setStockData({ ...stockData, FB: result.data });
      setDataFB(result.data);
    };

    fetchedData();
  }, [stockData]);

  useEffect(() => {
    const fetchedData = async () => {
      const result = await axios(
        `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=AMZN&apikey=G27NL98TAJUVYV9O`,
      );
      setDataAMZN(result.data);
    };

    fetchedData();
  }, []);

  // useEffect(() => {
  //   const fetchedData = async () => {
  //     const result = await axios(
  //       `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=AAPL&apikey=G27NL98TAJUVYV9O`,
  //     );
  //     setDataAAPL(result.data);
  //   };

  //   fetchedData();
  // }, []);

  // useEffect(() => {
  //   const fetchedData = async () => {
  //     const result = await axios(
  //       `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=NFLX&apikey=G27NL98TAJUVYV9O`,
  //     );
  //     setDataNFLX(result.data);
  //   };

  //   fetchedData();
  // }, []);

  useEffect(() => {
    const fetchedData = async () => {
      const result = await axios(
        `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=GOOGL&apikey=G27NL98TAJUVYV9O`,
      );
      setDataGOOGL(result.data);
    };

    fetchedData();
  }, []);

  return (
    <div>
      <h1>Stock Market</h1>

      <div>
        {Object.keys(dataFB).length > 0 && (
          <div>
            {dataFB['Meta Data']['2. Symbol']} -{' '}
            {
              dataFB['Time Series (Daily)'][
                Object.keys(dataFB['Time Series (Daily)'])[0]
              ]['4. close']
            }
          </div>
        )}
      </div>
      <div>
        {Object.keys(dataAMZN).length > 0 && (
          <div>
            {dataAMZN['Meta Data']['2. Symbol']} -{' '}
            {
              dataAMZN['Time Series (Daily)'][
                Object.keys(dataAMZN['Time Series (Daily)'])[0]
              ]['4. close']
            }
          </div>
        )}
      </div>
      {/* <div>
        {Object.keys(dataAAPL).length > 0 && (
          <div>
            {dataAAPL['Meta Data']['2. Symbol']} -{' '}
            {
              dataAAPL['Time Series (Daily)'][
                Object.keys(dataAAPL['Time Series (Daily)'])[0]
              ]['4. close']
            }
          </div>
        )}
      </div> */}

      <div>
        {Object.keys(dataNFLX).length > 0 && (
          <div>
            {dataNFLX['Meta Data']['2. Symbol']} -{' '}
            {
              dataNFLX['Time Series (Daily)'][
                Object.keys(dataNFLX['Time Series (Daily)'])[0]
              ]['4. close']
            }
          </div>
        )}
      </div>
      <div>
        {Object.keys(dataGOOGL).length > 0 && (
          <div>
            {dataGOOGL['Meta Data']['2. Symbol']} -{' '}
            {
              dataGOOGL['Time Series (Daily)'][
                Object.keys(dataGOOGL['Time Series (Daily)'])[0]
              ]['4. close']
            }
          </div>
        )}
      </div>
    </div>
  );
}
