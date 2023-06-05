import React from 'react';
import VideoListUl from '../../components/common/Ul/VideoListUl';

const FavoriteMusicList = () => {
  const favorite = JSON.parse(localStorage.getItem('favoriteMusic'));

  return (
    <>
      <VideoListUl list={favorite} />
    </>
  );
};

export default FavoriteMusicList;
