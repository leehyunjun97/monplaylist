import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

const chooseEmotion = atom({
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

const subEmotionList = atom({
  key: '#subEmotionList',
  default: [],
  effects_UNSTABLE: [persistAtom],
});

export { chooseEmotion, subEmotionList };
