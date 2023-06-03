import { useQuery } from 'react-query';
import { getMusicList } from '../services/youtube/youtube';
import { playlistSearch } from '../recoil/search/search';
import { useRecoilValue } from 'recoil';

export const useFetchSearchList = () => {
  const search = useRecoilValue(playlistSearch);

  const { data, isLoading } = useQuery(
    ['getSearchList', search],
    async () => {
      const params = {
        key: process.env.REACT_APP_YOUTUBE_KEY,
        part: 'snippet',
        q: `${search} 플레이리스트`,
        maxResults: 12,
        type: 'video',
        videoDuration: 'long',
      };

      const a = await getMusicList(params);
      return a.items;
    },
    {
      enabled: !!search,
      refetchOnWindowFocus: false,
      useErrorBoundary: true,
      cacheTime: 5 * 10 * 1000,
      staleTime: 5 * 10 * 1000,
    }
  );

  return { data, isLoading };
};
