import React, { Component } from "react";
import "./videoList.css";
import { URL } from "../../../config";
import Button from "../Buttons/buttons";
import VideoListTemplate from "./videoListTemplate";
class VideoList extends Component {
  state = {
    teams: [],
    videos: [],
    start: this.props.start,
    end: this.props.start + this.props.amount,
    amount: this.props.amount
  };

  renderTitle = () => {
    return this.props.title ? (
      <h3>
        <strong>NBA</strong>Videos
      </h3>
    ) : null;
  };

  componentWillMount() {
    this.request(this.state.start, this.state.end);
  }

  request = (start, end) => {
    if (this.state.teams.length < 1) {
      fetch(`${URL}/teams`)
        .then(res => res.json())
        .then(teams => this.setState({ teams }));
    }

    fetch(`${URL}/videos?_start=${start}&_end=${end}`)
      .then(res => res.json())
      .then(data =>
        this.setState({ videos: [...this.state.videos, ...data], start, end })
      );
  };

  renderVideos = () => {
    let template = null;
    switch (this.props.type) {
      case "card":
        template = (
          <VideoListTemplate
            data={this.state.videos}
            teams={this.state.teams}
          />
        );

        break;
      default:
        template = null;
    }
    return template;
  };

  loadMore = () => {
    let end = this.state.end + this.state.amount;
    this.request(this.state.end, end);
  };

  renderButton = () => {
    return this.props.loadmore ? (
      <Button
        type="loadmore"
        loadMore={this.loadMore}
        text="Load More Videos"
      />
    ) : (
      <Button type="linkTo" text="More videos" linkTo="/videos" />
    );
  };

  render() {
    return (
      <div className="videosList_wrapper">
        {this.renderTitle()}
        {this.renderVideos()}
        {this.renderButton()}
      </div>
    );
  }
}

export default VideoList;
