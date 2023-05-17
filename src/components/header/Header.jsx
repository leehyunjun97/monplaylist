import React from 'react';
import styles from './header.module.css';
import { useRecoilValue } from 'recoil';
import { chooseEmotion } from '../../recoil/emotion/emotion';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const chooseEmotionValue = useRecoilValue(chooseEmotion);
  const navigate = useNavigate();

  return (
    <div className={styles.header}>
      <button className={styles.headerTitle} onClick={() => navigate('/')}>
        MONPLAYLIST
      </button>
      <div className={styles.headerBtnSection}>
        {/* {chooseEmotionValue.id && <button>따른거 들을래잉</button>} */}
        <button>MYPLAYLIST</button>
        <button>SEARCH</button>
      </div>
    </div>
  );
};
export default Header;
