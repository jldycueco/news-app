import React, { useContext } from 'react';
import { SearchContext } from '../context/SearchContext';
import News from '../components/News';

const NewsList = () => {
  const { isError, isLoading, fetchedData } = useContext(
    SearchContext,
  );

  return (
    <div>
      {isError && <div>Error</div>}
      {isLoading ? (
        <div>Loading</div>
      ) : (
        fetchedData.articles.map((news) => (
          <News key={news.title} news={news} />
        ))
      )}
    </div>
  );
};

export default NewsList;
