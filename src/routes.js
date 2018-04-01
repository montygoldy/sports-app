import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import Layout from "./Hoc/Layout";
import NewsArticles from "./components/Articles/news/post/newsArticle";
class Routes extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/articles/:id" component={NewsArticles} />
        </Switch>
      </Layout>
    );
  }
}

export default Routes;
