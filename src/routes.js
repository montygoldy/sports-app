import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import Layout from "./Hoc/Layout";
import NewsArticles from "./components/Articles/news/post/newsArticle";
import VideoArticle from "./components/Articles/videos/video/videoArticle";
import NewsMain from './components/Articles/news/main/newsMain';
import VideosMain from "./components/Articles/videos/videosMain/videoMain";
class Routes extends Component {
  render() {
    return <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/news" component={NewsMain} />
          <Route path="/articles/:id" component={NewsArticles} />
          <Route path="/videos/:id" component={VideoArticle} />
          <Route path="/videos" component={VideosMain} />
        </Switch>
      </Layout>;
  }
}

export default Routes;
