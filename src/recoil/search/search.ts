import { atom } from 'recoil';

const playlistSearch = atom({
  key: '#playlistSearch',
  default: '',
});

export { playlistSearch };
