import React from 'react';
import VideoList from "../../../Widgets/VideoList/VideoList";

const VideosMain = () => {
  return (
    <div>
      <VideoList type="card" title={false} loadMore={true} start={0} amount={10} />
    </div>
  )
}

const VideosMain;