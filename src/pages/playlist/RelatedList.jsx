import { useQuery } from 'react-query';
import { useRecoilState, useRecoilValue } from 'recoil';
import { chooseEmotion, subEmotionList } from '../../recoil/emotion/emotion';
import { getMusicList } from '../../services/youtube/youtube';
import VideoCard from '../../components/common/card/VideoCard';
import styles from './playlist.module.css';
import Button from '../../components/common/Button/Button';
import Loding from '../../components/common/Loding/Loding';
import { useFetchMusicList } from './hooks/useFetchMusicList';

const RelatedList = () => {
  const [chooseEmotionState, setChooseEmotionState] =
    useRecoilState(chooseEmotion);
  const subEmotionListState = useRecoilValue(subEmotionList);

  const { data, isLoading } = useFetchMusicList();

  return (
    <>
      <div className={styles.subListSection}>
        {subEmotionListState.map((subList) => (
          <Button
            key={subList.id}
            text={subList.text}
            className={
              subList.text === chooseEmotionState.subList.text
                ? styles.subListBtn_active
                : styles.subListBtn
            }
            onClick={() => {
              setChooseEmotionState({ ...chooseEmotionState, subList });
            }}
          />
        ))}
      </div>
      {isLoading && <Loding />}

      <ul className={styles.relatedListUl}>
        {!isLoading &&
          data.map((video) => (
            <VideoCard key={video.id.videoId} video={video} />
          ))}
      </ul>
    </>
  );
};

export default RelatedList;
