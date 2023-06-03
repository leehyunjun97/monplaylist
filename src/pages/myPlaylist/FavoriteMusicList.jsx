import React from 'react';
import styles from './myPlaylist.module.css';
import VideoCard from '../../components/common/Card/VideoCard';

const FavoriteMusicList = () => {
  const favorite = JSON.parse(localStorage.getItem('favoriteMusic'));

  return (
    <>
      <ul className={styles.relatedListUl}>
        {favorite &&
          favorite.map((video) => (
            <VideoCard key={video.id.videoId} video={video} />
          ))}
      </ul>
    </>
  );
};

export default FavoriteMusicList;
