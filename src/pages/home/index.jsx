import React from 'react';
import styles from './home.module.css';
import ChooseEmotion from './ChooseEmotion';
import Text from '../../components/common/Text/Text';

const main = () => {
  return (
    <div className={styles.main}>
      <Text.Title className={styles.mainTitle}>
        당신의 현재 분위기를 알고싶어요
      </Text.Title>
      <ChooseEmotion />
    </div>
  );
};

export default main;
