import { useRecoilState, useRecoilValue } from 'recoil';
import { chooseEmotion, subEmotionList } from '../../recoil/emotion/emotion';
import styles from './style/playlist.module.css';
import Button from '../../components/common/Button/Button';
import Loding from '../../components/common/Loding/Loding';
import { useFetchMusicList } from '../../hooks/useFetchMusicList';
import VideoListUl from '../../components/common/Ul/VideoListUl';
import { IFeelingList } from '../../types/feelingList';

const RelatedList = () => {
  const [chooseEmotionState, setChooseEmotionState] =
    useRecoilState(chooseEmotion);
  const subEmotionListState = useRecoilValue(subEmotionList);

  const { data, isLoading } = useFetchMusicList();

  const isActiveHandler = (text: string, stateText: string) => {
    return text === stateText ? styles.subListBtn_active : styles.subListBtn;
  };

  return (
    <>
      <div className={styles.subListSection}>
        {subEmotionListState.map((subList: IFeelingList) => (
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
