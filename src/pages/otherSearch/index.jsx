import React from 'react';
import styles from './style/otherSearch.module.css';
import Text from '../../components/common/Text/Text';
import SearchResult from './SearchResult';
import { useRecoilValue } from 'recoil';
import { playlistSearch } from '../../recoil/search/search';

const OtherSearch = () => {
  const search = useRecoilValue(playlistSearch);

  return (
    <div className={styles.main}>
      <Text.Title className={styles.mainTitle}>
        {search
          ? `'${search}' 관련 플레이리스트 입니다`
          : '원하시는 검색어를 입력해주세요'}
      </Text.Title>
      <SearchResult />
    </div>
  );
};

export default OtherSearch;
