import React from 'react';
import styles from './header.module.css';
import { useNavigate } from 'react-router-dom';
import Button from '../common/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
        <Button
          icon={
            <FontAwesomeIcon icon={faHeart} style={{ marginRight: '6px' }} />
          }
          text={'MYPLAYLIST'}
          onClick={() => navigate('/myPlaylist')}
        />
        <Button
          icon={
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              style={{ marginRight: '6px' }}
            />
          }
          text={'SEARCH'}
        />
      </div>
    </div>
  );
};
export default Header;
