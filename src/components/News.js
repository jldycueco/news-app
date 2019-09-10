import React from 'react';
import styles from './News.module.css';

export default function News({ news }) {
  return (
    <div className={styles.newsCardContainer}>
      <a href={news.url} target="_blank" rel="noopener noreferrer">
        <div className={styles.newsContainer}>
          <div className={styles.newsCard}>
            <h1>{news.title}</h1>
            <div className={styles.newsSource}>
              <h2>{news.source.name}</h2>
              <h2>{news.publishedAt}</h2>
            </div>
          </div>
          <div className={styles.imageContainer}>
            <img
              src={news.urlToImage}
              alt={news.urlToImage}
              className={styles.image}
            />
          </div>
        </div>
      </a>
    </div>
  );
}
