import React, { useState } from 'react';
import styles from './otherSearch.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons';
import VideoCard from '../../components/common/Card/VideoCard';
import Loding from '../../components/common/Loding/Loding';
import { useSetRecoilState } from 'recoil';
import { playlistSearch } from '../../recoil/search/search';
import Input from '../../components/common/Input/Input';
import { useFetchSearchList } from '../../hooks/useFetchSearchList';

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

      <ul className={styles.relatedListUl}>
        {!isLoading &&
          data &&
          data.map((video) => (
            <VideoCard key={video.id.videoId} video={video} />
          ))}
      </ul>
    </>
  );
};

export default SearchResult;
