import { useRecoilState } from 'recoil';
import { chooseEmotion, subEmotionList } from '../../recoil/emotion/emotion';
import {
  excitingList,
  feelingMusicList,
  quietList,
  weatherList,
} from '../../util/wantFeelingList';
import styles from './home.module.css';
import Button from '../../components/common/Button/Button';
import { useNavigate } from 'react-router-dom';

const ChooseEmotion = () => {
  const [chooseEmotionState, setChooseEmotionState] =
    useRecoilState(chooseEmotion);
  const [subEmotionListState, setSubEmotionList] =
    useRecoilState(subEmotionList);

  const navigate = useNavigate();

  const feelingClickHandler = (item) => {
    setChooseEmotionState({
      id: item.id,
      text: item.text,
      subList: {
        id: '',
        text: '',
      },
    });
  };

  const subFeelingClickHandler = (item) => {
    setChooseEmotionState({
      ...chooseEmotionState,
      subList: {
        id: item.id,
        text: item.text,
      },
    });
  };

  const viewSubListHandler = (id) => {
    switch (id) {
      case 1:
        setSubEmotionList(excitingList);
        break;
      case 2:
        setSubEmotionList(quietList);
        break;
      case 3:
        setSubEmotionList(weatherList);
        break;

      default:
        return [];
    }
  };

  const isActiveHandler = (text, itemText) => {
    return text === itemText ? styles.isActive : styles.passive;
  };

  return (
    <div>
      <div className={styles.mainFeeling}>
        {feelingMusicList.map((item) => (
          <Button
            key={item.id}
            onClick={() => {
              feelingClickHandler(item);
              viewSubListHandler(item.id);
            }}
            className={`${isActiveHandler(
              chooseEmotionState.text,
              item.text
            )} ${styles.mainFeelingBtn}`}
            text={item.text}
          />
        ))}
      </div>

      <div className={styles.subFeeling}>
        {subEmotionListState.map((item) => (
          <Button
            key={item.id}
            text={item.text}
            className={`${isActiveHandler(
              chooseEmotionState.subList.text,
              item.text
            )} ${styles.subFeelingBtn}`}
            onClick={() => subFeelingClickHandler(item)}
          />
        ))}
      </div>

      <div className={styles.startFeeling}>
        {chooseEmotionState.subList.id && (
          <Button
            text={'START'}
            className={styles.startFeelingBtn}
            onClick={() => navigate('/playlist')}
          />
        )}
      </div>
    </div>
  );
};

export default ChooseEmotion;
