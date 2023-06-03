import styles from './videoCard.module.css';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { formatAgo } from '../../../util/date';
import { useSetRecoilState } from 'recoil';
import {
  playingMusic,
  playingMusicState,
} from '../../../recoil/music/playMusic';
import { useEffect, useMemo, useState } from 'react';
import Button from '../Button/Button';
import Text from '../Text/Text';
import Toast from '../Toast/Toast';

const VideoCard = ({ video }) => {
  const { title, thumbnails, channelTitle, publishedAt } = video.snippet;
  const setPlayingMusicState = useSetRecoilState(playingMusic);
  const setMusicState = useSetRecoilState(playingMusicState);
  const [isToast, setIsToast] = useState({
    isbool: false,
    text: '',
  });
  const [isfa, setIsfa] = useState(false);
  const getFavoritItem = useMemo(() => {
    return JSON.parse(localStorage.getItem('favoriteMusic')) || [];
  }, []);

  useEffect(() => {
    if (isToast.isbool) {
      const timer = setTimeout(() => {
        setIsToast({ ...isToast, isbool: false });
      }, 1300);
      return () => clearTimeout(timer);
    }

    if (
      getFavoritItem?.filter((item) => item.id.videoId === video.id.videoId)
        .length > 0
    ) {
      setIsfa(true);
    }
  }, [getFavoritItem, isToast, video.id.videoId]);

  const favoriteHandler = () => {
    if (isfa) {
      setIsfa(false);
      setIsToast({ text: '삭제되었습니다', isbool: true });
      localStorage.setItem('favoriteMusic', JSON.stringify(removeMyPlaylist()));
    } else {
      setMyPlaylist(video);
    }
  };

  const setMyPlaylist = async (video) => {
    setIsfa(true);
    setIsToast({ text: '리스트에 추가되었습니다', isbool: true });
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
      {isToast.isbool && <Toast text={isToast.text} />}
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

        <Button.IconBtn
          className={styles.favoriteBtn}
          icon={faHeart}
          iconClassName={
            !isfa ? styles.favoriteIcon : styles.favoriteIcon_active
          }
          size={'xl'}
          onClick={favoriteHandler}
        />
      </div>
      <div className={styles.videoContent}>
        <Text className={styles.title} children={title} />
        <Text className={styles.channelTitle} children={channelTitle} />
        <Text
          className={styles.publishedAt}
          children={formatAgo(publishedAt, 'ko')}
        />
      </div>
    </li>
  );
};

export default VideoCard;
