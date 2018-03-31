import React, { Component } from "react";
import SliderTemplates from "./slider_templates";
import { URL } from "../../../config";
class NewsSlider extends Component {
  state = {
    news: []
  };

  componentWillMount() {
    fetch(
      `${URL}/articles?_start=${this.props.start}&_end=${this.props.amount}`
    )
      .then(res => res.json())
      .then(news => this.setState({ news }));
  }

  render() {
    return <SliderTemplates data={this.state.news} type={this.props.type} />;
  }
}

export default NewsSlider;
