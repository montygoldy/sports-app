import React from "react";
import '../../Articles/article.css';

const VideoPlayer = props => {
  return (
    <iframe
      title="videoplayer"
      width="100%"
      height="300px"
      src={`https://www.youtube.com/embed/${props.url}`}
    ></iframe>
  );
};

export default VideoPlayer;
