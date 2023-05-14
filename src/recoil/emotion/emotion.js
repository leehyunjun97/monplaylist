import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

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
  effects_UNSTABLE: [persistAtom],
});
