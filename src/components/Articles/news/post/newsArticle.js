import React, { Component } from "react";
import { URL } from "../../../../config";
import "../../article.css";
import Header from "./Header";
import Body from "./Body";

class NewsArticles extends Component {
  state = {
    article: [],
    team: []
  };

  componentWillMount() {
    fetch(`${URL}/articles?id=${this.props.match.params.id}`)
      .then(res => res.json())
      .then(data => {
        let article = data[0];

        fetch(`${URL}/teams?id=${article.team}`)
          .then(res => res.json())
          .then(team => this.setState({ article, team }));
      });
  }

  render() {
    const { team, article } = this.state;
    return (
      <div className="articleWrapper">
        <Header
          teamData={team[0]}
          date={article.date}
          author={article.author}
        />
        <Body image={article.image} title={article.title} body={article.body} />
      </div>
    );
  }
}

export default NewsArticles;
