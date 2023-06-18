import React from 'react';
import styles from './style/modal.module.css';
import Text from '../Text/Text';

interface IProps {
  text: string;
}

const Modal = ({ text }: IProps) => {
  return (
    <div className={styles.modalSection1}>
      <div className={styles.modalSection2}>
        <Text children={text} />
      </div>
    </div>
  );
};

export default Modal;
