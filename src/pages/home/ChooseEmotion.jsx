import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { chooseEmotion } from '../../recoil/emotion/emotion';
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
  const [subListState, setSubListState] = useState([]);

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
        setSubListState(excitingList);
        break;
      case 2:
        setSubListState(quietList);
        break;
      case 3:
        setSubListState(weatherList);
        break;

      default:
        return [];
    }
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
            className={[
              chooseEmotionState.text === item.text
                ? styles.isActive
                : styles.passive,
              styles.mainFeelingBtn,
            ].join(' ')}
            text={item.text}
          />
        ))}
      </div>

      <div className={styles.subFeeling}>
        {subListState.map((item) => (
          <Button
            key={item.id}
            text={item.text}
            className={[
              chooseEmotionState.subList.text === item.text
                ? styles.isActive
                : styles.passive,
              styles.subFeelingBtn,
            ].join(' ')}
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