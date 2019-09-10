import React from 'react';
import './App.css';
import AppBar from './components/Navbar/Appbar';
import WeatherApp from './components/WeatherApp/GetWeather';
import CurrencyConverter from './components/CurrencyApp/CurrencyConverter';
import Stock from './components/Stock';
import NewsList from './components/NewsList';
import SideBar from './components/Sidebar';
import SearchContextProvider from './context/SearchContext';

function App() {
  return (
    <div>
      <SearchContextProvider>
        <AppBar />
        <div className="App">
          <div>
            <SideBar />
          </div>
          <div>
            <NewsList />
          </div>
          <div>
            <WeatherApp />
            <CurrencyConverter />
            <Stock />
          </div>
        </div>
      </SearchContextProvider>
    </div>
  );
}

export default App;
