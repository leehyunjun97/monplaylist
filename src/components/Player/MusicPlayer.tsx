import Player from '@u-wave/react-youtube';
import styles from './style/musicPlayer.module.css';
import { faPause, faPlay } from '@fortawesome/free-solid-svg-icons';
import { useRecoilState, useRecoilValue } from 'recoil';
import { playingMusic, playingMusicState } from '../../recoil/music/playMusic';
import Button from '../common/Button/Button';
import Text from '../common/Text/Text';
import Input from '../common/Input/Input';

const MusicPlayer = () => {
  const [musicState, setMusicState] = useRecoilState(playingMusicState);
  const music = useRecoilValue(playingMusic);

  return (
    <div className={styles.playerBar}>
      <Player
        video={music.id.videoId ?? null}
        volume={musicState.volume}
        paused={!musicState.isPause}
        autoplay
        style={{ display: 'none' }}
      />

      {music.id.videoId && (
        <img src={music.snippet.thumbnails.medium.url} alt='' />
      )}

      <div className={styles.playerContent}>
        {music.id.videoId ? (
          <>
            <Text
              className={styles.playerTitle}
              children={music.snippet.title}
            />
            <Text
              className={styles.playerChnnel}
              children={music.snippet.channelTitle}
            />
          </>
        ) : (
          <Text
            className={`${styles.playerTitle} ${styles.playerTitleEmpty}`}
            children={'재생 목록 없음'}
          />
        )}
      </div>

      <Input.Range
        className={styles.playerVolume}
        min={0}
        max={1}
        step={0.02}
        value={musicState.volume}
        color={'white'}
        onChange={(e: any) =>
          setMusicState({ ...musicState, volume: e.target.valueAsNumber })
        }
      />

      <Button.IconBtn
        className={styles.startBtn}
        icon={musicState.isPause ? faPause : faPlay}
        size={'2xl'}
        onClick={() => {
          setMusicState({ ...musicState, isPause: !musicState.isPause });
        }}
      />
    </div>
  );
};

export default MusicPlayer;
