import React from 'react';
import styles from './style/header.module.css';
import { useNavigate } from 'react-router-dom';
import Button from '../common/Button/Button';
import {
  faHeart,
  faMagnifyingGlass,
  faListUl,
} from '@fortawesome/free-solid-svg-icons';
import { useRecoilValue } from 'recoil';
import { chooseEmotion } from '../../recoil/emotion/emotion';

const Header = () => {
  const navigate = useNavigate();
  const chooseEmotionState = useRecoilValue(chooseEmotion);

  return (
    <div className={styles.header}>
      <Button
        text={'MONPLAYLIST'}
        className={styles.headerTitle}
        onClick={() => navigate('/')}
      />
      <div className={styles.headerBtnSection}>
        <Button.IconBtn
          text={<span className={styles.headerSpan}>RESULT</span>}
          icon={faListUl}
          iconClassName={styles.headerIcon}
          onClick={() => {
            if (chooseEmotionState.subList.text) {
              navigate('/playlist');
            }
          }}
        />

        <Button.IconBtn
          text={<span className={styles.headerSpan}>MYPLAYLIST</span>}
          icon={faHeart}
          iconClassName={styles.headerIcon}
          onClick={() => navigate('/myPlaylist')}
        />

        <Button.IconBtn
          text={<span className={styles.headerSpan}>SEARCH</span>}
          icon={faMagnifyingGlass}
          iconClassName={styles.headerIcon}
          onClick={() => navigate('/search')}
        />
      </div>
    </div>
  );
};
export default Header;
