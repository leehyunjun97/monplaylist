import axios from 'axios';
import { IParams } from '../../types/youtubeApi';

const getMusicList = async (params: IParams) => {
  try {
    const getComplet = await axios.get(
      'https://www.googleapis.com/youtube/v3/search',
      { params }
    );
    return getComplet.data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export { getMusicList };
