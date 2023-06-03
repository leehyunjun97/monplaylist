import React from 'react';
import Spnner from '../../../assets/images/Spinner.gif';
import styles from './loding.module.css';

const Loding = () => {
  return (
    <>
      <img src={Spnner} alt='' className={styles.lodingSpnnerImg} />
    </>
  );
};

export default Loding;
