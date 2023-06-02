import { atom } from 'recoil';

export const favoriteMusicAtom = atom({
  key: '#favoriteMusicAtom',
  default: JSON.parse(localStorage.getItem('favoriteMusic')) ?? [],
});
