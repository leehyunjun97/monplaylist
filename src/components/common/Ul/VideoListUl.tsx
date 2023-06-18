import React from 'react';
import VideoCard from '../Card/VideoCard';
import styles from './style/videoListUl.module.css';
import { IVideo } from '../../../types/video';

interface IProps {
  list: IVideo[];
}

const VideoListUl = ({ list }: IProps) => {
  return (
    <ul className={styles.relatedListUl}>
      {list &&
        list.map((video) => <VideoCard key={video.id.videoId} video={video} />)}
    </ul>
  );
};

export default VideoListUl;
