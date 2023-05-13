import { atom } from 'recoil';

export const chooseEmotion = atom({
  key: '#chooseEmotion',
  default: {
    id: '',
    text: '',
    subList: {
      id: '',
      text: '',
    },
  },
});
