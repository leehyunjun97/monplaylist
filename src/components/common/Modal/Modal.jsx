import React from 'react';
import styles from './style/modal.module.css';
import Text from '../Text/Text';

const Modal = ({ text }) => {
  return (
    <div className={styles.modalSection1}>
      <div className={styles.modalSection2}>
        <Text children={text} />
      </div>
    </div>
  );
};

export default Modal;
