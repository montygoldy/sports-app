import React, { Component } from "react";
import { URL } from "../../../../config";
import "../../article.css";
import Header from "./header";
import VideoPlayer from "../../../Widgets/VideoPlayer/videoPlayer";
import VideosRelated from "../../../Widgets/VideoList/relatedVideos/VideosRelated";
class VideoArticle extends Component {
  state = {
    article: [],
    team: [],
    teams: [],
    related: []
  };

  componentWillMount() {
    fetch(`${URL}/videos?id=${this.props.match.params.id}`)
      .then(res => res.json())
      .then(data => {
        let article = data[0];

        fetch(`${URL}/teams?id=${article.team}`)
          .then(res => res.json())
          .then(team => {
            this.setState({ article, team });
            this.getRelated();
          });
      });
  }

  getRelated = () => {
    fetch(`${URL}/teams`)
      .then(res => res.json())
      .then(data => {
        let teams = data;

        fetch(`${URL}/videos?q=${this.state.team[0].city}&_limit=3`)
          .then(res => res.json())
          .then(resData => {
            this.setState({ related: resData, teams });
          });
      });
  };

  render() {
    const { article, team } = this.state;

    return (
      <div>
        <Header teamData={team[0]} />
        <div className="videoWrapper">
          <h1>{article.title}</h1>
          <VideoPlayer url={article.url} />
        </div>
        <VideosRelated data={this.state.related} teams={this.state.teams} />
      </div>
    );
  }
}

export default VideoArticle;
