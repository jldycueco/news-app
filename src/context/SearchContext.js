import React, { createContext, useState } from 'react';
import useAxios from '../customHooks/useAxios';

const newsApiKey = process.env.REACT_APP_NEWS_API_KEY;

export const SearchContext = createContext();

const SearchContextProvider = (props) => {
  const [query, setQuery] = useState('');

  const [{ fetchedData, isLoading, isError }, setUrl] = useAxios(
    { articles: [] },
    `https://newsapi.org/v2/top-headlines?country=us&category=general&pageSize=100&apiKey=${newsApiKey}`,
  );

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setUrl(
      `https://newsapi.org/v2/everything?q=${query}&apiKey=${newsApiKey}`,
    );
    setQuery('');
  };

  const handleUpdateUrl = (category, country) => {
    setUrl(
      `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&pageSize=100&apiKey=${newsApiKey}`,
    );
  };

  return (
    <SearchContext.Provider
      value={{
        query,
        fetchedData,
        isLoading,
        isError,
        handleChange,
        handleSubmit,
        setUrl,
        handleUpdateUrl,
      }}
    >
      {props.children}
    </SearchContext.Provider>
  );
};

export default SearchContextProvider;
