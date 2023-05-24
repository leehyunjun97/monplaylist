import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

const playingMusic = atom({
  key: '#playingMusic',
  default: {
    kind: '',
    etag: '',
    id: {
      kind: '',
      videoId: '',
    },
    snippet: {
      publishedAt: '',
      channelId: '',
      title: '',
      description: '',
      thumbnails: {
        default: {
          url: '',
          width: '',
          height: '',
        },
        medium: {
          url: '',
          width: '',
          height: '',
        },
        high: {
          url: '',
          width: '',
          height: '',
        },
      },
      channelTitle: '',
      liveBroadcastContent: '',
      publishTime: '',
    },
  },
  effects_UNSTABLE: [persistAtom],
});

const playingMusicState = atom({
  key: '#musicState',
  default: {
    isPause: false,
    volume: 0.1,
  },
  effects_UNSTABLE: [persistAtom],
});

export { playingMusic, playingMusicState};
