import React, { useState } from 'react';
import styles from './style/otherSearch.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons';
import Loding from '../../components/common/Loding/Loding';
import { useSetRecoilState } from 'recoil';
import { playlistSearch } from '../../recoil/search/search';
import Input from '../../components/common/Input/Input';
import { useFetchSearchList } from '../../hooks/useFetchSearchList';
import VideoListUl from '../../components/common/Ul/VideoListUl';

const SearchResult = () => {
  const [searchInputState, setSearhInputState] = useState('');
  const setSearch = useSetRecoilState(playlistSearch);

  const { data, isLoading } = useFetchSearchList();

  return (
    <>
      <div className={styles.searchInputSection}>
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          style={{ marginRight: '15px', opacity: '0.7', cursor: 'pointer' }}
          onClick={() => setSearch(searchInputState)}
        />

        <Input
          placeholder={'PLAYLIST'}
          className={styles.searchInput}
          value={searchInputState}
          onChange={(e) => setSearhInputState(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              setSearch(searchInputState);
            }
          }}
        />

        {searchInputState && (
          <FontAwesomeIcon
            icon={faXmark}
            className={styles.removeIcon}
            size='lg'
            onClick={() => setSearhInputState('')}
          />
        )}
      </div>
      {isLoading && <Loding />}

      {!isLoading && <VideoListUl list={data} />}
    </>
  );
};

export default SearchResult;
