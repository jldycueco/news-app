import React from 'react';
import NavBar from './components/Navbar';
import SearchContextProvider from './context/SearchContext';

function App() {
  return (
    <>
      <SearchContextProvider>
        <NavBar />
      </SearchContextProvider>
    </>
  );
}

export default App;
