import React, { Component } from "react";
import "./videoList.css";
import { URL } from "../../../config";
import Button from "../Buttons/buttons";

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

  loadMore = () => {};

  renderButton = () => {
    return this.props.loadmore ? (
      <Button
        type="loadmore"
        loadmore={this.loadMore}
        text="Load More Videos"
      />
    ) : (
      <Button type="linkTo" text="More Videos" linkTo="/videos/" />
    );
  };

  render() {
    return (
      <div className="videosList_wrapper">
        {this.renderTitle()}
        {this.renderButton()}
      </div>
    );
  }
}

export default VideoList;
