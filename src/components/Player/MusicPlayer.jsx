import Player from '@u-wave/react-youtube';
import styles from './musicPlayer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPause, faPlay } from '@fortawesome/free-solid-svg-icons';
import { useRecoilState, useRecoilValue } from 'recoil';
import { playingMusic, playingMusicState } from '../../recoil/music/playMusic';

const MusicPlayer = () => {
  const [musicState, setMusicState] = useRecoilState(playingMusicState);
  const music = useRecoilValue(playingMusic);

  console.log(musicState.isPause);
  return (
    <div className={styles.playerBar}>
      <Player
        video={music.id.videoId ? music.id.videoId : null}
        volume={musicState.volume}
        paused={!musicState.isPause}
        autoplay
        style={{ display: 'none' }}
      />

      <img src={music.snippet.thumbnails.medium.url} alt='' />

      <div className={styles.playerContent}>
        {music ? (
          <>
            <p className={styles.playerTitle}>{music.snippet.title}</p>
            <p className={styles.playerChnnel}>{music.snippet.channelTitle}</p>
          </>
        ) : (
          <p>재생목록이 없습니다.</p>
        )}
      </div>

      <input
        className={styles.playerVolume}
        type='range'
        min={0}
        max={1}
        step={0.02}
        value={musicState.volume}
        color='white'
        onChange={(e) =>
          setMusicState({ ...musicState, volume: e.target.valueAsNumber })
        }
      />

      <button
        className={styles.startBtn}
        onClick={() => {
          setMusicState({ ...musicState, isPause: !musicState.isPause });
        }}
      >
        <FontAwesomeIcon
          icon={musicState.isPause ? faPause : faPlay}
          size='2xl'
        />
      </button>
    </div>
  );
};

export default MusicPlayer;
