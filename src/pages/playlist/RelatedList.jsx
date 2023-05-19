import { useQuery } from 'react-query';
import { useRecoilState, useRecoilValue } from 'recoil';
import { chooseEmotion, subEmotionList } from '../../recoil/emotion/emotion';
import { getMusicList } from '../../services/youtube/youtube';
import VideoCard from '../../components/common/card/VideoCard';
import styles from './playlist.module.css';
import Button from '../../components/common/Button/Button';

const RelatedList = () => {
  const [chooseEmotionState, setChooseEmotionState] =
    useRecoilState(chooseEmotion);
  const subEmotionListState = useRecoilValue(subEmotionList);

  const { data, isLoading } = useQuery(
    ['getMusicList', chooseEmotionState],
    async () => {
      const params = {
        key: process.env.REACT_APP_YOUTUBE_KEY,
        part: 'snippet',
        q: `${chooseEmotionState.text} ${chooseEmotionState.subList.text} 플레이리스트`,
        maxResults: 12,
        type: 'video',
        videoDuration: 'long',
      };

      const a = await getMusicList(params);
      return a.items;
    },
    {
      enabled: !!(chooseEmotionState.text && chooseEmotionState.text),
      refetchOnWindowFocus: false,
      useErrorBoundary: true,
      cacheTime: 5 * 10 * 1000,
      staleTime: 5 * 10 * 1000,
    },
  );

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
      {isLoading && <p style={{ color: 'white' }}>Loading...</p>}

      <ul className={styles.relatedListUl}>
        {!isLoading &&
          data &&
          data.map((video) => (
            <VideoCard key={video.id.videoId} video={video} />
          ))}
      </ul>
    </>
  );
};

export default RelatedList;
