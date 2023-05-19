import React, { useEffect } from 'react';
import styles from './home.module.css';
import ChooseEmotion from './ChooseEmotion';
import Text from '../../components/common/Text/Text';
import { useResetRecoilState } from 'recoil';
import { chooseEmotion, subEmotionList } from '../../recoil/emotion/emotion';

const Main = () => {
  const chooseEmotionReset = useResetRecoilState(chooseEmotion);
  const subListReset = useResetRecoilState(subEmotionList);

  useEffect(() => {
    chooseEmotionReset();
    subListReset();
  }, [chooseEmotionReset, subListReset]);
  return (
    <div className={styles.main}>
      <Text.Title className={styles.mainTitle}>
        당신의 현재 분위기를 알고싶어요
      </Text.Title>
      <ChooseEmotion />
    </div>
  );
};

export default Main;
