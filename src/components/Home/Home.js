import React from "react";
import NewsSlider from "../Widgets/Slider/NewsSlider";
import NewsList from "../Widgets/NewsList/NewsList";
import VideoList from "../Widgets/VideoList/VideoList";

const Home = () => {
  return (
    <div>
      <NewsSlider type="featured" start={0} amount={3} />
      <NewsList type="card" loadmore={true} start={3} amount={3} />
      <VideoList
        type="card"
        title={true}
        loadmore={true}
        start={0}
        amount={3}
      />
    </div>
  );
};

export default Home;
