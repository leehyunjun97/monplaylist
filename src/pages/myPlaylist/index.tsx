import React from 'react';
import styles from './style/myPlaylist.module.css';
import Text from '../../components/common/Text/Text';
import FavoriteMusicList from './FavoriteMusicList';

const MyPlayList = () => {
  return (
    <div className={styles.main}>
      <Text.Title className={styles.mainTitle}>
        좋아요한 플레이 리스트입니다
      </Text.Title>
      <FavoriteMusicList />
    </div>
  );
};

export default MyPlayList;
