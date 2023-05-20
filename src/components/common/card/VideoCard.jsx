import styles from './videoCard.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { formatAgo } from '../../../util/date';
import { useSetRecoilState } from 'recoil';
import { favoriteMusic, playingMusic } from '../../../recoil/music/playMusic';
import { useEffect, useState } from 'react';
import Modal from '../Modal/Modal';

const VideoCard = ({ video }) => {
  const { title, thumbnails, channelTitle, publishedAt } = video.snippet;
  const setPlayingMusicState = useSetRecoilState(playingMusic);
  const setFavoriteMusicState = useSetRecoilState(favoriteMusic);
  const [isModal, setIsModal] = useState({
    isbool: false,
    text: '',
  });

  const getFavoritItem = JSON.parse(localStorage.getItem('favoriteMusic'));

  const isfa =
    getFavoritItem?.filter((item) => item.id.videoId === video.id.videoId)
      .length > 0;

  useEffect(() => {
    if (isModal.isbool) {
      console.log(isModal.isbool);
      const timer = setTimeout(() => {
        setIsModal({ ...isModal, isbool: false });
      }, 1300);
      return () => clearTimeout(timer);
    }
  }, [isModal]);

  const favoriteHandler = () => {
    const list = [...getFavoritItem];

    if (!isfa) {
      list.push(video);
      setFavoriteMusicState((prev) => ({ ...prev, video }));
      localStorage.setItem('favoriteMusic', JSON.stringify(list));
      setIsModal({ isbool: true, text: '좋아요가 추가되었습니다.' });
      return;
    }

    if (list.length === 0) return;

    setFavoriteMusicState(
      list.filter((item) => item.id.videoId !== video.id.videoId)
    );
    localStorage.setItem(
      'favoriteMusic',
      JSON.stringify(
        list.filter((item) => item.id.videoId !== video.id.videoId)
      )
    );
    setIsModal({ isbool: true, text: '좋아요가 삭제되었습니다.' });

    return;
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
