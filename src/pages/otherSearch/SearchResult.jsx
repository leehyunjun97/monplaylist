import React, { useState } from 'react';
import styles from './otherSearch.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useQuery } from 'react-query';
import { getMusicList } from '../../services/youtube/youtube';
import VideoCard from '../../components/common/card/VideoCard';
import Loding from '../../components/common/Loding/Loding';
import { useRecoilState } from 'recoil';
import { playlistSearch } from '../../recoil/search/search';

const SearchResult = () => {
  const [searchInputState, setSearhInputState] = useState('');
  const [search, setSearch] = useRecoilState(playlistSearch);

  const { data, isLoading } = useQuery(
    ['getMusicList', search],
    async () => {
      const params = {
        key: process.env.REACT_APP_YOUTUBE_KEY,
        part: 'snippet',
        q: `${search} 플레이리스트`,
        maxResults: 12,
        type: 'video',
        videoDuration: 'long',
      };

      const a = await getMusicList(params);
      return a.items;
    },
    {
      enabled: !!search,
      refetchOnWindowFocus: false,
      useErrorBoundary: true,
      cacheTime: 5 * 10 * 1000,
      staleTime: 5 * 10 * 1000,
    }
  );

  return (
    <>
      <div className={styles.searchInputSection}>
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          style={{ marginRight: '15px', opacity: '0.7', cursor: 'pointer' }}
          onClick={() => setSearch(searchInputState)}
        />
        <input
          placeholder='PLAYLIST'
          className={styles.searchInput}
          type='text'
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
            style={{
              marginLeft: '15px',
              opacity: '0.7',
              cursor: 'pointer',
              position: 'absolute',
              right: '14px',
              top: '13px',
            }}
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
