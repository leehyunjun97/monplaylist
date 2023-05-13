import React from 'react';
import styles from './header.module.css';

const header = () => {
  return (
    <div className={styles.header}>
      <button className={styles.headerTitle}>MONPLAYLIST</button>
      <div className={styles.headerBtnSection}>
        <button>MYPLAYLIST</button>
        <button>SEARCH</button>
      </div>
    </div>
  );
};
export default header;
