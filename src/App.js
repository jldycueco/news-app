import React from 'react';
import MainPage from './components/Page';
import SearchContextProvider from './context/SearchContext';

function App() {
  return (
    <>
      <SearchContextProvider>
        <MainPage />
      </SearchContextProvider>
    </>
  );
}

export default App;
