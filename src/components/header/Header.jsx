import React from 'react';
import styles from './header.module.css';
import { useNavigate } from 'react-router-dom';
import Button from '../common/Button/Button';

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
        <Button text={'MYPLAYLIST'} onClick={()=> navigate('/myPlaylist')}/>
        <Button text={'SEARCH'}/>
      </div>
    </div>
  );
};
export default Header;
