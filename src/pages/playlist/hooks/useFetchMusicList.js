import { useQuery } from 'react-query';
import { useRecoilValue } from 'recoil';
import { chooseEmotion } from '../../../recoil/emotion/emotion';
import { getMusicList } from '../../../services/youtube/youtube';

export const useFetchMusicList = () => {
  const chooseEmotionState = useRecoilValue(chooseEmotion);

  const { data, isLoading } = useQuery(
    ['getMusicList', chooseEmotionState],
    async () => {
      const params = {
        key: process.env.REACT_APP_YOUTUBE_KEY,
        part: 'snippet',
        q: `${chooseEmotionState.text} ${chooseEmotionState.subList.text} 플레이리스트`,
        maxResults: 12,
        type: 'video',
        videoDuration: 'long',
      };

      const a = await getMusicList(params);
      return a.items;
    },
    {
      enabled: !!(chooseEmotionState.text && chooseEmotionState.text),
      refetchOnWindowFocus: false,
      useErrorBoundary: true,
      cacheTime: 5 * 10 * 1000,
      staleTime: 5 * 10 * 1000,
    }
  );

  return { data, isLoading };
};
