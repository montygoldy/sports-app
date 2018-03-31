import React, { Component } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Link } from "react-router-dom";
import { URL } from "../../../config";

class NewsList extends Component {
  state = {
    items: [],
    start: this.props.start,
    end: this.props.amount + this.props.start,
    amount: this.props.amount
  };

  componentWillMount() {
    fetch(`${URL}/articles?_start=${this.state.start}&_end=${this.state.end}`)
      .then(res => res.json())
      .then(data => this.setState({ items: [...this.state.items, ...data] }));
  }
  render() {
    return <div>Hello</div>;
  }
}

export default NewsList;
