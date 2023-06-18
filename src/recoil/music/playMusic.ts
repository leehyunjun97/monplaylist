import { atom } from 'recoil';
import { IVideo } from '../../types/video';

const playingMusic = atom<IVideo>({
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
});

const playingMusicState = atom({
  key: '#musicState',
  default: {
    isPause: false,
    volume: 0.1,
  },
});

export { playingMusic, playingMusicState };
