import { useRecoilState, useRecoilValue } from 'recoil';
import { chooseEmotion, subEmotionList } from '../../recoil/emotion/emotion';
import styles from './playlist.module.css';
import Button from '../../components/common/Button/Button';
import Loding from '../../components/common/Loding/Loding';
import { useFetchMusicList } from '../../hooks/useFetchMusicList';
import VideoListUl from '../../components/common/Ul/VideoListUl';

const RelatedList = () => {
  const [chooseEmotionState, setChooseEmotionState] =
    useRecoilState(chooseEmotion);
  const subEmotionListState = useRecoilValue(subEmotionList);

  const { data, isLoading } = useFetchMusicList();

  const isActiveHandler = (text, stateText) => {
    return text === stateText ? styles.subListBtn_active : styles.subListBtn;
  };

  return (
    <>
      <div className={styles.subListSection}>
        {subEmotionListState.map((subList) => (
          <Button
            key={subList.id}
            text={subList.text}
            className={isActiveHandler(
              subList.text,
              chooseEmotionState.subList.text
            )}
            onClick={() => {
              setChooseEmotionState({ ...chooseEmotionState, subList });
            }}
          />
        ))}
      </div>
      {isLoading && <Loding />}

      {!isLoading && <VideoListUl list={data} />}
    </>
  );
};

export default RelatedList;
