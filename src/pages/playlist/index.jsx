import React, { useEffect } from 'react';
import RelatedList from './RelatedList';
import styles from './playlist.module.css';
import Text from '../../components/common/Text/Text';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { chooseEmotion } from '../../recoil/emotion/emotion';

const Playlist = () => {
  const chooseEmotionList = useRecoilValue(chooseEmotion);
  const navigate = useNavigate();

  useEffect(() => {
    if (!chooseEmotionList.id) {
      navigate('/');
    }
  }, [navigate, chooseEmotionList]);

  return (
    <div className={styles.main}>
      <Text.Title className={styles.mainTitle}>
        이런 분위기의 플레이리스트를 찾으시나요?
      </Text.Title>
      <RelatedList />
    </div>
  );
};

export default Playlist;
