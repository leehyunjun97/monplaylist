import styles from './videoCard.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { formatAgo } from '../../../util/date';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { favoriteMusic, playingMusic } from '../../../recoil/music/playMusic';

const VideoCard = ({ video }) => {
  const { title, thumbnails, channelTitle, publishedAt } = video.snippet;
  const setPlayingMusicState = useSetRecoilState(playingMusic);
  const [favoriteMusicState, setFavoriteMusicState] =
    useRecoilState(favoriteMusic);
  const getFavoritItem = JSON.parse(localStorage.getItem('favoriteMusic'));

  const isfa =
    getFavoritItem?.filter((item) => item.id.videoId === video.id.videoId)
      .length > 0;

  const favoriteHandler = () => {
    const list = [...getFavoritItem];

    if (!isfa) {
      list.push(video);
      setFavoriteMusicState((prev) => ({ ...prev, video }));
      localStorage.setItem('favoriteMusic', JSON.stringify(list));
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
    return;
  };

  return (
    <li>
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
