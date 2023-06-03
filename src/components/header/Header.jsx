import React from 'react';
import styles from './header.module.css';
import { useNavigate } from 'react-router-dom';
import Button from '../common/Button/Button';
import { faHeart, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.header}>
      <Button
        text={'MONPLAYLIST'}
        className={styles.headerTitle}
        onClick={() => navigate('/')}
      />
      <div className={styles.headerBtnSection}>
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
