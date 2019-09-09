import React, { useContext } from 'react';
import { SearchContext } from '../../context/SearchContext';

export default function Search() {
  const { query, handleChange, handleSubmit } = useContext(
    SearchContext,
  );

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="searchBar"
          placeholder="search term here"
          value={query}
          onChange={handleChange}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}
