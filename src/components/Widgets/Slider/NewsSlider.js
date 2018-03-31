import React, { Component } from "react";
import SliderTemplates from "./slider_templates";

class NewsSlider extends Component {
  state = {
    news: []
  };

  componentWillMount() {
    fetch(`http://localhost:3001/articles?_start=0&_end=3`)
      .then(res => res.json())
      .then(news => this.setState({ news }));
  }

  render() {
    return <SliderTemplates data={this.state.news} type="featured" />;
  }
}

export default NewsSlider;
