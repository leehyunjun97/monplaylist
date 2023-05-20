import React from 'react';
import styles from './modal.module.css';

const Modal = ({ text }) => {
  return (
    <div className={styles.modalSection1}>
      <div className={styles.modalSection2}>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Modal;
