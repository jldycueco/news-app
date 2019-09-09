import React from 'react';
import styles from './Appbar.module.css';
import SearchBar from './SearchBar';

export default function Appbar() {
  return (
    <div>
      <ul className={styles.appbarContainer}>
        <li>Home</li>
        <li>
          <SearchBar />
        </li>
      </ul>
    </div>
  );
}
