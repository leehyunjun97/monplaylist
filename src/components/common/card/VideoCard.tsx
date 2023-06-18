import styles from './style/videoCard.module.css';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { formatAgo } from '../../../util/date';
import { useRecoilState, useSetRecoilState } from 'recoil';
import {
  playingMusic,
  playingMusicState,
} from '../../../recoil/music/playMusic';
import { useEffect, useState } from 'react';
import Button from '../Button/Button';
import Text from '../Text/Text';
import Toast from '../Toast/Toast';
import { favoriteMusicList } from '../../../recoil/music/favoriteMusic';
import { IVideo } from '../../../types/video';

interface IProps {
  video: IVideo;
}

const VideoCard = ({ video }: IProps) => {
  const { title, thumbnails, channelTitle, publishedAt } = video.snippet;
  const setPlayingMusicState = useSetRecoilState(playingMusic);
  const setMusicState = useSetRecoilState(playingMusicState);
  const [isToast, setIsToast] = useState({
    isbool: false,
    text: '',
  });
  const [favoriteMusicState, setFavoriteMusicState] =
    useRecoilState(favoriteMusicList);

  useEffect(() => {
    if (isToast.isbool) {
      const timer = setTimeout(() => {
        setIsToast({ ...isToast, isbool: false });
      }, 1300);
      return () => clearTimeout(timer);
    }
  }, [isToast]);

  const favoriteHandler = () => {
    if (isFavoriteHandler(video.id.videoId)) {
      setMyPlaylist();
    } else {
      removeMyPlaylist();
    }
  };

  const setMyPlaylist = () => {
    setFavoriteMusicState((prev) => [...prev, video]);
    localStorage.setItem(
      'favoriteMusic',
      JSON.stringify([...favoriteMusicState, video])
    );
    setIsToast({ isbool: true, text: '리스트에 추가되었습니다' });
  };

  const removeMyPlaylist = () => {
    const removeList = favoriteMusicState.filter(
      (item) => item.id.videoId !== video.id.videoId
    );

    setFavoriteMusicState(removeList);
    localStorage.setItem('favoriteMusic', JSON.stringify(removeList));
    setIsToast({ isbool: true, text: '리스트에 삭제되었습니다' });
  };

  const isFavoriteHandler = (id: string) => {
    return (
      favoriteMusicState.filter((item) => item.id.videoId === id).length === 0
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
            isFavoriteHandler(video.id.videoId)
              ? styles.favoriteIcon
              : styles.favoriteIcon_active
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
