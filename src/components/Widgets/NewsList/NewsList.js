import React, { Component } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Link } from "react-router-dom";
import { URL } from "../../../config";
import "./newsList.css";
import Button from "../Buttons/buttons";
import CardInfo from "../CardInfo/CardInfo";
class NewsList extends Component {
  state = {
    items: [],
    teams: [],
    start: this.props.start,
    end: this.props.amount + this.props.start,
    amount: this.props.amount
  };

  componentWillMount() {
    this.request(this.state.start, this.state.end);
  }

  renderNews = type => {
    let template = null;
    switch (type) {
      case "card":
        template = this.state.items.map((item, i) => (
          <CSSTransition
            classNames={{
              enter: "newsList_wrapper",
              enterActive: "newsList_wrapper_enter"
            }}
            timeout={500}
            key={item.id}
          >
            <div>
              <div className="newsList_item">
                <Link to={`/articles/${item.id}`}>
                  <CardInfo
                    teams={this.state.teams}
                    teamId={item.team}
                    date={item.date}
                  />
                  <h2>{item.title}</h2>
                </Link>
              </div>
            </div>
          </CSSTransition>
        ));
        break;
      case "cardMain":
        template = this.state.items.map((item, i) => (
          <CSSTransition
            classNames={{
              enter: "newsList_wrapper",
              enterActive: "newsList_wrapper_enter"
            }}
            timeout={500}
            key={item.id}
          >
            <Link to={`/articles/${item.id}`}>
              <div className="flex_wrapper">
                <div
                  className="left"
                  style={{
                    background: `url('/images/articles/${item.image}')`
                  }}
                >
                  <div />
                </div>
                <div className="right">
                  <CardInfo
                    teams={this.state.teams}
                    teamId={item.team}
                    date={item.date}
                  />
                  <h2>{item.title}</h2>
                </div>
              </div>
            </Link>
          </CSSTransition>
        ));
        break;
      default:
        template = null;
    }
    return template;
  };

  request = (start, end) => {
    if (this.state.teams.length < 1) {
      fetch(`${URL}/teams`)
        .then(res => res.json())
        .then(teams => this.setState({ teams }));
    }
    fetch(`${URL}/articles?_start=${start}&_end=${end}`)
      .then(res => res.json())
      .then(data =>
        this.setState({ items: [...this.state.items, ...data], start, end })
      );
  };

  loadMore = () => {
    let end = this.state.end + this.state.amount;
    this.request(this.state.end, end);
  };

  render() {
    return (
      <div>
        <TransitionGroup component="div" className="list">
          {this.renderNews(this.props.type)}
        </TransitionGroup>
        <Button
          type="loadmore"
          loadMore={this.loadMore}
          text="Load more news"
        />
      </div>
    );
  }
}

export default NewsList;
