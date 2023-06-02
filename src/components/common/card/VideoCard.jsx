import styles from './videoCard.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { formatAgo } from '../../../util/date';
import { useRecoilState, useSetRecoilState } from 'recoil';
import {
  playingMusic,
  playingMusicState,
} from '../../../recoil/music/playMusic';
import { useState } from 'react';
import Modal from '../Modal/Modal';
import { favoriteMusicAtom } from '../../../recoil/music/favoriteMusic';

const VideoCard = ({ video }) => {
  const { title, thumbnails, channelTitle, publishedAt } = video.snippet;
  const setPlayingMusicState = useSetRecoilState(playingMusic);
  const setMusicState = useSetRecoilState(playingMusicState);
  const [isModal, setIsModal] = useState({
    isbool: false,
    text: '',
  });
  const [favoriteMusicState, setFavoriteMusicState] =
    useRecoilState(favoriteMusicAtom);

  const isFavoriteItem = (id) => {
    return favoriteMusicState.filter((item) => item.id.videoId === id);
  };

  const addFavoriteHandler = () => {
    setFavoriteMusicState((prev) => [...prev, video]);
    localStorage.setItem(
      'favoriteMusic',
      JSON.stringify([...favoriteMusicState, video])
    );
  };

  return (
    <li>
      {isModal.isbool && <Modal text={isModal.text} />}
      <div className={styles.videoImgSection}>
        <img
          className={styles.videoImg}
          src={thumbnails.medium.url}
          alt={title}
          onClick={() => {
            setPlayingMusicState(video);
            setMusicState((prev) => ({ ...prev, isPause: true }));
          }}
        />
        <button className={styles.favoriteBtn} onClick={addFavoriteHandler}>
          <FontAwesomeIcon
            className={
              isFavoriteItem(video.id.videoId).length === 0
                ? styles.favoriteIcon
                : styles.favoriteIcon_active
            }
            icon={faHeart}
            size='xl'
          />
        </button>
      </div>
      <div className={styles.videoContent}>
        <p className={styles.title}>{title}</p>
        <p className={styles.channelTitle}>{channelTitle}</p>
        <p className={styles.publishedAt}>{formatAgo(publishedAt, 'ko')}</p>
      </div>
    </li>
  );
};

export default VideoCard;
