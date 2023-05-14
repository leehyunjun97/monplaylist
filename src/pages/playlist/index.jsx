import React from 'react';
import RelatedList from './RelatedList';
import styles from './playlist.module.css';
import Text from '../../components/common/Text/Text';

const Playlist = () => {
  return (
    <div className={styles.main}>
      <Text.Title className={styles.mainTitle}>
        관련된 플레이리스트 입니다
      </Text.Title>
      <RelatedList />
    </div>
  );
};

export default Playlist;
