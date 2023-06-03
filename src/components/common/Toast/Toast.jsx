import React from 'react';
import Text from '../Text/Text';
import styles from './toast.module.css';

const Toast = ({ text }) => {
  return (
    <div className={styles.modalSection1}>
      <div className={styles.modalSection2}>
        <Text children={text} />
      </div>
    </div>
  );
};

export default Toast;
