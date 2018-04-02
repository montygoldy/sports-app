import React from 'react';
import NewsSlider from "../../../Widgets/Slider/NewsSlider";
import NewsList from "../../../Widgets/NewsList/NewsList";

const NewsMain = () => {
  return (
    <div>
      <NewsSlider type="featured" settings={{dots: false}} start={0} amount={3}/>
      <NewsList type="cardMain" loadMore={true} start={3} amount={10} />
    </div>
  )
}

export default NewsMain;