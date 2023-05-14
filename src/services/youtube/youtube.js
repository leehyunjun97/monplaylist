import axios from 'axios';

const getMusicList = async (params) => {
  try {
    const getComplet = await axios.get(
      'https://www.googleapis.com/youtube/v3/search',
      { params }
    );
    console.log('api 불러지는지 확인용');
    return getComplet.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export { getMusicList };
