import React, { Component } from "react";
import { URL } from "../../../../config";
import "../../article.css";
import Header from './header';

class VideoArticle extends Component {
  state = {
    article: [],
    team: []
  };

  componentWillMount() {
    fetch(`${URL}/videos?id=${this.props.match.params.id}`)
      .then(res => res.json())
      .then(data => {
        let article = data[0];

        fetch(`${URL}/teams?id=${article.team}`)
          .then(res => res.json())
          .then(team => this.setState({ article, team }));
      });
  }

  render() {
    const { article, team } = this.state;
    
    return (
      <div>
        <Header teamData={team[0]} />
        <div>2</div>
      </div>
    );
  }
}

export default VideoArticle;
