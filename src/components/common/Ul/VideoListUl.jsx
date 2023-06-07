import React from 'react';
import VideoCard from '../Card/VideoCard';
import styles from './style/videoListUl.module.css';

const VideoListUl = ({ list }) => {
  return (
    <ul className={styles.relatedListUl}>
      {list &&
        list.map((video) => <VideoCard key={video.id.videoId} video={video} />)}
    </ul>
  );
};

export default VideoListUl;
