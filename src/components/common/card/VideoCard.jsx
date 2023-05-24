import styles from './videoCard.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { formatAgo } from '../../../util/date';
import { useSetRecoilState } from 'recoil';
import {
  playingMusic,
  playingMusicState,
} from '../../../recoil/music/playMusic';
import { useEffect, useMemo, useState } from 'react';
import Modal from '../Modal/Modal';

const VideoCard = ({ video }) => {
  const { title, thumbnails, channelTitle, publishedAt } = video.snippet;
  const setPlayingMusicState = useSetRecoilState(playingMusic);
  const setMusicState = useSetRecoilState(playingMusicState);
  const [isModal, setIsModal] = useState({
    isbool: false,
    text: '',
  });
  const [isfa, setIsfa] = useState(false);
  const getFavoritItem = useMemo(() => {
    return JSON.parse(localStorage.getItem('favoriteMusic')) || [];
  }, []);

  useEffect(() => {
    if (isModal.isbool) {
      const timer = setTimeout(() => {
        setIsModal({ ...isModal, isbool: false });
      }, 1300);
      return () => clearTimeout(timer);
    }

    if (
      getFavoritItem?.filter((item) => item.id.videoId === video.id.videoId)
        .length > 0
    ) {
      setIsfa(true);
    }
  }, [getFavoritItem, isModal, video.id.videoId]);

  const favoriteHandler = () => {
    if (isfa) {
      setIsfa(false);
      setIsModal({ text: '삭제되었습니다', isbool: true });
      localStorage.setItem('favoriteMusic', JSON.stringify(removeMyPlaylist()));
    } else {
      setMyPlaylist(video);
    }
  };

  const setMyPlaylist = async (video) => {
    setIsfa(true);
    setIsModal({ text: '리스트에 추가되었습니다', isbool: true });
    await getFavoritItem.push(video);
    localStorage.setItem('favoriteMusic', JSON.stringify(getFavoritItem));
  };

  const removeMyPlaylist = () => {
    return getFavoritItem.filter(
      (item) => item.id.videoId !== video.id.videoId
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
        <button
          className={styles.favoriteBtn}
          onClick={() => favoriteHandler()}
        >
          <FontAwesomeIcon
            className={!isfa ? styles.favoriteIcon : styles.favoriteIcon_active}
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
