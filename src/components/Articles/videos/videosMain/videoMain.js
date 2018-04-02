import React from 'react';
import VideoList from "../../../Widgets/VideoList/VideoList";

const VideosMain = () => {
  return (
    <div>
      <VideoList type="card" title={false} loadmore={true} start={0} amount={8} />
    </div>
  )
}

export default VideosMain;