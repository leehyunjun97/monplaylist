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
import { getMusicList } from '../../services/youtube/youtube';

const ChooseEmotion = () => {
  const [chooseEmotionState, setChooseEmotionState] =
    useRecoilState(chooseEmotion);
  const [subListState, setSubListState] = useState([]);

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

  const startHandler = async () => {
    const params = {
      key: process.env.REACT_APP_YOUTUBE_KEY,
      part: 'snippet',
      q: `${chooseEmotionState.text} ${chooseEmotionState.subList.text} 플레이리스트`,
      maxResults: 12,
      type: 'video',
      videoDuration: 'long',
    };

    try {
      const getComplet = await getMusicList(params);
      console.log(getComplet);
    } catch (error) {
      console.log(error);
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
            // onClick={startHandler}
          />
        )}
      </div>
    </div>
  );
};

export default ChooseEmotion;
