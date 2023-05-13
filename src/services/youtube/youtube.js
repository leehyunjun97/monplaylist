import axios from 'axios';

const getMusicList = async (params) => {
  try {
    const getComplet = await axios.get(
      'https://www.googleapis.com/youtube/v3/search',
      { params }
    );
    return getComplet.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export { getMusicList };
