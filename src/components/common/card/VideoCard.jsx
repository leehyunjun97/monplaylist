import React from 'react';
import styles from './videoCard.module.css';
import { formatAgo } from '../../../util/date';
import { useSetRecoilState } from 'recoil';
import { playingMusic } from '../../../recoil/music/playMusic';

const VideoCard = ({ video }) => {
  const { title, thumbnails, channelTitle, publishedAt } = video.snippet;
  const setPlayingMusicState = useSetRecoilState(playingMusic);

  console.log(video);

  return (
    <li>
      <img
        className={styles.videoImg}
        src={thumbnails.medium.url}
        alt={title}
        onClick={() => {
          setPlayingMusicState(video);
        }}
      />
      <div className={styles.videoContent}>
        <p className={styles.title}>{title}</p>
        <p className={styles.channelTitle}>{channelTitle}</p>
        <p className={styles.publishedAt}>{formatAgo(publishedAt, 'ko')}</p>
      </div>
    </li>
  );
};

export default VideoCard;
