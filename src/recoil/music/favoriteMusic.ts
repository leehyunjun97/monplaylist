import { atom } from 'recoil';
import { IVideo } from '../../types/video';

const favoriteMusicList = atom<IVideo[]>({
  key: '#favoriteMusicList',
  default: JSON.parse(localStorage.getItem('favoriteMusic') || '[]'),
});

export { favoriteMusicList };
