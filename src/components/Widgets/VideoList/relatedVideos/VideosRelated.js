import React from 'react';
import '../videoList.css';
import VideoListTemplate from '../videoListTemplate';


const VideosRelated = (props) => {
  return (
    <div className="relatedWrapper">
      <VideoListTemplate data={props.data} teams={ props.teams } />
    </div>
  )
}

export default VideosRelated;