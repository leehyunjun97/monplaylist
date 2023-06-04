import { atom } from 'recoil';

const favoriteMusicList = atom({
  key: '#favoriteMusicList',
  default: JSON.parse(localStorage.getItem('favoriteMusic')) ?? [],
});

export { favoriteMusicList };
