import React from 'react';
import Text from '../Text/Text';
import styles from './style/toast.module.css';

interface IProps {
  text: string;
}

const Toast = ({ text }: IProps) => {
  return (
    <div className={styles.modalSection1}>
      <div className={styles.modalSection2}>
        <Text children={text} />
      </div>
    </div>
  );
};

export default Toast;
