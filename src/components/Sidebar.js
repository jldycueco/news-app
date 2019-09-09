import React, { useContext } from 'react';
import { SearchContext } from '../context/SearchContext';
import styles from './Sidebar.module.css';

export default function Sidebar() {
  const { sideBarSubmit } = useContext(SearchContext);

  return (
    <div className={styles.sidebar}>
      <input
        type="submit"
        name="general"
        value="General"
        onClick={sideBarSubmit}
      />

      <input
        type="submit"
        name="business"
        value="Business"
        onClick={sideBarSubmit}
      />

      <input
        type="submit"
        name="entertainment"
        value="Entertainment"
        onClick={sideBarSubmit}
      />
      <input
        type="submit"
        name="health"
        value="Health"
        onClick={sideBarSubmit}
      />
      <input
        type="submit"
        name="science"
        value="Science"
        onClick={sideBarSubmit}
      />
      <input
        type="submit"
        name="technology"
        value="Technology"
        onClick={sideBarSubmit}
      />
      <input
        type="submit"
        name="sports"
        value="Sports"
        onClick={sideBarSubmit}
      />
    </div>
  );
}
